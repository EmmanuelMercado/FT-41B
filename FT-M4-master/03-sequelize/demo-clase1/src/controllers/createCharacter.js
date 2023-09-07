const {Character} = require('../db')

const createCharacter = async (character)=>{
    const {name,gender,status,origin,species,episodes} = character
    const newCharacter = await Character.create({name,gender,status,origin,species})

    newCharacter.addEpisodes(episodes)
    return newCharacter;
}

module.exports = createCharacter