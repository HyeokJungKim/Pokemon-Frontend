const API = "https://pokemon-stay-backend.herokuapp.com/"

class PokemonAdapter{
  static getAllPokemons(){
    return fetch(API+"pokemons")
    .then(resp => resp.json())
    .catch(console.error)
  }

}

export default PokemonAdapter
