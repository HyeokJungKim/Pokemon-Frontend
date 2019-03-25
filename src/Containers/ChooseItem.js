import React from 'react';
import {connect} from 'react-redux'
import ChooseBall from '../Components/ChooseBall'
import {List, Container, Header, Icon} from 'semantic-ui-react'

const ChooseItem = ({items, toggleBag, tryCatchPokemon}) => {
  return(
    <Container textAlign='center'>
      <Header as='h2'>Your Bag<Icon link color='red' name='close' size='tiny' onClick={toggleBag}/></Header>
      <div id="bag">
        <List divided>
          {items.map(item => (
            <ChooseBall
              key={item.id}
              item={item}
              toggleBag={toggleBag}
              tryCatchPokemon={tryCatchPokemon}
            />)
          )}
        </List>
      </div>
    </Container>
  )
};

const mapStateToProps = ({trainer}) => {
  let items = trainer.items.filter(item => item.name.includes("Ball"))
  return {items}
}

export default connect(mapStateToProps)(ChooseItem);
