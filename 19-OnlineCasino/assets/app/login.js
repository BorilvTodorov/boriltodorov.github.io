import { resetView } from './navigation.js'

export async function login(e) {
    const form = e.target
    const name = form.name.value
    const password = form.password.value
    let existinUser = false
    let currentId=null

    try {
        const response = await fetch(`https://casino-54735-default-rtdb.europe-west1.firebasedatabase.app/users.json`)
        const data = await response.json()

        Object.entries(data).forEach(obj => {
            currentId = obj[0]
            if (name === data[currentId].name && password == data[currentId].password) {

                existinUser = true

                let myObj={
                    name: data[currentId].name,
                    money: data[currentId].money,
                    id:currentId
                }

                console.log(currentId)
                authenticateUser(myObj)
            }
        })



        if (!existinUser) {
            alert('User not found')
        }


    } catch (e) {
        alert(e)
        throw new Error(e)
    }

}
function authenticateUser(obj) {
    sessionStorage.setItem('name', obj.name)
    sessionStorage.setItem('id', obj.id)
    sessionStorage.setItem('money', obj.money)
    resetView()
}


