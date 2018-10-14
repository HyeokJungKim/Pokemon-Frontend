const API = "http://localhost:3000/"

class TrainerAdapter{
  static login(data){
    return fetch(`${API}/login`, {
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  }

}

export default TrainerAdapter
