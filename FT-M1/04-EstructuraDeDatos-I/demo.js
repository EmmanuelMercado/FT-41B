// //Bind 

// function sum(a,b,c){
//  return a+b+c;
// }

// //Bind sin enviar el parámetro b

// var sumBind = (b) => sum.bind(null,2,b,4)(b);
// console.log(sumBind(3));

//Recursión

//Sumar todos los números de un arreglo

// let arr = [1,2,3,4];

// // function sumarArreglo(arr){
// //     if(arr.length===0) return 0
// //     return arr.shift() + sumarArreglo(arr)
// //     //return sumarArreglo(arr) //Modificar el arreglo
// // }

// // console.log(sumarArreglo(arr));

// let numeros = [1,2,3,4];

// function recorrerArregloRecursivo(arreglo, i=0){
//     if(i < numeros.length){
//         console.log(numeros[i]);
//         return recorrerArregloRecursivo(numeros,++i)
//     }
// }
// function recorrerArregloInversoRecursivo(arreglo, i= 0){
//     if(i < numeros.length){
        
//         return recorrerArregloInversoRecursivo(numeros,++i)
//         console.log(numeros[i]);
//     }
// }
// recorrerArregloRecursivo()
// recorrerArregloInversoRecursivo(numeros)


//SET

// var set = new Set();
// console.log(set);

// let numeros = [1,2,3,4,4,3,1,5];
// var set= new Set(numeros);
// console.log(set);
// set.add('2')
// console.log(set);
// set.delete(2)
// console.log(set);

// var set= new Set();
// var persona = 1//{nombre: 'Sergio'}
// var persona2 = 1//{nombre:'Sergio'}

// set.add(persona)
// set.add(persona2)
// console.log(set);


//STACK

// var stack = []

// stack.push(1)
// stack.push(2)
// stack.push(3)

// console.log(stack);

// stack.pop()
// console.log(stack);
// stack.pop()
// console.log(stack);
// stack.pop()
// console.log(stack);

 var queue = []

 queue.push(1)
 queue.push(2)
 queue.push(3)

console.log(queue);

queue.shift();
console.log(queue);
queue.shift();
console.log(queue);
queue.shift();
console.log(queue);


