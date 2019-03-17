import React from 'react';
import {Table, Image} from 'semantic-ui-react'

const ItemRow = ({item}) => (
  <Table.Row>
    <Table.Cell><Image src={item.image} avatar/>{item.name}</Table.Cell>
    <Table.Cell>{item.description}</Table.Cell>
    <Table.Cell>{item.quantity}</Table.Cell>
    <Table.Cell>#</Table.Cell>
    <Table.Cell>${item.price}</Table.Cell>

  </Table.Row>
);


export default ItemRow;
