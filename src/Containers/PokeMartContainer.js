import React, {Component} from 'react';
import {Table, Segment, Icon, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import ItemRow from '../Components/ItemRow'

class PokeMartContainer extends Component{

  constructor(props) {
    super(props);
    this.state = {
      cart: props.items.map(item => {
        let newItem = {...item}
        newItem.cartQuantity = 0
        return newItem
      })
    }
  }

  render(){
    const {trainer} = this.props
    const {cart} = this.state
    console.log(cart);
    return (
      <Segment basic>
        <Header as='h2'icon textAlign="center">
          <Icon name="shopping cart" circular/>
          <Header.Content>Welcome to the PokéMart!</Header.Content>
          <p>You have ${trainer.money} to spend.</p>
        </Header>
        <Table attached='top' basic striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>In Bag</Table.HeaderCell>
              <Table.HeaderCell>Buying</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {cart.map(item => <ItemRow key={item.id} item={item}/>)}
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

const mapStateToProps = ({trainer}) => {
  return {
    items: trainer.items,
    trainer: trainer.trainer
  }
}

export default connect(mapStateToProps)(PokeMartContainer);
