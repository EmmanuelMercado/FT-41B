const express = require('express')
const routerUsers = express.Router()


routerUsers .get('/:id/:name',(req,res)=>{
    const {id,name} = req.params

    if(+id === 24 && name ==='EMM'){
        const infoUser = {
            cohorte : "41b",
            name: 'EMM',
            id:24,
            alumnos: "Muchos"
        }
        return res.json(infoUser)
    }
    return res.status(404).send('Error')
})

routerUsers.get('/',(req,res)=>{
    const {name} = req.query

    if(name){
        return res.send('mandar info especificada de sese usuario')
    }
    return res.send('Mando a todos los usuarios')
})


const users = []
let id=1;
routerUsers.post('/posteo',(req,res)=>{
    console.log(req.body);
    
    const {name,alumnos} = req.body

    const newUser ={
        id : ++ id,
        name,
        alumnos
    }

    users.push(newUser)
    res.json(users)
})

module.exports=routerUsers;