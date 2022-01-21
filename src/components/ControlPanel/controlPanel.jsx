import React from "react";

import { Link } from "react-router-dom";

import { Header, Grid, Input, Button, Icon, Label } from "semantic-ui-react";

export const ControlPanel = ({ title, rowsLength, handleView }) => {
  const url = window.location.pathname;

  return (
    <Grid>
      <Grid.Column floated="left" width={3}>
        <Header as="h2" size="medium" style={{ marginTop: "5px" }}>
          {title}
          <Label color="teal" circular>
            {rowsLength}
          </Label>
        </Header>
      </Grid.Column>
      <Grid.Column widescreen={2}>
        <Button.Group>
          <Button onClick={() => handleView(true)}>
            <Icon name="grid layout" />
          </Button>
          <Button onClick={() => handleView(false)}>
            <Icon name="list layout" />
          </Button>
        </Button.Group>
      </Grid.Column>
      <Grid.Column
        style={{ display: "flex", justifyContent: "right" }}
        width={7}
      >
        <Button.Group>
          <Button size="tiny" color="green" as={Link} to={`${url}/add`}>
            <Icon name="add" />
            Add New
          </Button>
          <Button size="tiny" color="blue" as={Link} to={`${url}/print`}>
            <Icon name="print" />
            Print
          </Button>
        </Button.Group>

        <Input
          style={{ marginLeft: "0.5em" }}
          icon="search"
          placeholder="Search..."
          size="tiny"
        />
      </Grid.Column>
    </Grid>
  );
};
