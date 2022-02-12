import React, { useState } from "react";

import { Container, Menu } from "semantic-ui-react";

export const Navbar = () => {
  const [name, setName] = useState({});

  const handleItemClick = (e, { name }) => setName({ activeItem: name });

  return (
      <Container className="navbar">
        <Menu >

          <Menu.Item header>Our Company</Menu.Item>
          <Menu.Item
            name="aboutUs"
            active={name.activeItem === "aboutUs"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="jobs"
            active={name.activeItem === "jobs"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="locations"
            active={name.activeItem === "locations"}
            onClick={handleItemClick}
          />
        </Menu>
      </Container>
  );
};
