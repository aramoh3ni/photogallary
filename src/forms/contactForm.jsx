import React from "react";

import { Form, Button, Icon } from "semantic-ui-react";

export const ContactForm = () => {
  return (
    <Form className="content-title" size="large">
      <Form.Group unstackable widths={2}>
        <Form.Input className="input-form" placeholder="First name" required />
        <Form.Input
          className="input-form"
          inverted={false}
          placeholder="Last name"
          required
        />
      </Form.Group>
      <Form.Input
        className="input-form"
        inverted={false}
        placeholder="Enter Subject"
        required
      />

      <Form.TextArea
        className="input-form"
        placeholder="Enter Your Message here!"
        required
      />

      <Button size='huge' circular color='teal'>
        <Icon name="telegram plane" style={{ marginRight: "4px" }} />
        Readmore
      </Button>
    </Form>
  );
};
