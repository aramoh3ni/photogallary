import React from "react";

import { Table, Label, Pagination } from "semantic-ui-react";

export const Tables = (props) => {
  const { columns, rows } = props;

  return (
    <Table color="'teal'">
      <Table.Header>
        <Table.Row>
          {columns.map((item) => (
            <Table.HeaderCell key={item.id}>{item.title}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {rows.map((item, i) => (
          <Table.Row key={i}>
            <Table.Cell>{item.title.slice(0, 20)}...</Table.Cell>
            <Table.Cell>{item.description.slice(0, 50)}...</Table.Cell>
            <Table.Cell>
              <a href="gooo">@ {item.user.displayName}</a>
            </Table.Cell>
            <Table.Cell>{item.dateTakenOn}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Pagination
          defaultActivePage={1}
          firstItem={null}
          lastItem={null}
          pointing
          secondary
          totalPages={3}
        />{" "}
      </Table.Footer>
    </Table>
  );
};
