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

import { Footer, Hero } from "../components";
import { ContactForm } from "../forms/contactForm";

export const HomePage = () => (
  <>
    <Hero />

    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <h2 className="content-title">About</h2>
            <p className="content">
              I am A Photographer from Afghanistan Far far away, behind the word
              mountains, far from the countries Vokalia and Consonantia, there
              live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean...
            </p>

            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button
                  size="large"
                  inverted
                  circular
                  style={{ marginTop: "1em" }}
                >
                  <Icon name="arrow right" style={{ marginRight: "4px" }} />
                  Readmore
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column floated="right" width={6}>
            <Image circular size="large" src={PhotoGhrapy} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "My Mission"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Our mission is to provide an enjoyable experience in front of the
              camera as well as timeless photographs that you will treasure for
              <Image className="small centered" src={Mission} />a lifetime.
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Image
              className="small centered"
              src={Vision}
              style={{ paddingTop: "2.5em" }}
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
    </Segment> */}

    <Segment vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          LAST IMAGES
        </Header>
      </Container>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
      <h2
        style={{ textAlign: "center", marginBottom: "2em" }}
        as="h1"
        className="content-title"
      >
        Contact us
      </h2>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <List selection animated verticalAlign="middle" size="huge" relaxed="very">
              <List.Item>
                <Icon name="home" inverted color='teal' circular size='large' />
                <List.Content>
                  <List.Header className="title">Location</List.Header>
                  <List.Description>
                    Melbourne, 12-32-Ston Street, Victoria, Australia.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon name="mail" inverted color='teal' circular size='large' />
                <List.Content>
                  <List.Header className="title">Email Address</List.Header>
                  <List.Description>
                  alimnavid@gmail.com
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon name="phone" inverted color='teal' circular size='large' />
                <List.Content>
                  <List.Header className="title">Phone Number</List.Header>
                  <List.Description>
                  +61-455-555-555
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>

          <Grid.Column floated="right" width={8}>
            <ContactForm />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Footer />
  </>
);
