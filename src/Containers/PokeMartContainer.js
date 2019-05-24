import React, {Component} from 'react';
import {Table, Segment, Icon, Header, Button, Container} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {buyItems} from '../Redux/Actions'
import ItemRow from '../Components/ItemRow'

class PokeMartContainer extends Component{

  constructor(props) {
    super(props);
    this.state = {
      cart: props.items.map(item => {
        let newItem = {...item}
        newItem.cartQuantity = 0
        return newItem
      }),
      total: 0
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.didPropsChange()) {
      this.setState({
        cart: this.props.items.map(item => {
          let newItem = {...item}
          newItem.cartQuantity = 0
          return newItem
        }),
        total: 0
      })
    }
  }

  didPropsChange = () => {
    let stateCartQuantity = this.state.cart.map(item => item.quantity)
    let propsCartQuantity = this.props.items.map(item => item.quantity)
    for (let i = 0; i < stateCartQuantity.length; i++) {
      if(stateCartQuantity[i] !== propsCartQuantity[i]){
        return true
      }
    }
    return false
  }

  handleChange = (event, id) => {
    event.persist()
    this.setState((prevState) => {
      let number = parseInt(event.target.value) || ""
      let newArr = prevState.cart.map(item => {
        return (item.id === id ? {...item, cartQuantity: number} : item)
      })
      let total = newArr.reduce((sum, item) => {
        return sum + item.price * item.cartQuantity
      }, 0)

      return {
        cart: newArr,
        total: total
      }
    })
  }

  handleClick = () => {
    let itemsToBuy = this.state.cart.map((item) => {
      return item.cartQuantity === "" || item.cartQuantity < 1 ? undefined : {id: item.id, quantity: item.cartQuantity}
    }).filter(Boolean)
    let {buyItems} = this.props
    buyItems(itemsToBuy)
  }

  render(){
    const {trainer} = this.props
    const {cart, total} = this.state
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
            {cart.map(item => <ItemRow key={item.id} item={item} handleChange={this.handleChange}/>)}
          </Table.Body>
        </Table>
        <Container textAlign='right'>
          <h3> Total: ${total}</h3>
          <Button disabled={total > trainer.money} onClick={this.handleClick}>Buy</Button>
        </Container>
      </Segment>
    );
  }
}

const mapStateToProps = ({trainer, auth}) => {
  return {
    items: trainer.items,
    trainer: trainer.trainer,
  }
}

export default connect(mapStateToProps, {buyItems})(PokeMartContainer);
