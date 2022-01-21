import React, { useState } from "react";

import { useNavigate } from "react-router";

import { useStorage } from "../../hooks/useStorage";

import {
  Container,
  Form,
  Input,
  TextArea,
  Button,
  Message,
  Header,
  Icon,
  Radio
} from "semantic-ui-react";

import { Navbar, ProgressBar } from "../../components";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useEffect } from "react/cjs/react.development";

export const UploadFrom = () => {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);
  const [gallery, setGallery] = useState({});
  const [input, setInput] = useState(false);
  const navigate = useNavigate();

  const fileTypes = ["image/png", "image/jpeg", "image/jpg"];

  const { url, progress } = useStorage(file);

  const InputView = (e) => {
     setInput(!input);
  }

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
      setGallery({ ...gallery, [name]: value });
    }
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const collectionRef = collection(db, "gallery");
    const payload = {
      title: gallery.title,
      location: gallery.location,
      imgUrl: input ? url : gallery.imageUrl,
      user: {
        displayName: "Alireza Mohseni",
        email: "alirezamohsini384@gmail.com",
      },
      description: gallery.description,
      dateTakenOn: gallery.dateTakenOn,
      createdAt: Timestamp.now(),
    };

    await addDoc(collectionRef, payload)
      .then((docRef) => {
        setErr(`Post Created with ID: ${docRef.id}`);
        setGallery({});
        navigate("/api/gallery");
      })
      .catch((err) => {
        setErr(`Error adding Post: ${err}`);
      });
  };

  useEffect(() => {
    // it removes the progress bar and set file to null after uploading is completed
    setFile(null)
  }, [url])

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
            Add New Image
          </Header>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-title"
              control={Input}
              label="Title"
              name="title"
              onChange={onChangeHandler}
              placeholder="Enter Your Image Title"
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Location"
              name="location"
              onChange={onChangeHandler}
              placeholder="Enter Location"
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Taken on Date"
              name="dateTakenOn"
              type="date"
              onChange={onChangeHandler}
              placeholder="Date"
            />
          </Form.Group>
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Description"
            name="description"
            onChange={onChangeHandler}
            placeholder="Enter Image Description"
          />

          <Radio toggle onChange={InputView} defaultChecked={input} />
          <Form.Field
            control={Input}
            required
            label={
              input 
              ? "Select Single or Mulitiple files, Select files as (.png, .jpg, .gif) formats and images size of between 1200px width and 800px height"
              : "Your Image Url"
            }
            type={input ? 'file' : 'text'}
            name="imageUrl"
            onChange={onChangeHandler}
            input={{
              accept: "image/png, image/jpeg",
            }}
          />
          <Form.Group widths="twelve">
            <Form.Field type="submit" control={Button} content="Add"  />
            <Form.Field
              type="button"
              control={Button}
              className="red"
              content="Cancel"
            />
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};
