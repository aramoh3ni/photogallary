import React, { useState, useEffect } from "react";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase/config";

import { HandelRemove } from "../../utils/utils";

import { Container, Card, Loader } from "semantic-ui-react";

import { ControlPanel, Navbar, Tables, GridView } from "../../components";

import data from "../../mock/data.json";

export const Gallery = () => {
  const [doc, setDoc] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState(true);

  const { cols } = data.images;

  const handelDelete = (id) => {
    HandelRemove(id, "gallery");
  };

  const handelView = (e, value) => {
    e.preventDefault()
    setView(value);
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
        <ControlPanel title={"Gallery Image"} handelView={handelView} rowsLength={doc.length} />

        {!isLoading ? (
          <Loader active />
        ) : view ? (
          <Card.Group itemsPerRow={4}>
            <GridView
              doc={doc}
              handelDelete={handelDelete}
            />
          </Card.Group>
        ) : (
          <Tables columns={cols} rows={doc} />
        )}
      </Container>
    </>
  );
};
