import React from "react";
import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Button,
  Label,
} from "semantic-ui-react";

export const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em 2em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={7}>
              <Header inverted as="h4" content="About" />
              <p>
                I am A Photographer from Afghanistan Far far away, behind the
                word mountains, far from the countries Vokalia and Consonantia,
                there live the blind texts. Separated they live in
                Bookmarksgrove right at the coast of the Semantics, a large
                language ocean...
              </p>
              <div>
                <Header inverted as="h4" content="Follow Me On" />
                <Button circular color="facebook" icon="facebook" />
                <Button circular color="twitter" icon="twitter" />
                <Button circular color="linkedin" icon="linkedin" />
                <Button circular color="google plus" icon="google plus" />
              </div>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Site Map" />
              <List link inverted>
                <List.Item as="a">Home</List.Item>
                <List.Item as="a">About</List.Item>
                <List.Item as="a">Gallery</List.Item>
                <List.Item as="a">Contact</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <div className="copyright" style={{paddingTop: "3em"}}>
        <div>© Copyright Alireza Mohseni &nbsp; 
          {new Date().getFullYear()} | 
          All Rights Reserved. </div>
        <div>Designed &amp; Developed by <a href="https://aradev11.github.io/aradev11.io/" target="_blank">aradev11</a></div>
      </div>
    </Segment>
  );
};
