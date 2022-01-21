import React, { useState } from "react";

import { useAuth } from "../../../Context/AuthContext";

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({
    message: "",
    type: false,
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      setErr({
        message: "Your Account Have Been Successfull Created",
        type: true,
      });
      navigate("/api/auth/sign-in");
      setEmail("");
      setPassword("");
    } catch (err) {
      setErr({ message: err.message, type: false });
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Sign-Up to For New Account
        </Header>
        {err.message ? (
          err.type ? (
            <Message success>
              <Message.Header>Success Message</Message.Header>
              <p>{err.message}</p>
            </Message>
          ) : (
            <Message negative>
              <Message.Header>Error Message</Message.Header>
              <p>{err.message}</p>
            </Message>
          )
        ) : (
          <></>
        )}
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Re-Password"
              type="password"
              required={true}
              onChange={(e) => setEmail(e.target.value)}

            /> */}

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have Account? <Link to="/api/auth/sign-in">Sign In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
