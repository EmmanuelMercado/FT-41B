const {Episode} = require("../db")

const findAllEpisodes = async ()=>{
    try{
        const episodes = await Episode.findAll()
        return episodes
    }
    catch (error){
        throw new Error(error)
    }
}

module.exports = findAllEpisodes