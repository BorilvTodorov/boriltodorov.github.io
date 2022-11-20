export async function updateMoney(id,money) {
    const body={
        money,
    }
    const response = await fetch(`https://casino-54735-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`, {
        method: 'PATCH',
        headers: {
           'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    } )
    const data= await response.json()
    console.log(data)
}


export function randomNM(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }