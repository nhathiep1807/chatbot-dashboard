import { chatbotQuery } from "hooks/use-bot";
import { useParams } from "react-router-dom";
import "./style/BotDetails.css";
import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import CreateBotForm from "./CreateBotForm";

export default function BotDetail() {
  const [activeTab, setActiveTab] = React.useState(1);
  const { id } = useParams();
  const { data } = chatbotQuery.useDetail(id);
  const botDetails = data?.data;
  const { mutate: updateBot } = chatbotQuery.mutation.useUpdateChatbot();
  const { mutate: updateBotKnowledge } =
    chatbotQuery.mutation.useUpdateChatbotKnowledge();
  const { mutate: generateChatbot } =
    chatbotQuery.mutation.useGenerateChatbot();
  const [formPropertiesData, setFormPropertiesData] = React.useState({
    name: "",
    description: "",
    persona: "",
    prompt: "",
    instruction: "",
    plainText: "",
  });

  const [webUrls, setWebUrls] = React.useState([
    {
      id: new Date().toISOString(),
      url: "",
    },
  ]);

  const handleAddUrl = () => {
    setWebUrls([
      ...webUrls,
      {
        id: new Date().toISOString(),
        url: "",
      },
    ]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormPropertiesData({
      ...formPropertiesData,
      [name]: value,
    });
  };

  const handleChangeUrls = (id) => (e) => {
    const { value } = e.target;
    setWebUrls(
      webUrls.map((webUrl) => {
        if (webUrl.id === id) {
          return {
            ...webUrl,
            url: value,
          };
        }
        return webUrl;
      })
    );
  };

  const handleSubmit = () => {
    updateBot(
      { id, ...formPropertiesData },
      {
        onSuccess() {
          toast.success("Bot updated successfully!");
        },
      }
    );
  };

  const handleSubmitKnowledge = () => {
    console.log({ formPropertiesData, webUrls });
    updateBotKnowledge(
      {
        id,
        plainText: formPropertiesData.plainText,
        websiteUrls: webUrls.map((webUrl) => webUrl.url).filter((url) => url),
      },
      {
        onSuccess() {
          toast.success("Bot knowledge updated successfully!");
        },
      }
    );
  };

  const handleGenerateChatbot = () => {
    generateChatbot(id, {
      onSuccess(res) {
        const data = res.data;
        toast.success("Bot generated successfully!");

        const d = document;
        // Create and append the div element
        const div = d.createElement("div");
        div.id = "codelight-chatbot";
        d.getElementsByTagName("body")[0].appendChild(div);

        // Create and append the script element
        const script = d.createElement("script");
        script.src =
          "https://tscout.s3.ap-southeast-1.amazonaws.com/ai-chatbot/codelight-chatbot%20(1).js";
        script.setAttribute("chat-bot-id", id);
        script.async = true;
        d.getElementsByTagName("head")[0].appendChild(script);
      },
    });
  };

  React.useEffect(() => {
    if (botDetails) {
      setFormPropertiesData({
        ...botDetails,
        plainText: botDetails.knowledge?.plainText,
      });
      if (botDetails.knowledge?.websiteUrls) {
        setWebUrls(
          botDetails.knowledge.websiteUrls.map((url) => ({
            id: Math.random().toString(),
            url,
          }))
        );
      }
    }
  }, [botDetails]);

  return (
    <div className="content">
      {id === "add" ? (
        <CreateBotForm />
      ) : (
        <div>
          <h1>{botDetails?.name}</h1>
          <div className="tab-wrapper">
            {TABS.map((tab) => (
              <div
                key={tab.id}
                className={`tab ${tab.id === activeTab && "active-tab"}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </div>
            ))}
          </div>
          <div key={activeTab}>
            {activeTab === 1 ? (
              <Row>
                <Col md="6">
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h4">Edit bot properties</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form id="form-properties">
                        <label>Name</label>
                        <FormGroup>
                          <Input
                            name="name"
                            defaultValue={botDetails?.name}
                            onChange={handleChange}
                          />
                        </FormGroup>
                        <label>Description</label>
                        <FormGroup>
                          <Input
                            type="textarea"
                            name="description"
                            defaultValue={botDetails?.description}
                            onChange={handleChange}
                          />
                        </FormGroup>
                        <label>Persona</label>
                        <FormGroup>
                          <Input
                            type="textarea"
                            name="persona"
                            defaultValue={botDetails?.persona}
                            onChange={handleChange}
                          />
                        </FormGroup>
                        <label>Prompt</label>
                        <FormGroup>
                          <Input
                            type="textarea"
                            name="prompt"
                            defaultValue={botDetails?.prompt}
                            onChange={handleChange}
                          />
                        </FormGroup>
                        <label>Instruction</label>
                        <FormGroup>
                          <Input
                            type="textarea"
                            name="instruction"
                            defaultValue={botDetails?.instruction}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="btn-fill"
                        color="primary"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Update
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col md="6">
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h4">Edit bot knowledge</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form id="form-knowledge">
                        <label>Plain text</label>
                        <FormGroup>
                          <Input
                            type="textarea"
                            name="plainText"
                            defaultValue={botDetails?.knowledge?.plainText}
                            onChange={handleChange}
                          />
                        </FormGroup>
                        <label>Website urls</label>
                        {webUrls.map((webUrl) => (
                          <div key={webUrl.id}>
                            <FormGroup>
                              <Input
                                onChange={handleChangeUrls(webUrl.id)}
                                defaultValue={webUrl.url}
                              />
                            </FormGroup>
                          </div>
                        ))}
                        <button
                          type="button"
                          className="add-url-btn"
                          onClick={handleAddUrl}
                        >
                          Add url
                        </button>
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="btn-fill"
                        color="primary"
                        type="submit"
                        onClick={handleSubmitKnowledge}
                      >
                        Update
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            )}
          </div>
          <ToastContainer />
        </div>
      )}
      {id !== "add" && (
        <Button onClick={handleGenerateChatbot}>Generate AI</Button>
      )}
    </div>
  );
}

const TABS = [
  {
    id: 1,
    name: "Properties",
  },
  {
    id: 2,
    name: "Knowledge",
  },
];
