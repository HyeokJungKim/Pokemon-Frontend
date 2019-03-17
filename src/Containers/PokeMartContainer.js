import React from 'react';
import {Table} from 'semantic-ui-react'
import {connect} from 'react-redux'
import ItemRow from '../Components/ItemRow'

const PokeMartContainer = ({items}) =>  {

  return (
    <Table attached='top' basic striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>In Bag</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {items.map(item => <ItemRow key={item.id} item={item}/>)}
      </Table.Body>
    </Table>
  );
}

const mapStateToProps = ({items}) => {
  return {
    items: items.all
  }
}
export default connect(mapStateToProps)(PokeMartContainer);
