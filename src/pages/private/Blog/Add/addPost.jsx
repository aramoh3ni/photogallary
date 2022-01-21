import React, { useState } from "react";


import { db } from "../../../../firebase/config";

import { collection, addDoc, Timestamp } from "firebase/firestore";

import {
  Container,
  Form,
  TextArea,
  Input,
  Select,
  Button,
  Header,
  List,
} from "semantic-ui-react";

import { useAuth } from "../../../../Context/AuthContext";

import { Navbar } from "../../../../components";

// Temprary Data
const options = [
  { key: "n", text: "Nature", value: "nature" },
  { key: "ab", text: "Afghan Beautiy", value: "afghan_beautiy" },
  { key: "o", text: "Other", value: "other" },
];
// Temprary Data

export const AddPost = () => {

  const { user } = useAuth();
  const date = new Date();

  const [imgs, setImgs] = useState([]);

  const [postSchema, setPostSchema] = useState({
    title: "",
    subTitle: "",
    describe: "",
    images: imgs,
    dateModified: date.toLocaleDateString() + "_" + date.toLocaleTimeString(),
    datePublished: date.toLocaleDateString() + "_" + date.toLocaleTimeString(),
    author: user,
    views: 0,
    comments: [],
    category: "",
    instagram: false,
    facebook: false,
    publish: false,
  });

  // Handel Each file and insert in
  const handleFiles = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      let newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImgs((prevState) => [...prevState, newImage]);
    }
  };

  const handelSelect = (e, data) => {
    setPostSchema({ ...postSchema, category: data.value });
  };

  // Handal Every Input Values
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPostSchema({ ...postSchema, [name]: value });
  };

  // Handel Every Checkbox
  const handelCheckbox = (e) => {
    const { name } = e.target;
    setPostSchema({ ...postSchema, [name]: !postSchema[name] });
  };

  // Delete Eeach Images from Imgs Array
  const handleDelteImg = (e, id) => {
    e.preventDefault();
    let newArray = imgs.filter((items) => items.id !== id);
    setImgs(newArray);
  };

  const handelFormSubmit = async (e) => {
    e.preventDefault();
    setPostSchema({ ...postSchema, images: imgs });

    await addDoc(collection(db, "/posts/"), {
      title: postSchema.title,
      subTitle: postSchema.subTitle,
      describe: postSchema.describe,
      dateModified: postSchema.dateModified,
      datePublished: postSchema.datePublished,
      images: imgs.map(items => items.name),
      author: { email: user.email, name: user.displayName },
      views: postSchema.views,
      comments: [],
      category: postSchema.category,
      instagram: postSchema.instagram,
      facebook: postSchema.facebook,
      publish: postSchema.publish,
      createdat: Timestamp.now(),
    })
    .then((docRef) => {
      console.log("Post created with ID: ", docRef.id);
    })
    .catch((err) => {
      console.error("Error adding Posts: ", err);
    });
  };

  

  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "2em" }}>
        <Form onSubmit={handelFormSubmit}>
          <Header>Add New Post {postSchema.title}</Header>
          <Form.Group widths="equal">
            <Form.Field
              label="Title"
              placeholder="Enter Title"
              control={Input}
              name="title"
              onChange={handleOnChange}
              required
              value={postSchema.title}
            />
            <Form.Field
              control={Input}
              label="Sub Title"
              name="subTitle"
              onChange={handleOnChange}
              placeholder="Enter Sub title"
              value={postSchema.subTitle}
            />
            <Form.Field
              control={Select}
              label="Select Gategory"
              options={options}
              onChange={handelSelect}
              name="category"
              required
              placeholder="Category"
            />
          </Form.Group>

          <Form.Field
            control={Input}
            required
            onChange={handleFiles}
            label="Select Single or Mulitiple files, Select files as (.png, .jpg, .gif) formats and images size of between 1200px width and 800px height"
            type="file"
            input={{
              multiple: true,
              accept: "image/png, image/gif, image/jpeg",
            }}
            name="Files"
          />

          <div>
            {imgs.map((items, i) => (
              <List key={i}>
                <List.Item>
                  <List.Icon
                    className="remove red"
                    onClick={(e) => handleDelteImg(e, items.id)}
                  />
                  <List.Content>{items.name}</List.Content>
                </List.Item>
              </List>
            ))}
          </div>

          <Form.Field
            control={TextArea}
            onChange={handleOnChange}
            multiple
            value={postSchema.describe}
            required
            label="About"
            name="describe"
            placeholder="Tell us more about you..."
          />

          <div class="ui checkbox field">
            <input
              type="checkbox"
              value={postSchema.instagram}
              onChange={handelCheckbox}
              name="instagram"
              id="instagram"
            />
            <label for="instagram">
              Do you want to post it on Instagram also?
            </label>
          </div>
          <br />
          <div class="ui checkbox field">
            <input
              type="checkbox"
              id="facebook"
              value={postSchema.facebook}
              onChange={handelCheckbox}
              name="facebook"
            />
            <label for="facebook">
              Do you want to post it on Facebook also?
            </label>
          </div>
          <br />
          <div class="ui checkbox field">
            <input
              type="checkbox"
              id="publish"
              value={postSchema.facebook}
              onChange={handelCheckbox}
              name="publish"
            />
            <label for="publish">Pusblish My Post</label>
          </div>

          <Form.Group widths="twelve">
            <Form.Field
              type="submit"
              control={Button}
              onClick={handelFormSubmit}
            >
              Save
            </Form.Field>

            <Form.Field type="submit" control={Button}>
              Save And Publish
            </Form.Field>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};
