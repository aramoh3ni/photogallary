import React, { useState } from "react";

import { useNavigate } from "react-router";

import { useStorage } from "../../hooks/useStorage";

import { useAuth } from "../../Context/AuthContext";

import { HandelEdit, HandelGetData } from "../../utils/utils";

import { updateProfile } from "firebase/auth";

import DefaultProfie from "../../assets/default-profie.png";

import {
  Container,
  Form,
  Input,
  TextArea,
  Button,
  Message,
  Header,
  Icon,
  Grid,
  Card,
  Image,
} from "semantic-ui-react";

import { Navbar, ProgressBar } from "../../components";
// import { addDoc, collection, Timestamp } from "firebase/firestore";
// import { db } from "../../firebase/config";
import { useEffect } from "react/cjs/react.development";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";

export const Profile = () => {
  const { user } = useAuth();
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);
  const [userDtl, setUserDtl] = useState({});
  const [profile, setProfile] = useState(user);
  const navigate = useNavigate();

  const fileTypes = ["image/png", "image/jpeg", "image/jpg"];

  const { url, progress } = useStorage(
    file,
    `/files/images/${user.uid}/profile/`
  );

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { value, name, files, type } = e.target;

    // If Values include image file
    if (type === "file") {
      const selected = files[0];
      // if file is true && file is included in fileTypes array
      if (selected && fileTypes.includes(selected.type)) {
        setFile(selected);
      } else {
        setFile(null);
        setErr(
          "Select File is Not Supported, select file with (.png, .jpeg) format"
        );
        setTimeout(() => {
          setErr(null);
        }, 3000);
      }
    } else {
      setProfile({ ...profile, [name]: value });
    }
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      displayName: profile.displayName,
      photoURL: url ? url : user.photoURL,
    };

    const userDetailsPayload = {
      about: profile.about,
      address: profile.address,
      facebook: profile.facebook,
      instagram: profile.instagram,
      pinterest: profile.pinterest,
      posistion: profile.posistion,
      user: user,
    };

    await updateProfile(user, payload)
      .then(() => {
        setErr("Profile Updated Sucessfully");
        setProfile(profile);
      })
      .catch((err) => {
        setErr("Error on Updating Profile" + err);
      });

  };

  const getUserDetail = async () => {
    const collectionRef = collection(db, "userDetail");

    await onSnapshot(collectionRef, snap => {
       setUserDtl(snap.docs.forEach((doc) => ({ ...doc.data(), id: doc.id }))[0]);
    });

    setProfile({...profile, userDtl})
  
  };

  useEffect(() => {
    getUserDetail();

    HandelGetData("userDetail");


    setProfile(profile);
    // it removes the progress bar and set file to null after uploading is completed
    setFile(null);
  }, [url]);

  return (
    <>
      <Navbar />
      {file && <ProgressBar progress={progress} />}

      <Container style={{ marginTop: "2em" }}>
        {err && (
          <Message negative>
            <Message.Header>{err}</Message.Header>
          </Message>
        )}

        <Form onSubmit={onFormSubmit}>
          <Header>
            {" "}
            <Icon
              name="arrow alternate circle left outline"
              onClick={(e) => {
                e.preventDefault();
                window.history.back();
              }}
            />
            {user.displayName}
          </Header>

          <Grid divided="vertically">
            <Grid.Column width="four">
              <Card>
                <Image
                  className="hover-btn"
                  src={user.photoURL ? user.photoURL : DefaultProfie}
                  wrapped
                  ui={false}
                  label={{
                    as: "a",
                    color: `${user.emailVerified ? "green" : "red"}`,
                    content: `${
                      user.emailVerified ? "Verified" : " Not Verified"
                    }`,
                    icon: `${user.emailVerified ? "check circle" : "remove"}`,
                    ribbon: true,
                  }}
                />
                <Card.Content>
                  <Card.Header>@{profile.displayName}</Card.Header>
                  <Card.Meta>
                    <Icon name="calendar alternate" />
                    <span className="date">12</span>
                  </Card.Meta>
                  <Card.Meta>
                    <Icon name="mail" />
                    <span className="date">
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                    </span>
                  </Card.Meta>
                  <Card.Meta>
                    <Icon name="phone" />
                    <span className="date">
                      <a href={`mailto:${profile.phoneNumber}`}>
                        {profile.phoneNumber}
                      </a>
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    22 Friends
                  </a>
                </Card.Content>
                <Card.Content>
                    <Form.Field
                      type="button"
                      control={Button}
                      content="Update Password"
                    />
                    <Form.Field
                      type="button"
                      control={Button}
                      content="Updated Email"
                    />
                    <Form.Field
                      type="button"
                      disabled={user.emailVerified ? true : false}
                      control={Button}
                      content="Verifie Your Email"
                    />
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width="twelve">
              <Card fluid centered>
                
                <Card.Content>
                  <Card.Header>Account Details</Card.Header>
                  <Form.Group
                    widths="equal"
                    style={{ justifyContent: "space-between" }}
                  >
                    <Form.Field
                      id="form-input-control-title"
                      control={Input}
                      label="Full Name"
                      name="displayName"
                      onChange={onChangeHandler}
                      value={profile.displayName}
                      placeholder="Enter Your Image Title"
                    />
                    <Form.Field
                      id="form-input-control-last-name"
                      control={Input}
                      label="Position"
                      name="posistion"
                      onChange={onChangeHandler}
                      placeholder="Enter Current Job Posistion"
                    />
                  </Form.Group>
                  <Form.Field
                    id="form-textarea-control-opinion"
                    control={TextArea}
                    label="Description"
                    name="about"
                    onChange={onChangeHandler}
                    placeholder="Enter Description"
                  />
                  <Form.Field
                    control={Input}
                    label="Your Profile Picture"
                    type={"file"}
                    name="imageUrl"
                    onChange={onChangeHandler}
                    input={{
                      accept: "image/png, image/jpeg",
                    }}
                  />
                </Card.Content>

                <Card.Content extra>
                  <Card.Header>Contact Details</Card.Header>
                  <Form.Field
                    id="form-input-control-title"
                    control={Input}
                    label="Address"
                    name="address"
                    type="address"
                    onChange={onChangeHandler}
                    placeholder="Enter Your Address"
                  />
                  <Form.Group widths="equal">
                    <Form.Field
                      id="form-input-control-title"
                      control={Input}
                      label="Facebook"
                      name="facebook"
                      type="url"
                      onChange={onChangeHandler}
                      placeholder="Enter Your Facebook Url"
                    />
                    <Form.Field
                      id="form-input-control-last-name"
                      control={Input}
                      label="Instagram"
                      name="instagram"
                      type="url"
                      onChange={onChangeHandler}
                      placeholder="Enter Instagram URL"
                    />
                    <Form.Field
                      id="form-input-control-last-name"
                      control={Input}
                      label="Pinterest"
                      name="pinterest"
                      type="url"
                      onChange={onChangeHandler}
                      placeholder="Enter Pinterest Url"
                    />
                  </Form.Group>
                </Card.Content>

                <Card.Content extra>
                  <Form.Group>
                    <Form.Field
                      type="submit"
                      control={Button}
                      content="Update"
                    />
                    <Form.Field
                      type="button"
                      control={Button}
                      content="Cancel"
                    />
                  </Form.Group>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </Form>
      </Container>
    </>
  );
};
