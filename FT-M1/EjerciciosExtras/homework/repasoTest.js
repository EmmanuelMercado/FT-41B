// // // // // // // Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// // // // // // // número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// // // // // // // El array será recibido por parámetro.
// // // // // // // Ejemplo:
// // // // // // //    const array = [1, [2, [3,4]], [5,6], 7];
// // // // // // //    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// // // // // // // Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// // // // // // // [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]


// // // // // // let arreglo = [1,1,1,1,[1,1,1,1],1,1,[1,[1,[1],1,1,1],1,1,1,]]

// // // // // // console.log(arreglo.length);

// // // // // // var countArray = function(array) {
// // // // // //     // Tu código aca:
// // // // // //     let suma = 0
// // // // // //     for(let i = 0; i<array.length; i++){
// // // // // //         if(Array.isArray(array[i]))suma += countArray(array[i])
// // // // // //         else suma += parseInt(array[i]) 
// // // // // //     }
// // // // // //     return suma
// // // // // // }

// // // // // // console.log(countArray(arreglo));



// // // // // // function construccionesCasas(bolsas){
// // // // // //     if(bolsas<10) return "no se puede"
// // // // // //     return function(casas){
// // // // // //         if(casas<=0) return "Ingresa cuantas casas quieres construir"
// // // // // //         let esCountruible = (bolsas/10)/casas
// // // // // //         console.log(esCountruible);
// // // // // //         if(esCountruible>=1) {
// // // // // //             return "true"
// // // // // //         }

// // // // // //         else {
// // // // // //             console.log('entra');
// // // // // //             return "Solo puedes construir: "+Math.floor(esCountruible)
// // // // // //         }
// // // // // //     }
// // // // // // }

// // // // // // let casita = construccionesCasas(20)
// // // // // // console.log(casita(3));


// // // // // // 5️⃣ ***** EJERCICIO 5 ***** - tipologiasSeparadas() 5️⃣
// // // // // // En este ejercicio debemos implementar la funcion tipologiasSeparadas() la cual va a recibir por parametro un array con el numeros de tipologias en el orden que se van a construir.
// // // // // // Supongamos que tenemos un barrio en donde la construccion de casas pueden ser de distintos tipos de tipologias en una misma manzana.
// // // // // // Pero hay una limitacion, que no puede haber 2 tipologias iguales una al lado de la otra.
// // // // // // Nuestro objetivo es utilizar el STACK para poder detectar si cuando nos pasan el array de como se van a construir las casas necesitamos separar las tipologias que se repiten.
// // // // // //
// // // // // // EJEMPLOS:
// // // // // // let arr = [1, 2, 2, 3, 3, 6, 4, 5]
// // // // // // tipologiasSeparadas(arr) => [1, 2, 3, 6, 4, 5, 2, 3]
// // // // // //
// // // // // // REQUISITOS:
// // // // // // 🟢 La función debe crear y retornar el Stack creado con las casas de forma correcta sin tipologias repetidas.
// // // // // // 🟢 El Stack que retorna debe ser una instancia de la clase Stack.
// // // // // // 🟢 En caso de que no hayan tipologias repetidas o que ya las recibamos separadas correctamente, debe retornar "No hay tipologias repetidas".
// // // // // // 🟢 En caso de recibir un array vacio debe retornar "Tipologias inexistentes".

// // // function Stack(){
// // //     this.array = [];
// // //   }
  
// // //   Stack.prototype.push = function(elemento){
// // //     this.array.push(elemento);
// // //   };
  
// // //   Stack.prototype.pop = function(){
// // //     return this.array.pop();
// // //   };
  
// // //   Stack.prototype.size = function () {
// // //     return this.array.length;
// // //   };


// // // function tipologiasSeparadas(arr) {
    
// // //     let separado = []
// // //     let lista = new Stack(arr)
// // //     for(let i=0;i<arr.length;i++){
// // //         let j=i+1
// // //         if(arr[i]===arr[j]){
// // //             izquierda = arr.slice(0,j+1)
// // //             derecha = arr.slice(j+1)
// // //             console.log(izquierda);
// // //             console.log(derecha);
// // //             let aux = izquierda.pop()
// // //             console.log(izquierda);
// // //             arr= izquierda.concat(derecha.concat(aux))
// // //             console.log(arr);
// // //             i=0
// // //         }
// // //     }
// // //     return arr;

// // // }

