import React, { useState } from "react";
import {
  Button,
  Container,
  Header,
  Grid,
  Icon,
  Image,
  List,
  Segment,
  Menu,
} from "semantic-ui-react";

import PhotoGhrapy from "../assets/profile-me.jpg";
import Mission from "../assets/mission.svg";
import Vision from "../assets/vision.svg";

import { ResponsiveContainer, Footer, GridView } from "../components";

export const BlogPage = () => {
   const [name, setName] = useState({})

   const handleItemClick = (e, { name }) => setName({ activeItem: name })

  return (
    <>
      <Container>
        <Menu stackable style={{marginTop: "1em"}}>
          <Menu.Item>
            <img alt="logo" src="/logo.png" />
          </Menu.Item>

          <Menu.Item
            name="features"
            active={name.activeItem === "features"}
            onClick={handleItemClick}
          >
            Features
          </Menu.Item>

          <Menu.Item
            name="testimonials"
            active={name.activeItem === "testimonials"}
            onClick={handleItemClick}
          >
            Testimonials
          </Menu.Item>

          <Menu.Item
            name="sign-in"
            active={name.activeItem === "sign-in"}
            onClick={handleItemClick}
          >
            Sign-in
          </Menu.Item>
        </Menu>

        <Header as="h2">
          <Icon name="settings" />
          <Header.Content>
            Account Settings
            <Header.Subheader>Manage your preferences</Header.Subheader>
          </Header.Content>
        </Header>

        <Segment vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: "2em" }}>
              All Images I have taken befor
            </Header>
          </Container>
        </Segment>
      </Container>
      <Footer />
    </>
  );
};
