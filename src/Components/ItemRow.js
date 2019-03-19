import React, {PureComponent} from 'react';
import {Table, Image} from 'semantic-ui-react'

class ItemRow extends PureComponent{
  changeHandler = (event) => {
    this.props.handleChange(event, this.props.item.id)
  }

  render(){
    let {item} = this.props
    return (
      <Table.Row>
        <Table.Cell><Image src={item.image} avatar/>{item.name}</Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
        <Table.Cell>{item.quantity}</Table.Cell>
        <Table.Cell><input type='tel' value={item.cartQuantity} onChange={this.changeHandler}/></Table.Cell>
        <Table.Cell>${item.price}</Table.Cell>
      </Table.Row>
    )
  }
}



export default ItemRow;
