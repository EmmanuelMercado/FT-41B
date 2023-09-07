const server = require('./src/server')
// require('./src/db') //Cuando se quiere un modulo este se ejecuta al momento de esta manera 
const {database} = require('./src/db')

database.sync({alter:true})
.then(()=>{
    server.listen('3001', ()=>{
        console.log('Listening on port ',3001);
    })
})
.catch((err)=>console.log(err))

