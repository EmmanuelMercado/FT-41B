// Funcion recursiva donde calculemos si un número es natural

// const { log } = require("console");

// var nro = 1;

// function esNatural(num){
//     if(num < 0) return false;
//     else if (num === 0) return true;

//     return esNatural(num-1)
// }

// console.log(esNatural(nro));

//Listas enlazadas

// Ejemplo de estrcutura 

// var lista ={
//     head:{
//         data: 1,
//         next: {
//             data: 2,
//             next: {
//                 data:3,
//                 next:{
//                     data: 4
//                     next: null
//                 }
//             }
//         }
//     }
// }

//Implementar con función construcutura (Prototype)

// function Node(data,next=null){
//     this.data = data;
//     this.next = next;
// }
// function LinkedList(){
//     this.head= null;
//     this._length = 0;
// }


//Clases
// class Node{
//     constructor (data,next=null){
//     this.data = data;
//     this.next = next;
// }}

// class LinkedList{
//     constructor(){
//     this.head= null; //Referencia al primer nodo
//     this._length = 0;
// }
// //Métodos de Linkedist
// getAll(){
//     let nodo = this.head;
//     if(!nodo){//Si detecta que la lista está vacía
//         console.log('Lista vacía');
//         return;
//     }
//     while(nodo){
//         console.log(nodo.data);
//         nodo = nodo.next;
//     }
//     return;
// }
// }

// var lista = new LinkedList()
// lista.head = new Node(1, new Node(2, new Node(3)))
// lista.getAll()


//HashTable

// var buckets = [] // 
// var nroBuckets = 6;

// function hash(value){
//     let bucket = value.color.length;
//     return bucket; 
// }

// function add(value){
//     let bucket = hash(value)
//     buckets[bucket] = value;
// }

// var obj1 = { color: 'azul'};
// var obj2 = { color: 'verde'};
// var obj3 = { color: 'rojo'};
// var obj4 = { color: 'amarillo'};

// add(obj1);
// add(obj2);
// add(obj3);
// add(obj4);

// console.log(buckets);


//Clase con DAINA
//Se necesitan de 2 instancias, Nodo y Inicio(Head) que es el que contenga la lista

// function LinkedList(){
//     this.head = null;
// }

// function Node(element){
//     this.value = element;
//     this.next = null;
// }
// LinkedList.prototype.add = function(element){ 
//  //Encargada de unir a la head con el nodo
//     let node = new Node(element)//Para unirlos se necesita instancias con el new, se está creando el nodo
//     //Intanciar es hacer referencia a la función constructora, por ejemplo es como crear una nueva caja
//     let current = this.head //Esto es decir que actualmente nos encontramos en el head
//     if(!current){ //Verificar si hay algo en la LinkedList, solamente entra una sola vez, para "enganchar al primer vagón"
//         this.head = node 
//         return node
//     }
//     // Head {Node: {Value: x, Next: Null}}
//     //console.log(current);
//     while(current.next !== null){ //Recorre el nodo hasta encontrar el puntero vacio, solo entra si next es distinto
//         current= current.next //Agarra el sig nodo
//     }
//     current.next = node //Pisa el null y le da el nuevo nodo
//     // Head {Node: {Value: x, Next: Node:{Value: y, Next: Null} }}
//     return node;
// }
// LinkedList.prototype.size = function(){
//     let current = this.head //Siempre se recorre la lista iniciando en el head
//     //head: Node { value: 7, next: Node { value: 5, next: Node: {Value:2, next: null} }
//     let counter = 0
//     if(current === null){ //La lista está vacía
//         console.log('La lista está vacía');
//         return counter;
//     }

//     while(current !== null){
//         console.log(current.value);
//         counter ++;
//         current = current.next
//     }

//     return counter;

// }
// let newList = new LinkedList()
// console.log(newList.size());
// newList.add(7)
// console.log(newList);
// console.log(newList.size());
// newList.add(5)
// console.log(newList);
// console.log(newList.size());
// newList.add(2)
// console.log(newList);
// console.log(newList.size());

//Hash tables
function HashTable(){
    this.array=[];
    this.numBuckets = 35;
}
HashTable.prototype.hash= function(key){
    let hash = 0
    for (let i=0;i<key.length;i++){
        hash += key.charCodeAt(i)
        //Saca el valor númerico del indice para después obtener uno solo
    }
    console.log(hash);
    return hash % this.numBuckets //Para obtener un valor que entre en el número de 
    //buckets, cuando se hace un módulo (%) Siempre dará un número menor}
    //Ejemplo 132%35 = 27
}
// - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea 
//la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
HashTable.prototype.set= function(key,value){
    //Primero se tiene que verificar que se está recibiendo el tipo de valor que se 
    //espera
    if(typeof key !=='string'){
        throw TypeError('Keys must be strings') //El throw lanza un error
    }
    let index = this.hash(key) //Como el método ya pertenece a la función solo hay que 
    //instanciarlo
    if(!this.array[index]){
        this.array[index]={}//Le determina que en esa posición habrá un objeto
    }
    this.array[index][key]=value
    //return this.array;
}
//get: recibe una clave por parámetro, 
//y busca el valor que le corresponde en el bucket correcto de la tabla.
HashTable.prototype.get=function(key){
    if(typeof key !=='string'){
        throw TypeError('Keys must be strings') //El throw lanza un error
    }
    let index = this.hash(key)
    if (this.array[index]===undefined){
        return ('No hay')
    }
    return this.array[index];
}

let newHash = new HashTable()
console.log(newHash.hash('this is a key'));
console.log(newHash.set('hola1',1));
console.log(newHash.set('hola1',2));
console.log(newHash.get('halo1'));