import React, { PureComponent } from 'react';
import {Card, Header, Image} from 'semantic-ui-react'
import {Draggable} from 'react-beautiful-dnd'
class PokemonCard extends PureComponent {

  render() {
    const {pokemon, index} = this.props
    const type2 = pokemon.type_2 || ""
    return (
      <Draggable draggableId={pokemon.id} index={index}>
        {(provided) => {
          return(
            <div className="ui fluid centered card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Card.Content>
              <Image floated='left' src={pokemon.image} />
              <Card.Header>
                <Header textAlign="center">{pokemon.name}</Header>
                <Header as='h4' textAlign="center">Level: {pokemon.level}</Header>
                <Header as='h5' textAlign='center'>
                  <span className={`type ${pokemon.type_1}`}>{pokemon.type_1}</span>
                  {!!pokemon.type_2 ?
                    <span className={`type ${type2}`}>{` ${type2}`}</span>
                      :
                    null
                  }
                </Header>
                <Header as='h6' textAlign="center">
                  Experience: {pokemon.experience}
                </Header>
              </Card.Header>
            </Card.Content>
          </div>
        )}
      }
    </Draggable>
    );
  }

}

export default PokemonCard;
