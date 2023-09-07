const {Character,Episode} = require('../db');
const character = require('../models/character');

const findCharacterById = async (id)=>{
    const character = await Character.findByPk(id,{
        include:{
            model:Episode,
            attributes:['name'],
            through:{
                attributes:[]
            }
        }
    })
    return character;
}

module.exports=findCharacterById;