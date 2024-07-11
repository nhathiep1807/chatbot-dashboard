import { chatbotQuery } from "hooks/use-bot";
import "./style/BotList.css";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// reactstrap components
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
  Modal,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

function BotCard({ id, name, description }) {
  const [openModal, setOpenModal] = React.useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/admin/bot-list/${id}`);
  };

  const { mutate: removeBot } = chatbotQuery.mutation.useDeleteChatbot();

  const handleRemoveBot = () => {
    removeBot(id, {
      onSuccess() {
        toast.success("Bot removed successfully!");
        setOpenModal(false);
      },
    });
  };

  return (
    <div className="bot-card" onClick={handleClick}>
      <h3>{name}</h3>
      <p>{description}</p>
      <button
        className="button-remove"
        color="danger"
        onClick={(e) => {
          e.stopPropagation();
          setOpenModal(true);
        }}
      >
        Remove
      </button>
      <Modal
        isOpen={openModal}
        toggle={() => setOpenModal((prev) => !prev)}
        className="modal-remove"
      >
        <p className="warning-text">
          Are you sure you want to remove this chatbot? This action cannot be
          undone.
        </p>
        <div>
          <Button color="secondary" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
          <Button color="danger" onClick={handleRemoveBot}>
            Remove
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default function BotList() {
  const [formData, setFormData] = React.useState({
    name: "",
    description: "",
  });
  const { data } = chatbotQuery.useList();
  const botList = data?.data;
  const navigate = useNavigate();

  const { mutate: createBot } = chatbotQuery.mutation.useCreateChatbot();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    createBot(formData, {
      onSuccess() {
        toast.success("Bot created successfully!");

        //reset form
        setFormData({
          name: "",
          description: "",
        });
      },
    });
  };

  return (
    <div className="content">
      <div className="bot-list-title">
        <p>Explore bots you created</p>
        <Button
          className="btn-fill"
          color="primary"
          type="submit"
          onClick={() => navigate(`/admin/bot-list/add`)}
        >
          Create new bot
        </Button>
      </div>
      <div className="bot-list-wrapper">
        {botList && botList.map((bot) => <BotCard key={bot.id} {...bot} />)}
      </div>
      {/* <Row>
        <Col md="6">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Create bot</CardTitle>
            </CardHeader>
            <CardBody>
              <Form>
                <label>Name</label>
                <FormGroup>
                  <Input name="name" onChange={handleChange} />
                </FormGroup>
                <label>Description</label>
                <FormGroup>
                  <Input
                    type="textarea"
                    name="description"
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
                Create
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <ToastContainer />
      </Row> */}
    </div>
  );
}
