import React, { useState, useEffect } from "react";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase/config";

import { HandelRemove } from "../../utils/utils";

import { Container, Card, Segment, Loader } from "semantic-ui-react";

import { ControlPanel, Navbar, Tables, GridView } from "../../components";

import data from "../../mock/data.json";

export const Gallery = () => {
  const [doc, setDoc] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { cols, rows } = data.postData;
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);

  const handelView = (value) => {
    alert("hello")
  };

  const handelAddPost = (e) => {
    alert("hello");
    setOpen(true);
  };

  const handelDelete = (id) => {
    HandelRemove(id, "gallery");
  };

  useEffect(() => {
    const collectionRef = collection(db, "gallery");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unSub = onSnapshot(q, (snap) => {
      setDoc(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(true);
    });

    return unSub;
  }, []);

  return (
    <>
      <Navbar />

      <Container style={{ marginTop: "2em" }}>
        <ControlPanel
          title={"Gallery Image"}
          rowsLength={doc.length}
          handelAddPost={handelAddPost}
        />

        <Tables columns={cols} rows={rows} />

        {!isLoading ? (
          <Loader active />
        ) : (
          <Card.Group itemsPerRow={4}>
            <GridView
              doc={doc}
              handelDelete={handelDelete}
              handelView={handelView}
            />
          </Card.Group>
        )}
      </Container>
    </>
  );
};
