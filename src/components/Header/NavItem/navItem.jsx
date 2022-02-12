import React from "react";

import { Menu, Button } from "semantic-ui-react";

import { Link } from "react-router-dom";

export const MobileNavItem = () => {
  return (
    <>
      <Menu.Item as="a" active>
        Home
      </Menu.Item>
      <Menu.Item as="a">Home</Menu.Item>
      <Menu.Item as="a">About</Menu.Item>
      <Menu.Item as={Link} to='/blog'>Blog</Menu.Item>
      <Menu.Item as="a">Gallery</Menu.Item>
      <Menu.Item as={Link} to="/api/auth/sign-in">
        Sign in
      </Menu.Item>
      <Menu.Item as={Link} to="/api/auth/sign-up">
        Sign up
      </Menu.Item>
    </>
  );
};

export const DesktopNavItem = ({ fixed }) => {
  return (
    <>
      <Menu.Item as="a" active>
        Home
      </Menu.Item>
      <Menu.Item as="a">Gallery</Menu.Item>
      <Menu.Item as="a">About</Menu.Item>
      <Menu.Item as={Link} to='/blog'>Blog</Menu.Item>
      <Menu.Item as="a">Contact us</Menu.Item>
      <Menu.Item position="right">
        <Button
          to="/api/auth/sign-in"
          as={Link}
          color="violet"
          inverted={!fixed}
          size="small"
        >
          Log in
        </Button>
        <Button
          as={Link}
          to="/api/auth/sign-up"
          color="purple"
          inverted={!fixed}
          size="small"
          primary={fixed}
          style={{ marginLeft: "0.5em" }}
        >
          Sign Up
        </Button>
      </Menu.Item>
    </>
  );
};
