import React, { useState } from "react";
import { Container } from "semantic-ui-react";

import { Outlet } from "react-router-dom";

import { ControlPanel, Navbar, Tables } from "../../../components";

import data from "../../../mock/data.json";

export function Blog() {
  const { cols, rows } = data.postData;
  const [open, setOpen] = React.useState(false);

  const handelAddPost = (e) => {
    alert("hello")
    setOpen(true);
  }
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "2em" }}>
        <ControlPanel title={"Posts"} rowsLength={rows.length} handelAddPost={handelAddPost}/>

        <Tables columns={cols} rows={rows} />

        <Outlet open={open} />
      </Container>
    </>
  );
}
