const API = "http://localhost:3000/"

class PokemonAdapter{
  static getAllPokemons(){
    return fetch(API+"pokemons")
    .then(resp => resp.json())
  }

}

export default PokemonAdapter
