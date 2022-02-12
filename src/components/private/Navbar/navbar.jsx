import React, {useEffect, useState} from "react";
import { useAuth } from "../../../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

import {
  Visibility,
  Segment,
  Menu,
  Icon,
  Container,
  Dropdown,
  Breadcrumb,
} from "semantic-ui-react";

import { createMedia } from "@artsy/fresnel";

const { Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

export function Navbar() {
  const { user, logOut } = useAuth();

  const [account, setAccount] = useState(user)



  const ProfileOp = [
    {
      key: user.displayName,
      text: user.displayName,
      value: user.displayName,
      image: { avatar: true, src: user.photoUrl },
    },
  ];

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    setAccount(account)
  }, [user])

  return (
    <Media greaterThan="mobile">
      <Visibility once={false}>
        <Segment inverted textAlign="center" vertical>
          <Menu fixed inverted pointing secondary size="small">
            <Container>
              <Menu.Item position="left">
                <Dropdown icon="sidebar" style={{ marginRight: "3em" }}>
                  <Dropdown.Menu>
                    <Dropdown.Header>Main</Dropdown.Header>
                    <Dropdown.Item as={Link} to="/dashboard">
                      <Icon name="dashboard blue" />
                      Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to={`/api/account/${user.uid}`}>
                      <Icon name="user circle outline blue" />
                      Account
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <Icon name="image blue" />
                      <Dropdown text="Gallery">
                        <Dropdown.Menu>
                          <Dropdown.Item as={Link} to="/api/gallery/add">
                            <Icon name="list layout blue" />
                            Add New Image
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/api/gallery">
                            <Icon name="add circle blue" />
                            View All Images
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <Icon name="window maximize outline blue" />
                      <Dropdown text="Posts">
                        <Dropdown.Menu>
                          <Dropdown.Item as={Link} to="/blog">
                            <Icon name="list layout blue" />
                            View Posts
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/blog/new">
                            <Icon name="add circle blue" />
                            Add New Post
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Dropdown.Item>

                    <Dropdown.Item>Setting</Dropdown.Item>
                    <Dropdown.Item>Gallery</Dropdown.Item>
                    <Dropdown.Item>Account</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Breadcrumb>
                  <Breadcrumb.Section link>Home</Breadcrumb.Section>
                  <Breadcrumb.Divider icon="right chevron blue" />
                  <Breadcrumb.Section link>Registration</Breadcrumb.Section>
                  <Breadcrumb.Divider icon="right arrow blue" />
                  <Breadcrumb.Section active>
                    Personal Information
                  </Breadcrumb.Section>
                </Breadcrumb>
              </Menu.Item>

              <Menu.Item position="right">
                <Dropdown
                  pointing="top right"
                  inline
                
                  options={ProfileOp}
                  defaultValue={ProfileOp[0].value}
                >
                  <Dropdown.Menu>
                    <Dropdown.Header>User Settings</Dropdown.Header>
                    <Dropdown.Item>
                      <Icon name="user" />
                      Account
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Side Option</Dropdown.Header>
                    <Dropdown.Item>
                      <Icon name="setting" />
                      Settgin
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Authenication</Dropdown.Header>

                    <Dropdown.Item onClick={handleLogOut}>
                      <Icon name="log out" />
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>
    </Media>
  );
}
