const API = "http://localhost:3000/"

class ItemAdapter{
  static getAllItems(){
    return fetch(API+"items")
    .then(resp => resp.json())
  }

}

export default ItemAdapter
