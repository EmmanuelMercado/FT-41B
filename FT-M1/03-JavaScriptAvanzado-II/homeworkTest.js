const { log } = require("console");

function counter() {
    let coun = 1;
    return function(){
        return coun++;
    }
}

const contador = counter()
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());



function square(n){
    return n * n
  }

function cacheFunction(cb) {
    let Resultados= {}
    console.log(Resultados);
    return function(n){
        console.log(cb(n)); 
        
        if(Resultados.hasOwnProperty(n)===true){
            console.log(Resultados); 
            return Resultados[n];
        }
        else {
           
            Resultados[n]=cb(n)
            console.log(Resultados); 
            return Resultados[n];
            
        }
    } 
}

const operacion = cacheFunction(square);
console.log(operacion(1));
console.log(operacion(2));







