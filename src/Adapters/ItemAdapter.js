const API = "https://pokemon-stay-backend.herokuapp.com"

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
    .catch(console.error)
  }

  static useBall(token, ballId){
    return fetch(API+`/inventories/${ballId}`, {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Authorization': token
      }
    })
    .then(resp => resp.json())
    .catch(console.error)
  }

}

export default ItemAdapter
