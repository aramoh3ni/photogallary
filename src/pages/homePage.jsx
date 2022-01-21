import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment,
} from "semantic-ui-react";

import PhotoGhrapy from "../assets/profile-me.jpg";
import Mission from "../assets/mission.svg";
import Vision from "../assets/vision.svg";

import { ResponsiveContainer, Footer, GridView } from "../components";


export const HomePage = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column floated="left" width={6}>
            <Image bordered rounded size="large" src={PhotoGhrapy} />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h1" style={{ fontSize: "3em" }}>
              About Ali Madad Navid
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              I am A Photographer from Afghanistan Far far away, behind the word
              mountains, far from the countries Vokalia and Consonantia, there
              live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean...
            </p>

            <List horizontal>
              <List.Item
                icon="instagram orange"
                as="a"
                href="https://google.com/"
              />
              <List.Item icon="facebook f blue" as="a" />
              <List.Item icon="linkify " as="a" />
              <List.Item icon="pinterest red" as="a" />
              <List.Item icon="whatsapp green" as="a" />
            </List>

            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button
                  color="violet"
                  size="small"
                  inverted
                  style={{ marginTop: "2em" }}
                >
                  <Icon name="arrow right" style={{ marginRight: "4px" }} />
                  Read More
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Image
              className="small centered"
              src={Mission}
            />

            <Header as="h3" style={{ fontSize: "2em" }}>
              "My Mission"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Our mission is to provide an enjoyable experience in front of the
              camera as well as timeless photographs that you will treasure for
              a lifetime.
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Image
              className="small centered"
              src={Vision}
              style={{paddingTop: "2.5em"}}
            />

            <Header as="h3" style={{ fontSize: "2em" }}>
              "My Vision."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Landers <b>Photography</b> School through the Career Photographer
              program and other educational opportunities will become the main
              source of initial education and continuing education for
              photographers throughout the US.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          All Images I have taken befor
        </Header>
        
        
      </Container>
    </Segment>

    <Footer />
  </ResponsiveContainer>
);
