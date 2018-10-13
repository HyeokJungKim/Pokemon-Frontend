const API = "http://localhost:3000/"

class TrainerAdapter{
  static login(){
    return fetch(`${API}/trainers/1`)
    .then(res => res.json())
  }
}

export default TrainerAdapter
