import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";
import { authQuery } from "hooks/use-auth";
import cookie from "utils/cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = React.useState({});
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { mutate: login, isLoading, isError } = authQuery.mutation.useLogin();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    login(formData, {
      onSuccess({ data }) {
        const { accessToken } = data;
        cookie.set("accessToken", accessToken);
        navigate("/admin/bot-list");
      },
    });
  };

  React.useEffect(() => {
    document.body.classList.toggle("login-page");
    return function cleanup() {
      document.body.classList.toggle("login-page");
    };
  });

  React.useEffect(() => {
    const accessToken = cookie.get("accessToken");
    if (accessToken) {
      navigate("/admin/bot-list");
    }
  }, []);

  return (
    <div className="content">
      <Container>
        <Col className="ml-auto mr-auto" lg="4" md="6">
          <Form className="form">
            <Card className="card-login card-white">
              <CardHeader>
                <img alt="..." src={require("assets/img/card-primary.png")} />
                <CardTitle tag="h1">Log in</CardTitle>
              </CardHeader>
              <CardBody>
                <InputGroup
                  className={classnames({
                    "input-group-focus": state.emailFocus,
                  })}
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="tim-icons icon-email-85" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    name="email"
                    placeholder="Email"
                    type="text"
                    onFocus={(e) => setState({ ...state, emailFocus: true })}
                    onBlur={(e) => setState({ ...state, emailFocus: false })}
                    onChange={handleChange}
                  />
                </InputGroup>
                <InputGroup
                  className={classnames({
                    "input-group-focus": state.passFocus,
                  })}
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="tim-icons icon-lock-circle" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    name="password"
                    placeholder="Password"
                    type="text"
                    onFocus={(e) => setState({ ...state, passFocus: true })}
                    onBlur={(e) => setState({ ...state, passFocus: false })}
                    onChange={handleChange}
                  />
                </InputGroup>
              </CardBody>
              <CardFooter>
                <Button
                  block
                  className="mb-3"
                  color="primary"
                  href="#pablo"
                  size="lg"
                  onClick={handleSubmit}
                >
                  Get Started
                </Button>
                {/* <div className="pull-left">
                  <h6>
                    <a
                      className="link footer-link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Create Account
                    </a>
                  </h6>
                </div>
                <div className="pull-right">
                  <h6>
                    <a
                      className="link footer-link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Need Help?
                    </a>
                  </h6>
                </div> */}
              </CardFooter>
            </Card>
          </Form>
        </Col>
      </Container>
    </div>
  );
};

export default Login;
