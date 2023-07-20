// Las closures (cierres) son un concepto importante en JavaScript y se refieren a la combinación de una función y el entorno léxico en el cual fue creada.
//  Esto permite que la función conserve acceso a las variables y parámetros de su ámbito padre incluso después de que ese ámbito haya finalizado su ejecución.

// Una closure se forma cuando una función interna (la función hija) se define dentro de otra función exterior (la función padre) y la función interna hace 
// referencia a variables de la función exterior. Veamos un ejemplo para entenderlo mejor:

function exterior(){
    let variableExterior='Hola';

    return function interior(){
        console.log(variableExterior)
    }
}

const closureFunc = exterior();
closureFunc();

// Closure en callbacks ejemplo

function operacionMatematica(op){
    return function(a,b){
        if (op==='suma'){
            return a+b;
        }
        else if (op==='resta'){
            return a-b;
        }
        else if (op==='multiplicacion'){
            return a*b;
        }
        else if (op==='division'){
            return a/b;
        }
    }
}

const suma = operacionMatematica('suma')
const resta = operacionMatematica('resta')

console.log(suma(4,7));
console.log(resta(7,4));

//Contador

function contador(){
    let count=0;
    return {
        incrementer: function(){
            count++;
        },
        decrementer: function(){
            count--;
        },
        getCount: function(){
            return count;
        }
    }
}

const counter = contador();

counter.incrementer();
counter.incrementer();
counter.incrementer();
counter.incrementer();
counter.incrementer();
counter.decrementer();
console.log(counter.getCount());

//Crear funciones

function crearFunciones(){
    const funciones = []

    for (let i = 0; i <=5 ; i++) {
        funciones.push(function(){
            console.log(i);
        }
        )
    }
    return funciones;
}

const funciones= crearFunciones();
funciones[1]();
funciones[1]();


