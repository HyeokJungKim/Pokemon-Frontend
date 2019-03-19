const API = "http://localhost:3000/"

class ItemAdapter{
  static buyItems(token, itemsArray){
    return fetch(API+"/inventories", {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({itemsArray})
    })
    .then(resp => resp.json())
  }

}

export default ItemAdapter
