require("dotenv").config();
const {USER,PASSWORD,HOST,PORT,BDD} =process.env

const CharacterFunction = require('./models/character')
const EpisodeFunction = require('./models/Episode')


const {Sequelize,DataTypes} = require('sequelize')

//Vamos a crear la conexión con la base de datos
// Usuario de postgress
//Password de postgres
//localhost 5432
//sequelize >>> Nombre de la base de datos

const database = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
    {logging:false}
);
CharacterFunction(database)
EpisodeFunction(database)

const {Character,Episode} = database.models;

Character.belongsToMany(Episode,{through:"CharacterEpisode"});
Episode.belongsToMany(Character,{through:"CharacterEpisode"});

module.exports = {
     database,
     ...database.models,
     
};