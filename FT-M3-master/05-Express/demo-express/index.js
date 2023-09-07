// const http = require('http')

// http
// .createServer((req,res)=>{
//     if(req.url==='/'){
//         res.writeHead(200,{"Content-type":"text/plain"})
//         .end('Holis, me  crearon con http')
//     }
// }).listen(3001)


const express = require('express');
const server = express();
const morgan = require ('morgan');

const usersRoutes = require('./routes/userRoutes')

server.use(express.json())
server.use(morgan('dev'))

server.use('/user',usersRoutes)




// server.get('/',(req,res)=>{
//     res.send('Esta ruta fue creada con express')
// })

// server.get('/users',(req,res)=>{
//     res.send('Esta ruta para usuarios')
// })

//Esto ya no se usa
//Lo que hace es que permite prescendir de la letra b. es decir que puede entrar tanto como /abcd o /acd
// //Pregunta si esta o no esta el caracter
// server.get('/ab?cd',(req,res)=>{
//     res.send('Ruta ab?cd')
// })

// //Permite no distinguir entre repeticiones de la letra
// //Es decir que se que pueden tener muchas repeticiones de la letra y de todos modos entrara
// server.get('/ab*cd',(req,res)=>{
//     res.send('Ruta ab*cd')
// })

//Pasando un parametro
//Se pueden pedir los parametros que sean necesarios, el nombre en el objeto lo damos nosotros con la URL













server.listen(3001,() =>{
    console.log('Server listen on port 3001');
})