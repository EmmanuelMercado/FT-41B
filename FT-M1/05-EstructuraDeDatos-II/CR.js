/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
    this.head = null
    this._length = 0
}

function Node(value) {
    this.data = value;
    this.next = null;
}
//- add: agrega un nuevo nodo al final de la lista;
LinkedList.prototype.add=function(value){
    var node = new Node(value); //Instanciar el nodo(cajón del tren)
    var current = this.head; //Al inicio se encuentra en el head

    if (!current){
        this.head = node 
        this._length++;//Si no hay nada en la lista, le da el valor al primer cajón
        return node;
    }
    while(curent.next){ //compara si hay valor en el actual cajon
        current = current.next
    }
    current.next=node;
    this._length++;
    return node;
}
// - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
LinkedList.prototype.remove=function(){ 
    if(!this.head){//Revisar si hay algo en la cabeza
        return this.head
    }
    else if(!this.head.next){
        let current = this.head;
        this.head = null;
        this._length--;
        return current.value
    }
    else{
        let current = this.head;
        while (current.next.next){ //Comprueba si hay un cajón después del actual
            current = current.next;
        }
        var node = current.next
        current .next = null;
        this._length--;
        return node;

    }
}
LinkedList.prototype.search=function(arg){
    var current = this.head;
    if (!current){
        return null
    }
    while(current){
        if(typeof arg === 'function'){
            if(arg(current.value)) return current.value;
        }
        else{
            if(current.value===arg) return current.value;
        }
        current = current.next;
    }
    return null;
}

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
    this.array=[]
    this.numBuckets= 35
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

HashTable.prototype.set= function(key,value){
    if(typeof key==='string'){
     throw new TypeError('Keys must be strings')
    }
    var hash = this.hash(key)
    if(!this.array[hash]){
        this.array[hash]={}
    }
    this.array[hash][key]= value;
}
HashTable.prototype.get= function(key){
    var hash = this.hash(key)
    if(this.array[hash][key]){
        return this.array[hash][key]
    }
    else{
        return false
    }
}
HashTable.prototype.hasKey= function(key){
    var hash = this.hash(key)
    return this.array[hash].hasOwnProperty(key)
}
