const express = require('express')
const findAllEpisodes = require('./controllers/findAllEpisodes')
const createEpisode = require('./controllers/createEpisode')
const createCharacter = require('./controllers/createCharacter')
const findAllCharacters = require('./controllers/findAllCharacters')
const findCharacterById = require('./controllers/findCharacaterById')
const deleteCharacter = require('./controllers/deleteCharacter')
const createBulkEpisodes = require('./controllers/createBulkEpisodes')
const server = express();
server.use(express.json())

server.get('/character',async (req,res)=>{
    const {status} = req.query
    try{
        const characters = status? 
        await findAllCharacters({status}):
        await findAllCharacters()
        res.status(200).json(characters)
    }
    catch(error){
        res.status(404).json({error:error.message})
    }
})

server.get('/character/:id',async (req,res)=>{
    try{
        const {id} = req.params
        const character = await findCharacterById(id)
        res.status(200).json(character)
    }
    catch(error){
        res.status(404).json({error:error.message})
    }
})

server.post('/character',async (req,res)=>{
    try{
        const {name,gender,status,origin,species,episodes} = req.body;
        const newCharacter = await createCharacter({name,gender,status,origin,species,episodes})
        res.status(200).json(newCharacter)
    }
    catch(error){
        res.status(404).json({error:error.message})
    }
})

server.get('/episode',async (req,res)=>{
    try{
        const episodes = await findAllEpisodes()
        res.status(200).json(episodes)
    }
    catch(error){
        res.status(404).json({error:error.message})
    }
    

})

server.post('/episode',async (req,res)=>{
    try{
        const {name} = req.body
        const newEpisode= await createEpisode(name);
        res.status(201).json(newEpisode)
    }
    catch(error){
        res.status(404).json({error:error.message})
    }
})


server.delete('/character/:id',async (req,res)=>{
    const {id} = req.params
    try{
        const response = await deleteCharacter(id)
        res.status(200).json(newEpisode)
    }
    catch(error){
        res.status(404).json({error:error.message})
    }
})

server.post('/episode/bulk',async (req,res)=>{
    const {episodes} = req.body
    const created = await createBulkEpisodes(episodes)
    res.status(200).json({response:"created"})
})

module.exports = server;