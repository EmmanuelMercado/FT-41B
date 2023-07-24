// /* EJERCICIO 1
// Implementar la clase LinkedList, definiendo los siguientes métodos:
//   - add: agrega un nuevo nodo al final de la lista;
//   - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
//   - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
//   EJEMPLO 
//   search(3) busca un nodo cuyo valor sea 3;
//   search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
//   En caso de que la búsqueda no arroje resultados, search debe retornar null.
// */
// function LinkedList(){
//     this.head = null;
// }

// function Node(element){
//     this.value = element;
//     this.next = null;
// }

// LinkedList.prototype.add=function(value){
//     let node = new Node(value); //Node {value:value, next:null}
//     let current = this.head; // Linkedlist{Node {value:value, next:Node {value:value, next:null}}}
    
//     if(!current){//Verificar que la lista esté vacia, osea que no tenga vagones la locomotora
//         this.head = node //This.head es el puntero del vagón principal, que apuntará al nuevo nodo, en este caso es el primero
//         return node;
//     }
//     //console.log(current);
//     while(current.next !== null){ //Busca si hay algún dato posterior hasta que encuentre un vació, busca el fin del tren
//         current = current.next
//     }
//     current.next = node
//     console.log(current);
//     return current;
    
//   }

//   let lista = new LinkedList();

//   console.log(lista.add(1));
//   console.log(lista);
//   console.log(lista.add(2));
//   console.log(lista);
//   console.log(lista.add(3));
//   console.log(lista);

// //remove deberia sacar el ultimo nodo ingresado y devolver su valor
// LinkedList.prototype.remove= function(){
//     let current = this.head
//     //Verificar si la lista está vacia
//     console.log(current);
//     if(!current){
//         this.head = null
//         return null
//     }
//     else if(!this.head.next){//Linkedlist{Node {value:value, next: null}}{}
//         console.log(current);
//         let borrado = current.value
//         this.head = null
//         return borrado;
//     }
//     while(current.next.next){
//         console.log('Llegue aquí');
//         current = current.next
//     }
//     let borrado = current.next.value
//     current.next = null
//     console.log(lista);
//     return borrado
// }
// //   LinkedList.prototype.search=function(){}

// console.log(lista);
// console.log(lista.remove());
// console.log(lista);
// console.log(lista.remove());
// console.log(lista);
// console.log(lista.remove());
// console.log(lista);
// console.log(lista.remove());
// console.log(lista);

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable(){
    this.array = []
    this.numBuckets = 35
}

HashTable.prototype.hash = function(value){
    let hash=0;
    for(let i=0; i<value.length;i++){
        hash+= value.charCodeAt(i)
    }
    return hash % this.numBuckets
}
//- set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
HashTable.prototype.set = function(key,value){
    if(typeof key !=='string'){
        throw TypeError('Keys must be strings')
    }
    let index = this.hash(key)
    console.log(index);
    if(!this.array[index]){
        this.array[index]={}//Le determina que en esa posición habrá un objeto
    }
    this.array[index][key]= value
    return this.array
}
HashTable.prototype.get = function(key){
    if(typeof key !=='string'){
        throw TypeError('Keys must be strings') //El throw lanza un error
    }
    let index = this.hash(key)
    if (this.array[index]===undefined){
        return ('No hay')
    }
    return this.array[index][key];
}
HashTable.prototype.hasKey = function(){}

let tabla = new HashTable()
console.log(tabla.set('Hola','Adios'));
console.log(tabla.set('Halo',1));
console.log(tabla.get('Hola'));