// // // console.log(tipologiasSeparadas([1,2,4,4,5]));

// // // // // class Stack {
// // // // //     constructor() {
// // // // //       this.items = [];
// // // // //     }
  
// // // // //     push(element) {
// // // // //       this.items.push(element);
// // // // //     }
  
// // // // //     pop() {
// // // // //       if (this.isEmpty()) {
// // // // //         return null;
// // // // //       }
// // // // //       return this.items.pop();
// // // // //     }
  
// // // // //     isEmpty() {
// // // // //       return this.items.length === 0;
// // // // //     }
// // // // //   }
  
// // // // //   function tipologiasSeparadas(arr) {
// // // // //     if (arr.length === 0) {
// // // // //       return "Tipologias inexistentes";
// // // // //     }
  
// // // // //     const stack = new Stack();
// // // // //     stack.push(arr[0]);
  
// // // // //     for (let i = 1; i < arr.length; i++) {
// // // // //       if (arr[i] !== stack.items[stack.items.length - 1]) {
// // // // //         stack.push(arr[i]);
// // // // //       }
// // // // //       else{
        
// // // // //       }
// // // // //     }
  
// // // // //     if (stack.isEmpty()) {
// // // // //       return "No hay tipologias repetidas";
// // // // //     }
  
// // // // //     return stack;
// // // // //   }
  
// // // // //   // Ejemplo de uso:
// // // // //   let arr = [1, 2, 2, 3, 3, 6, 4, 5];
// // // // //   const result = tipologiasSeparadas(arr); 
// // // // //   console.log(result);
  
// // // // //   if (typeof result === "string") {
// // // // //     console.log(result);
// // // // //   } else {
// // // // //     while (!result.isEmpty()) {
// // // // //       console.log(result.pop());
// // // // //     }
// // // // //   }
  

// // // // class Stack {
// // // //     constructor() {
// // // //       this.items = [];
// // // //     }
  
// // // //     push(element) {
// // // //       this.items.push(element);
// // // //     }
  
// // // //     pop() {
// // // //       if (this.isEmpty()) {
// // // //         return null;
// // // //       }
// // // //       return this.items.pop();
// // // //     }
  
// // // //     isEmpty() {
// // // //       return this.items.length === 0;
// // // //     }
// // // //   }
  
// // // //   function tipologiasSeparadas(arr) {
// // // //     if (arr.length === 0) {
// // // //       return "Tipologias inexistentes";
// // // //     }
  
// // // //     const stack = new Stack();
  
// // // //     for (let i = 0; i < arr.length; i++) {
// // // //       if (stack.isEmpty() || arr[i] !== stack.items[stack.items.length - 1]) {
// // // //         stack.push(arr[i]);
// // // //       } else {
// // // //         let nextDifferentIndex = i + 1;
// // // //         while (
// // // //           nextDifferentIndex < arr.length &&
// // // //           arr[nextDifferentIndex] === arr[i]
// // // //         ) {
// // // //           nextDifferentIndex++;
// // // //         }
// // // //         stack.push(arr[nextDifferentIndex]);
// // // //         i = nextDifferentIndex;
// // // //       }
// // // //     }
  
// // // //     if (stack.isEmpty()) {
// // // //       return "No hay tipologias repetidas";
// // // //     }
  
// // // //     return stack;
// // // //   }
  
// // // //   // Ejemplo de uso:
// // // //   let arr = [1, 2, 2, 3, 3, 6, 4, 5];
// // // //   const result = tipologiasSeparadas(arr);
// // // //   console.log(result)
  
// // // //   if (typeof result === "string") {
// // // //     console.log(result);
// // // //   } else {
// // // //     while (!result.isEmpty()) {
// // // //       console.log(result.pop());
// // // //     }
// // // //   }
  

// // // // class Stack {
// // // //     constructor() {
// // // //       this.items = [];
// // // //     }
  
// // // //     push(element) {
// // // //       this.items.push(element);
// // // //     }
  
// // // //     pop() {
// // // //       if (this.isEmpty()) {
// // // //         return null;
// // // //       }
// // // //       return this.items.pop();
// // // //     }
  
// // // //     isEmpty() {
// // // //       return this.items.length === 0;
// // // //     }
// // // //   }
  
// // // //   function tipologiasSeparadas(arr) {
// // // //     if (arr.length === 0) {
// // // //       return "Tipologias inexistentes";
// // // //     }
  
// // // //     const stack = new Stack();
  
