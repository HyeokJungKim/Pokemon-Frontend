const API = "http://localhost:3000/"

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
  }

  static persist(token){
    return fetch(`${API}/trainers/persist`, {
      method: "GET",
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token
      }
    })
    .then(res => res.json())
  }


  static initialize(id, token){
    return fetch(`${API}/trainers/${id}`, {
      method: "GET",
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token
      }
    })
    .then(res => res.json())
  }

}

export default TrainerAdapter