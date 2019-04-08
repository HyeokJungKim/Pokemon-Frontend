const API = "http://localhost:3000/"

class PokemonAdapter{
  static getAllPokemons(){
    return fetch(API+"pokemons")
    .then(resp => resp.json())
    .catch(console.error)
  }

}

export default PokemonAdapter
