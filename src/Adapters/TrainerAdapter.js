const API = "http://localhost:3000"

class TrainerAdapter{
  static login(data){
    return fetch(`${API}/login`, {
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({trainer: data})
    })
    .then(res => res.json())
    .catch(console.error)
  }

  static register(data){
    return fetch(`${API}/users`, {
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({trainer: data})
    })
    .then(res => res.json())
    .catch(console.error)
  }

  static persist(token){
    return fetch(`${API}/trainers/persist`, {
      method: "GET",
      headers:{
        'Accept': 'application/json',
        'Authorization': token
      }
    })
    .then(res => res.json())
    .catch(console.error)
  }

  static initialize(id, token){
    return fetch(`${API}/trainers/${id}`, {
      method: "GET",
      headers:{
        'Accept': 'application/json',
        'Authorization': token
      }
    })
    .then(res => res.json())
    .catch(console.error)
  }

  static catchPokemon(pokemon, token, experience, ballId, canFitOnTeam, money){
    return fetch(API+`/catch/${pokemon.id}`, {
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({
        level: pokemon.level,
        experience: experience,
        canFitOnTeam: canFitOnTeam,
        ballId: ballId,
        money: money
      })
    })
    .then(res => res.json())
    .catch(console.error)
  }

  static movePokemon(id, newPosition, token, moveAcrossBoolean = false){
    return fetch(API+`/pokeballs/${id}`, {
      method: "PATCH",
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({
        position: newPosition,
        moveAcross: moveAcrossBoolean
      })
    })
    .then(res => res.json())
    .catch(console.error)
  }

  static evolvePokemon(id, token){
    return fetch(API+`/pokeballs/${id}/evolve`, {
      method: "PATCH",
      headers:{
        'Accept': 'application/json',
        'Authorization': token
      }})
      .then(res => res.json())
      .catch(console.error)
  }

  static addExperience(experience, money, token){
    return fetch(API+`/trainers/experience`, {
      method: "PATCH",
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({ experience, money })
    })
    .then(res => res.json())
    .catch(console.error)
  }

}

export default TrainerAdapter
