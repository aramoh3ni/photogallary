import React from "react";
import {
  Button,
  Grid,
  Icon,
  Image,
  List,
  Segment,
} from "semantic-ui-react";

// import Gallery from "react-grid-gallery";

import PhotoGhrapy from "../assets/profile-me.jpg";
// import Mission from "../assets/mission.svg";
// import Vision from "../assets/vision.svg";

import { Footer, Hero, GalleryGrid } from "../components";
import { ContactForm } from "../forms/contactForm";

const IMAGES = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
];

export const HomePage = () => (
  <>
    <Hero />

    <Segment style={{ padding: "8em 0em" }} vertical >
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

            <Grid.Row verticalAlign='middle'>
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

    <Segment style={{ 
      padding: "8em 0em",
      
      }} vertical textAlign="center" className="bg-dark">
      
        <h2
          style={{ textAlign: "center", marginBottom: "1em" }}
          className="content-title"
        >
          LAST IMAGES
        </h2>
        <GalleryGrid />
    </Segment>
    

    <Segment style={{ padding: "8em 0em" }} vertical >
      <h2
        style={{ textAlign: "center", marginBottom: "1em" }}
        className="content-title"
      >
        Contact us
      </h2>

      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <List
              selection
              animated
              verticalAlign="middle"
              size="huge"
              relaxed="very"
            >
              <List.Item>
                <Icon name="home" inverted color="teal" circular size="large" />
                <List.Content>
                  <List.Header className="title">Location</List.Header>
                  <List.Description className="sub-title">
                    Melbourne, 12-32-Ston Street, Victoria, Australia.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon name="mail" inverted color="teal" circular size="large" />
                <List.Content>
                  <List.Header className="title">Email Address</List.Header>
                  <List.Description className="sub-title">
                    alimnavid@gmail.com
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon
                  name="phone"
                  inverted
                  color="teal"
                  circular
                  size="large"
                />
                <List.Content>
                  <List.Header className="title">Phone Number</List.Header>
                  <List.Description className="sub-title">
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
