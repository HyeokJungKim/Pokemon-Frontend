import React from 'react';
import {List, Image, Button} from 'semantic-ui-react'

const ChooseBall = ({item, toggleDisplay, tryCatchPokemon}) => {

  const handleClick = () => {
    tryCatchPokemon(item.id)
    toggleDisplay(false, "showBag")
  }

  return (
    <List.Item>
      <Image floated='left' src={item.image} avatar/>
      <List.Content floated='left'>
        <List.Header>{item.name}</List.Header>
        <List.Description>
          Quantity: {item.quantity}
        </List.Description>
      </List.Content>
      <Button floated='right' disabled={item.quantity === 0} onClick={handleClick}>Use</Button>
    </List.Item>
  );
}

export default ChooseBall;