// // // //     for (let i = 0; i < arr.length; i++) {
// // // //       if (stack.isEmpty() || arr[i] !== stack.items[stack.items.length - 1]) {
// // // //         stack.push(arr[i]);
// // // //       } else {
// // // //         let j = i + 1;
// // // //         while (j < arr.length && arr[j] === arr[i]) {
// // // //           j++;
// // // //         }
// // // //         for (let k = i + 1; k < j; k++) {
// // // //           stack.push(arr[k]);
// // // //         }
// // // //         i = j - 1;
// // // //       }
// // // //     }
  
// // // //     if (stack.isEmpty()) {
// // // //       return "No hay tipologias repetidas";
// // // //     }
  
// // // //     return stack;
// // // //   }
  
// // // //   // Ejemplo de uso:
// // // //   let arr = [1, 2, 2, 3, 3, 6, 4, 5];
// // // //   const result = tipologiasSeparadas(arr);
// // // //   console.log(result);
  
// // // //   if (typeof result === "string") {
// // // //     console.log(result);
// // // //   } else {
// // // //     while (!result.isEmpty()) {
// // // //       console.log(result.pop());
// // // //     }
// // // //   }
  


// // //***** EJERCICIO 6 ***** - sortPrimeHouses() 6️⃣
// // // 
// // // Implementar un algoritmo de ordenamiento, que además de ordenar un array de menor a mayor,
// // // retorne false si un número dentro del array no es primo
// // // EJEMPLOS:
// // // Dado el siguiente array:
// // // [25, 3, 6, 8, 5, 12, 9, 18, 11, 7]
// // // sortPrimeHouses() retorna => false (porque 25 por ejemplo, no es primo)
// // //
// // // Dado este otro array:
// // // [61, 7, 13, 11, 29, 3]
// // // sortPrimeHouses() retorna => [3, 7, 11, 13, 29, 61]
// // //⚠️ ATENCION ⚠️
// // // NO utilizar el método sort() de Array!
// // // REQUISITOS:
// // //  🟢 Aplicar un algoritmo de ordenamiento de menor a mayor
// // //  🟢 Si numuero dentro del array no es primo, retornar false

// // function sortPrimeHouses(arr) {
// //     for(let i = 0; i<arr.length; i++){
// //         if (arr[i] <= 1) {
// //             return false;
// //           }
// //           // El número 2 es primo
// //           if (arr[i] === 2) {
// //             return "no hay primos"
// //           }
// //           // Verificar si el número es divisible por algún otro número entre 2 y la raíz cuadrada del número
// //           // Si se encuentra un divisor, el número no es primo
// //           for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
// //             if (arr[i] % j === 0) {
// //               return false;
// //             }
// //           }
// //     }
// //     if(arr.length===1) return arr
// //     let pivote = arr[Math.floor(Math.random()*arr.length)]
// //     let menores = []
// //     let mayores = []
// //     let arrpivote = []

// //     for(let i = 0; i<arr.length; i++){
        
// //     if(arr[i]<pivote){
// //         menores.push(arr[i])
// //     }
// //     else if(arr[i]>pivote){
// //         mayores.push(arr[i])
// //     }
// //     else if(arr[i]===pivote){
// //         arrpivote.push(arr[i])
// //     }
// //     }
    
// //     arr=[]
// //     // // menores = quickSort(menores)
// //     // if 
// //     if (menores.length>=2) menores = sortPrimeHouses(menores)
// //     if (mayores.length>=2) mayores = sortPrimeHouses(mayores)
// //     arr = menores.concat(arrpivote).concat(mayores)
// //     return arr;
// // }

// // let arreglo = [61, 7, 13, 11, 29, 3]
// // console.log(sortPrimeHouses(arreglo));

// function LinkedList() {
//     this.head = null;
//   }
  
//   LinkedList.prototype.add = function(valor) {
//     var nuevoNodo = new Node(valor);
  
//     if(!this.head){
//       this.head = nuevoNodo;
//     } else {
//       var tailActual = this.head;
//       while (tailActual.next !== null) {
//         tailActual = tailActual.next;
//       }
//       tailActual.next = nuevoNodo;
//     }
//   }
  
//   LinkedList.prototype.remove = function() {
//     if(!this.head){
//       return undefined;
//     }
  
//     if(this.head.next === null){
//       var unicoNodo = this.head;
//       this.head = null;
//       return unicoNodo.value;
//     }
  
