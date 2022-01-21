import React from "react";

import { Card, Image, Icon, Header } from "semantic-ui-react";

import { ReadMore } from "../ReadMore/ReadMore";

export const GridView = ({ doc, handelDelete, usrAuth }) => {
  return (
    <>
      {doc.map((item, i) => (
        <Card key={i}>
          <Image
            src={item.imgUrl}
            alt={doc.title}
            wrapped
            ui={false}
            className="hover-btn"
          />
          <Card.Content>
            <Card.Header>{item.title}</Card.Header>
            <Card.Meta style={{ margin: "1em 0em" }}>
              <span className="sub header">
                <Icon
                  name="map marker outline"
                  style={{ marginRight: "1em" }}
                />
                <a
                  href={`https://www.google.com/search?q=${item.location}`}
                  target="_blank"
                >
                  {item.location}
                </a>
              </span>
              <br />
              {item.dateTakenOn ? (
                <span className="sub header">
                  <Icon
                    name="calendar alternate outline"
                    style={{ marginRight: "1em" }}
                  />
                  {item.dateTakenOn}
                </span>
              ) : (
                ""
              )}
            </Card.Meta>
            <Card.Description>
              <ReadMore>{item.description}</ReadMore>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="at" />
              {item.user.displayName}
            </a>

            <Icon
              onClick={() => handelDelete(item.id)}
              style={{ float: "right" }}
              className="hover-btn"
              name="trash alternate outline red"
            />
          </Card.Content>
        </Card>
      ))}
    </>
  );
};
