import { Message } from "semantic-ui-react";

export const MessageBox = ({ message }) => {
  const { title, text, type } = message;

  if (type === "error") {
    return (
      <>
        <Message className="message-box">
          <Message.Header>{title}</Message.Header>
          <p>{text}</p>
        </Message>
      </>
    );
  }
  if (type === "success") {
    return (
      <>
        <Message className="message-box">
          <Message.Header>{title}</Message.Header>
          <p>{text}</p>
        </Message>
      </>
    );
  }
};