//     var nodoActual = this.head.next;
//     var nodoPrevious = this.head;
//     while (nodoActual.next !== null) {
//       nodoPrevious = nodoActual;
//       nodoActual = nodoActual.next;
//     }
//     nodoPrevious.next = null;
//     return nodoActual.value;
//   }
  
//   LinkedList.prototype.search = function(arg) {
//     var nodoActual = this.head;
  
//     if(nodoActual === null){
//       return null;
//     }
  
//     while (nodoActual !== null) {
//       if(typeof arg === "function"){
//         if(arg(nodoActual.value)){
//           return nodoActual.value;
//         }
//       } else if(nodoActual.value === arg){
//           return nodoActual.value;
//       }
//       nodoActual = nodoActual.next;
//     }
  
//     return null;
//   }
  
//   function Node(valor){
//     this.value = valor;
//     this.next = null;
//   }

// LinkedList.prototype.mapHouses = function (value) {
  
//     var tailActual = this.head;
//     while(tailActual!==null){
//         tailActual.value= value;
//         tailActual = tailActual.next;
//     } 
// }

// // let miLista = new LinkedList()
// // miLista.add(['Emmanuel'])
// // miLista.add('Carmen')
// // miLista.add('Camila')
// // miLista.add('Diego')
// // console.log(miLista);
// // console.log(miLista.mapHouses('Laura'));
// // console.log(miLista);

// // 8️⃣ ***** EJERCICIO 8 ***** - LinkedList.sliceRooms() 8️⃣ 
// // 
// // Agregar al prototype de LinkedList el método sliceRooms().
// // Este método también será similar al slice() de array, dónde a partir de 2 índices, deberás
// // particionar la lista de habitaciones de una casa.
// //
// //⚠️ ATENCION ⚠️
// // - Documentación explicando Array.slice() --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// // - Los valores que sean iguales a los índices no deben ser incluidos
// // - Los indices siempre van a equivaler a un string con el nombre de una habitación
// // - Recorda que esta el metodo add() ya incluido en el prototype para agregar nuevos nodos y search() para buscar los existentes
// //
// // EJEMPLOS:
// // Tenemos la siguiente lista:
// // ("Cocina") ---> ("Dormitorio") ---> ("Baño") ---> ("Living") ---> ("Garage") --->
// //
// // LinkedList.sliceRooms("Dormitorio", "Garage") Devuelve => ("Baño") ---> ("Living") --->
// //
// // REQUISITOS:
// //  🟢 Retornar una nueva lista a partir de los índices provistos
// //  🟢 Los valores que coincidan con los indices no deben ser incluidos
// //  🟢 Si ninguno de los índices se encuentra en la lista, retornar false
// //
// // Nota: el primer indice siempre sera menor al segundo.

// LinkedList.prototype.sliceRooms = function (firstIndex, secondIndex) {
//     // Tu código aquí:
//     var tailActual = this.head;
//     let arr=[]
//     while(tailActual.next.value!==secondIndex){
//         console.log(tailActual);
//         if(tailActual.value===firstIndex){
//             while(tailActual.next.value!==secondIndex){
//             arr.push(tailActual.next.value)
//             tailActual = tailActual.next
//         }
//     }
//         else{
//         tailActual = tailActual.next
//                 }
    
//     } 
//     return arr;
// }

// let miLista = new LinkedList()
// miLista.add('Emmanuel')
// miLista.add('Carmen')
// miLista.add('Camila')
// miLista.add('Camila')
// miLista.add('Diego')
// console.log(miLista);
// console.log(miLista.sliceRooms('Emmanuel','Diego'))

