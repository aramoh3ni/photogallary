import React from "react";
import { Container, Grid, List, Image } from "semantic-ui-react";

import HeroImage from "../../assets/hero/undraw_photo_session_clqr.svg";

import { Navbar } from "../Navbar/Navbar";

export const Hero = ({ title, subTile, image, childern }) => {
  

  return (
    <>
      <Container>
        <section className="hero">
          <div className="hero-bg"></div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={6} floated="left">
                <Image size="huge" src={HeroImage} />
              </Grid.Column>
              <Grid.Column width={8}>
                <h1>
                  Ali Madad <br /> <span className="sub-title">Nawid</span>
                </h1>
                <h4 className="content-title">Afghan Phtographer</h4>
                <div className="social">
                  <List horizontal size='huge'>
                    <List.Item
                      icon="instagram orange"
                      as="a"
                      href="https://google.com/"
                    />
                    <List.Item icon="facebook f blue" as="a" />
                    <List.Item icon="linkify black" as="a" />
                    <List.Item icon="pinterest red" as="a" />
                    <List.Item icon="whatsapp green" as="a" />
                  </List>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </section>
      </Container>
    </>
  );
};
