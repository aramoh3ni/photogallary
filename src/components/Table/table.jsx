import React from "react";

import { Table, Label, Pagination } from "semantic-ui-react";

export const Tables = (props) => {
  const { columns, rows } = props;

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          {columns.map((item) => (
            <Table.HeaderCell key={item.id}>{item.title}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {rows.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>{item.title.slice(0, 20)}...</Table.Cell>
            <Table.Cell>{item.describe.slice(0, 50)}...</Table.Cell>
            <Table.Cell>
              {item.approved ? (
                <Label color="green" horizontal>
                  Approved
                </Label>
              ) : (
                <Label color="red" horizontal>
                  Not Allowd
                </Label>
              )}
            </Table.Cell>
            <Table.Cell>{item.pub_date}</Table.Cell>
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
