import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

import { useAuth } from "../../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setError] = useState({
    message: "",
    type: false,
  });

  const navigate = useNavigate();

  const { signIn } = useAuth();


  const handleSubmite = async (e) => {  
    e.preventDefault();

    setError({message:"", type: false})
    
    try {
      await signIn(email, pass);
      
      setError({
        message: "You have Login successfully",
        type: true
      })

      setPass("");
      setEmail("");

      navigate("/api/dashboard");

    } catch (err) {
      setError({
        message: err.message,
        type: false
      })
    }

  }

  useEffect(() => {
    handleSubmite()
  }, [])

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
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

        <Form size="large" onSubmit={handleSubmite}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(e) => setPass(e.target.value)}
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/api/auth/sign-up">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
