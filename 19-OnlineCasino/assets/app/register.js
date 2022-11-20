import {resetView} from './navigation.js'

export async function register(e) {
    const form = e.target
    const name = form.name.value
    const password = form.password.value
    const rePass = form.rePass.value

    const body={
        name,
        password,
        money:100,
    }
    try {
      await checkRegisteredUsers(name)

        if(name.length<3){
            throw new Error('Name should be longer')
        }

        if(password!==rePass){
            throw new Error('Passwords don\'t match')
        }    
        
        const response = await fetch(`https://casino-54735-default-rtdb.europe-west1.firebasedatabase.app/users.json`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
        const data= await response.json()
        body.id=data.name
        form.reset()
        authenticateUser(body)
    } catch (e) {
        throw new Error(e)

    }

}

async function checkRegisteredUsers(name){
    try{
        const response = await fetch(`https://casino-54735-default-rtdb.europe-west1.firebasedatabase.app/users.json`)
        const data= await response.json()
        Object.values(data).forEach(obj=>{
            if(name===obj.name){
                throw new Error('User already Exists')
            }

        })

    }catch(e){
        alert(e)
        throw new Error(e)
    }

}

function authenticateUser(obj){
    sessionStorage.setItem('name',obj.name)
    sessionStorage.setItem('id',obj.id)
    sessionStorage.setItem('money',obj.money)
    resetView()
}