function BinarySearchTree(valor) {
    this.value = valor;
    this.left = null;
    this.right = null;
  }
  
  BinarySearchTree.prototype.insert = function(value) {
  
    if(value < this.value){
      if(this.left === null){
        var newTree = new BinarySearchTree(value);
        this.left = newTree;
      } else {
        this.left.insert(value);
      }
    } else {
      if(this.right === null){
        var newTree = new BinarySearchTree(value);
        this.right = newTree;
      } else {
        this.right.insert(value);
      }
    }
  }
  
  BinarySearchTree.prototype.size = function() {
    if(this.value === null){
      return 0;
    }
  
    if(this.left === null && this.right === null){
      return 1;
    }
  
    if(this.left === null){
      return 1 + this.right.size();
    }
  
    if(this.right === null){
      return 1 + this.left.size();
    }
  
    return 1 + this.left.size() + this.right.size();
  }

  //9️⃣ ***** EJERCICIO 9 ***** - BinarySearchTree.getHouseValues() 9️⃣ 
  // Agregar al prototype de BinarySearchTree la función getHouseValues(), que servirá para obtener el valor total de una casa
  // dependiendo del parámetro que recibas.
  // Si recibes el parámetro "left", debes retornar la suma de todos los valores que estén a la izquierda del árbol.
  // Si recibes el parámetro "right", debes retornar la suma de todos los valores que estén a la derecha.
  // EJEMPLOS:
  // Dado el siguiente árbol:
  //                13
  //             /      \
  //           7         24
  //         /          /   \
  //        6         16     27
  //      /                    \
  //     3                     45
  //      \
  //       4
  // BinarySearchTree.getHouseValues("left") Devuelve => 16
  // BinarySearchTree.getHouseValues("right") Devuelve => 96
  // REQUISITOS:
  //  🟢 La función debe retornar un numero representando la suma total de las ramas, dependiendo del orden pedido
  //  🟢 El valor del nodo raíz no debe ser incluido
  
//   BinarySearchTree.prototype.getHouseValues = function (side, total = 0) {
//     // Tu código aquí:

//     // if(!this.value) return 0
//     // if(side==='left'){
//     //     console.log('entro');
//     //     console.log(this.left);
//     //     console.log(this.value);
        
//     //     if(this.left && this.left.getHouseValues(side,total)) total+=this.value
//     //     console.log(total);
//     // }
//     // else if (side==='right'){
//     //     if(this.right) total += this.getHouseValues(this.right)
//     // }
//     // this.value
//     // return total-this.value
//     if (side === "left") {
//         if (this.left) {
//           total += this.left.value;
//           total = this.left.getHouseValues(side, total);
//         }
//       } else if (side === "right") {
//         if (this.right) {
//           total += this.right.value;
//           total = this.right.getHouseValues(side, total);
//         }
//       }
//       return total;
//   }
    // Dado el siguiente árbol:
  //                13
  //             /      \
  //           7         24
  //         /          /   \
  //        6         16     27
  //      /                    \
  //     3                     45
  //      \
  //       4
  // BinarySearchTree.getHouseValues("left") Devuelve => 16
  // BinarySearchTree.getHouseValues("right") Devuelve => 96
  let arbol = new BinarySearchTree(13)
  console.log(arbol);
  arbol.insert(7)
  arbol.insert(6)
  arbol.insert(3)
  arbol.insert(4)
  arbol.insert(24)
  arbol.insert(16)
  arbol.insert(27)
  arbol.insert(45)
  console.log(arbol);
  //console.log(arbol.getHouseValues('left'))


  // Agregar al prototype de BinarySearchTree el método spotHouseValues(), el cual deberá retornar un array con los
// valores del árbol que sean mayores al número recibido por parámetros.
//
// EJEMPLOS:
//
// Dado el siguiente árbol: 
//                6
//             /      \
//           4         8
//         /  \       /  \
//        3    5     7    9
//
// nuevaCasa.spotHousePrices(6, []) => [8, 7, 9]
// nuevaCasa.spotHousePrices(4, []) => [6, 5, 8, 7, 9]
//
//⚠️ ATENCION ⚠️
// - Para solucionar el ejercicio, deben recorrer el arbol de manera depth-first/pre-order
//   (o sea, lo recorren de izquierda a derecha)
// - El array sera provisto via parametros
//
// REQUISITOS:
//  🟢 Devolver un array con los numeros mayores al recibido por parametros
//  🟢 Recorrer el arbol de manera depth-first pre-order
BinarySearchTree.prototype.spotHousePrices = function (num, arr = []) {
    // Tu código aquí:
    // cb(this.root)
    // if(this.left && this.left.depthFirstForEach(cb,pedido)){} //Si el primero da true, se va a romper hasta que sea false
    //     //console.log(cb(this.root))
    // if(this.right && this.right.depthFirstForEach(cb,pedido)){} 
    console.log(num)
    console.log(this.value);
    console.log(arr);
    if(num<this.value){
        arr.push(this.value)
    }
    if(this.left && this.left.spotHousePrices(num,arr));
    if(this.right && this.right.spotHousePrices(num,arr));
    return arr
}
console.log(arbol);

console.log(arbol.spotHousePrices(16));