// function* generatorShowInstructors(){
//     console.log('Iniciando');
//     yield 'EMM'
//     yield 'Carmen'
//     return ('terminando');
// }

// const generatorObject = generatorShowInstructors();
// console.log(generatorObject);

// console.log(generatorObject.next());
// // console.log(generatorObject.next());
// // console.log(generatorObject.next());

// function* naturalNumbers(){
//     let number = 1;
//     while(true){
//         yield number;
//         number += 1
//     }
// }

// const generatorObject = naturalNumbers()
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());


//ASYNC AWAIT

const axios = require('axios')

// async function getUsers(){
//     const {data }= await axios('https://jsonplaceholder.typicode.com/users')
//     console.log(data);
// }

const getUsers= async () =>{
    const {data }= await axios('https://jsonplaceholder.typicode.com/users')

    const users = data?.map(user=>{
        return{
            id: user.id,
            name: user.name 
        }
    })
    return users
    
}
// const user = getUsers()
// console.log(user)

getUsers().then(response => console.log(response))