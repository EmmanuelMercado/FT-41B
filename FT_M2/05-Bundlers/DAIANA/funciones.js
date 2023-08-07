//Manera número 1: utilizando "exports" y solicitando con "require"
// const {num1,num2,nombre} = require('./constantes')
// console.log(constantes);


export const sumar = (a,b) => a+b;
export const printName = (name) => {
    console.log(name);
}

