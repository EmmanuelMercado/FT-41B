// //Queue
// class Queue{
//     constructor(){
//         this.array = []
//     }
    
//     enqueue(elemento) {
//       return this.array.push(elemento);
//     };
    
//     dequeue() {
//       return this.array.shift();
//     };
    
//     size() {
//       return this.array.length;
//     };

// }

// function guardarPeliculas(pelisQueue) {
//     // Tu código aquí
//     let peliculas = {}
//     let aux;
//     let estrenar = true;
//     let i=1;
//     while(pelisQueue.array.length>0){
//         aux = pelisQueue.dequeue()
//         if(estrenar===true){
//             peliculas.estrenar=aux
//             estrenar=false;
//         }
//         else{
            
//             peliculas[i]=aux
//             i++
//         }
//     }
//     return peliculas;
// }

// let cola = new Queue()
// cola.enqueue('Avatar')
// cola.enqueue('Hallowen: el final')
// cola.enqueue('Muerte en el Nilo')
// cola.enqueue('Black Adam')
// console.log(cola);
// console.log(guardarPeliculas(cola));
// console.log(cola);

// // let prueba = {}
// // console.log(prueba.hola='hola');
// // console.log(prueba[2]='holas');
// // console.log(prueba);


//STACK

// class Stack {
// 	constructor() {
// 		this.array = [];
// 	}

// 	push(elemento) {
// 		this.array.push(elemento);
// 	}

// 	pop() {
// 		return this.array.pop();
// 	}

// 	size() {
// 		return this.array.length;
// 	}
// }

// function apilarPantalones(listaDeTallas, talla) {
//     // Tu código aquí
//     let tallasencontradas = new Stack()
//     let tallasrestante = new Stack()
//     let aux;
//     let restantes =[]
//     let objeto = {}
//     while(listaDeTallas.size()>0){
//         aux = listaDeTallas.pop()
//         if(aux===talla){
//             tallasencontradas.push(aux)
//         }
//         else{
//             restantes.push(aux)  
//         }
//     }
//     //restantes = restantes.reverse()
//     while(restantes.length>=0){
//         aux = restantes.pop()
//         tallasrestante.push(aux)
//     }
//     objeto.pantalonesEncontrados = tallasencontradas
//     objeto.pantaloresRestantes = tallasrestante

//     return objeto;
// }

// let pila = new Stack();
// pila.push(37)
// pila.push(38)
// pila.push(38)
// pila.push(39)
// pila.push(41)
// pila.push(36)
// pila.push(41)
// pila.push(41)
// pila.push(37)
// pila.push(42)
// console.log(pila);
// console.log(apilarPantalones(pila,41));


// function consultarPreparacion(tragos) {
//     // Tu código aquí
//     return function(carta){
//         //Primero verificar si los solicitados están en la carta
//         let existe = 0
//         let preparaciones = []
//         for(let i = 0;i<tragos.length;i++){
//             for(let j=0;j<carta.length;j++){
//                 if(tragos[i].toUpperCase()===carta[j].nombre.toUpperCase()){
//                     existe++
//                     preparaciones.push("El "+carta[j].nombre+" se prepara con "+carta[j].preparacion)
//                 }
//             }
//         }
//         if(existe!==tragos.length){
//             return "Por favor, verifique los nombres de los tragos que quiere consultar"
//         }
//         else{
//             return preparaciones
//         }
//     }
// }

// let tragosPedidos= ["fernet","destornillador"]
// const carta = [
//     {nombre:"Fernet",preparacion:"Fernet y Coca"},
//     {nombre:"Gancia",preparacion:"Gancia y Sprite"},
//     {nombre:"Destornillador",preparacion:"Jugo de naranja y Vodka"}
// ]

// let prueba = consultarPreparacion(tragosPedidos)
// console.log(prueba(carta))


// console.log("fernet".toUpperCase());
// console.log("fernet".toUpperCase()==="FERNET");


// function atenderClientes(clientes) {
//     // Tu código aquí:
//     let clientesArr = Object.entries(clientes)
//     if (clientesArr.length===0) return {}
//     clientesArr.shift()
//     clientes = Object.fromEntries(clientesArr)
//     return atenderClientes(clientes)
// }

// let clientes={
//     1:'Franco',
//     2:'Maria',
//     3:'Alejo'
// }

// // console.log(atenderClientes(clientes))

// function encontrarMasCaros(tragos, precio) {
//     // Tu código aquí:
//     let auxTragos = tragos;
//     console.log(auxTragos.length);
//     if(auxTragos.length===0) return 0
//     let TragosEncontrados = []
//     let tragoSeleccionado;
//     let trago;
//     tragoSeleccionado = auxTragos.shift()
//     console.log(tragoSeleccionado.precio);
//     console.log(tragoSeleccionado);
//     console.log(precio);
    
    
//     // if(tragoSeleccionado.precio>=precio) {
        
//     //     // console.log('entre');
//     //     // TragosEncontrados.push(tragoSeleccionado)
//     // }
//     // console.log(TragosEncontrados[0]);
//     // TragosEncontrados.push(encontrarMasCaros(auxTragos,precio))
//     // return TragosEncontrados

//     // encontrarMasCaros(auxTragos,precio)
//     return tragoSeleccionado
// }

// let tragos = [
//     {nombre:'Whisky',precio:312},
//     {nombre:'Ron',precio:156},
//     {nombre:'Gin',precio:215},
//     {nombre:'Vino tinto',precio:100},
// ]

// console.log(encontrarMasCaros(tragos,200));

// console.log();

//function ordenarPeliculas(catalogo, nuevasPeliculas) {
    // Tu código aquí:
    //Primero crear un solo arreglo
    // for(let i=0;i<nuevasPeliculas.lenght;i++){
    //     catalogo.push(nuevasPeliculas[i])
    // }
    // console.log(catalogo);
    // if(catalogo.length<=1) return catalogo
    // let pivote = catalogo[Math.floor(Math.random()*catalogo.length)]
    // console.log(pivote);
    // let menores = []
    // let mayores = []
    // let arrpivote = []
    // for(let i = 0; i<catalogo.length; i++){
        
    // if(catalogo[i].año<pivote.año){
    //     menores.push(catalogo[i])
    // }
    // else if(catalogo[i].año>pivote.año){
    //     mayores.push(catalogo[i])
    // }
    // else if(catalogo[i].año===pivote.año){
    //     arrpivote.push(catalogo[i])
    // }
    // }
    // console.log(mayores);
    // console.log(menores);
    // console.log(arrpivote);
    // arr=[]
    // // // menores = quickSort(menores)
    // // if 
    // if (menores.length>=2) menores = ordenarPeliculas(menores,0)
    // if (mayores.length>=2) mayores = ordenarPeliculas(mayores,0)
    // catalogo = menores.concat(arrpivote).concat(mayores)
    // return catalogo;
    // for(let j=0;j<nuevasPeliculas.lenght;j++){
    //     catalogo.push(nuevasPeliculas[j])
    // }
    // if(catalogo.length<=1) return 
    // console.log(catalogo);
    // let pivote = catalogo[Math.floor(Math.random()*catalogo.length)]
    // let menores = []
    // let mayores = []
    // let arrpivote = []
    // for(let i = 0; i<catalogo.length; i++){
        
    // if(catalogo[i].año<pivote.año){
    //     menores.push(catalogo[i])
    // }
    // else if(catalogo[i].año>pivote.año){
    //     mayores.push(catalogo[i])
    // }
    // else if(catalogo[i].año===pivote.año){
    //     arrpivote.push(catalogo[i])
    // }
    // }
    // // catalogo=[]
    // if (menores.length>=2) menores = ordenarPeliculas(menores,0)
    // if (mayores.length>=2) mayores = ordenarPeliculas(mayores,0)
    // catalogo = menores.concat(arrpivote).concat(mayores)
    // return catalogo;
    // for(let i = 0; i<arr.length; i++){
        
    // if(arr[i]<pivote){
    //     menores.push(arr[i])
    // }
    // else if(arr[i]>pivote){
    //     mayores.push(arr[i])
    // }
    // else if(arr[i]===pivote){
    //     arrpivote.push(arr[i])
    // }
    // }
    
    // arr=[]
    // // // menores = quickSort(menores)
    // // if 
    // if (menores.length>=2) menores = quickSort(menores)
    // if (mayores.length>=2) mayores = quickSort(mayores)
    // arr = menores.concat(arrpivote).concat(mayores)
    // return arr;
//}


// let catalogo = [
//     {nombre: 'Avengers: La era de Ultrón',
//      año:2015,
//      genero: 'Fantansía/Aventura/Acción',
//      taquillera: true
//     },
//     {nombre: 'Toy story 3',
//      año: 2010,
//      genero: 'Infantil',
//      taquillera: true
//     }
// ]
// let nuevasPeliculas = [
//     {nombre: 'Sonic',
//      año:2012,
//      genero: 'Fantansía/Aventura/Acción',
//      taquillera: true
//     },

// ]

// console.log(nuevasPeliculas[0]);
// console.log(catalogo.push(nuevasPeliculas[0]));
// console.log(catalogo);
// console.log(ordenarPeliculas(catalogo,nuevasPeliculas));


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


// class Node {
//     constructor(valor) {
//       this.value = valor;
//       this.next = null;
//     }
//   }
  
//   class LinkedList {
//     constructor() {
//       this.head = null;
//     }
  
//     add(valor) {
//       var nuevoNodo = new Node(valor);
  
//       if (!this.head) {
//         this.head = nuevoNodo;
//       } else {
//         var tailActual = this.head;
//         while (tailActual.next !== null) {
//           tailActual = tailActual.next;
//         }
//         tailActual.next = nuevoNodo;
//       }
//     }
  
//     remove() {
//       if (!this.head) {
//         return undefined;
//       }
  
//       if (this.head.next === null) {
//         var unicoNodo = this.head;
//         this.head = null;
//         return unicoNodo.value;
//       }
  
//       var nodoActual = this.head.next;
//       var nodoPrevious = this.head;
//       while (nodoActual.next !== null) {
//         nodoPrevious = nodoActual;
//         nodoActual = nodoActual.next;
//       }
//       nodoPrevious.next = null;
//       return nodoActual.value;
//     }
  
//     search(arg) {
//       var nodoActual = this.head;
  
//       if (nodoActual === null) {
//         return null;
//       }
  
//       while (nodoActual !== null) {
//         if (typeof arg === "function") {
//           if (arg(nodoActual.value)) {
//             return nodoActual.value;
//           }
//         } else if (nodoActual.value === arg) {
//           return nodoActual.value;
//         }
//         nodoActual = nodoActual.next;
//       }
  
//       return null;
//     }
// }
// LinkedList.prototype.encontrarPedidoRepetido = function (nombre) {
//     // Tu código aquí:
//             var tailActual = this.head;
//             console.log(tailActual);
//             let repetidos = new LinkedList()
//             let arr=[]
//             let aux;
//             while(tailActual!==null){
//                 aux=tailActual.value;
//                 console.log(aux.nombre);
//                 if(nombre===aux.nombre){
//                     arr.push(aux)
//                 }
//                 tailActual = tailActual.next
//             } 
//             for(let i=0;i<arr.length; i++){
//                 repetidos.add(arr[i])
//             }
//             if(arr.length===0) return false
//             else return repetidos
            
           
// };
// //const estaRepetido = miArreglo.indexOf(elementoBuscado) !== miArreglo.lastIndexOf(elementoBuscado);
// let lista = new LinkedList()
// lista.add({nombre:'Franco',trago: 'Fernet'})
// lista.add({nombre:'Martin',trago: 'Gancia'})
// lista.add({nombre:'Franco',trago: 'Fernet'})
// console.log(lista);
// console.log(lista.encontrarPedidoRepetido('Ale'));

// LinkedList.prototype.sliceRooms = function(firstIndex, secondIndex) {
//     // Tu código aquí:
//         var tailActual = this.head;
//         let arr=[]
//         while(tailActual.next.value!==secondIndex){
//             console.log(tailActual);
//             if(tailActual.value===firstIndex){
//                 while(tailActual.next.value!==secondIndex){
//                 arr.push(tailActual.next.value)
//                 tailActual = tailActual.next
//             }
//         }
//             else{
//             tailActual = tailActual.next
//                     }
        
//         } 
//         let listaSlice = new LinkedList()
//         for(let i = 0; i<arr.length;i++){
//             listaSlice.add(arr[i])
//         }
//         return listaSlice;
// }

// let listaCuartos = new LinkedList()
// listaCuartos.add('Cocina')
// listaCuartos.add('Dormitorio')
// listaCuartos.add('Baño')
// listaCuartos.add('Living')
// listaCuartos.add('Garage')
// console.log(listaCuartos);
// console.log(listaCuartos.sliceRooms('Cocina','Garage'));


// class BinarySearchTree {
// 	constructor(valor) {
// 		this.value = valor;
// 		this.left = null;
// 		this.right = null;
// 	}

// 	insert(value) {
// 		if (value.nombre < this.value.nombre) {
// 			if (this.left === null) {
// 				var newTree = new BinarySearchTree(value);
// 				this.left = newTree;
// 			} else this.left.insert(value);
// 		} else {
// 			if (this.right === null) {
// 				var newTree = new BinarySearchTree(value);
// 				this.right = newTree;
// 			} else this.right.insert(value);
// 		}
// 	}
// }

// // const arbol = new BinarySearchTree({ nombre: "Camiseta", num: 13 });
// // arbol.insert({ nombre: "Zapato", num: 7 });
// // arbol.insert({ nombre: "Camiseta", num: 24 });
// // arbol.insert({ nombre: "Pollera", num: 6 });
// // arbol.insert({ nombre: "Zapato", num: 16 });
// // arbol.insert({ nombre: "Chaqueta", num: 27 });
// // arbol.insert({ nombre: "Chaqueta", num: 3 });
// // arbol.insert({ nombre: "Zapato", num: 45 });
// // arbol.insert({ nombre: "Zapato", num: 4 });

// // console.log(arbol);


// // BinarySearchTree.prototype.obtenerPrendas = function (prenda,arr=[]) {
// //     // Tu código aquí
// //     /*
// //         if(this.left && this.left.depthFirstForEach(cb,pedido)){} //Si el primero da true, se va a romper hasta que sea false
// //         //console.log(cb(this.root))
// //         cb(this.root)
// //         if(this.right && this.right.depthFirstForEach(cb,pedido)){} 
// // */
    
// //     if(this.left && this.left.obtenerPrendas(prenda,arr)){}
// //     if(this.value.nombre===prenda) arr.push(prenda) 
// //     if(this.right && this.right.obtenerPrendas(prenda,arr)){}

    
// //     return arr;
// // };

// // console.log(arbol.obtenerPrendas('Zapato'))
// const arbol = new BinarySearchTree({ nombre: "Gancia", precio: 400 });
// arbol.insert({ nombre: "Fernet", precio: 500 });
// arbol.insert({ nombre: "Agua", precio: 200 });
// arbol.insert({ nombre: "Malibu", precio: 400 });
// arbol.insert({ nombre: "Long Island", precio: 400 });
// arbol.insert({ nombre: "Martini", precio: 800 });
// arbol.insert({ nombre: "Tom Collins", precio: 1000 });
// arbol.insert({ nombre: "Bailey", precio: 900 });
// arbol.insert({ nombre: "Caipi", precio: 700 });
// console.log(arbol);

// /*
// else if(pedido==='pre-order'){
//         //root, izquierda, derecha
//         cb(this.root)
//         if(this.left && this.left.depthFirstForEach(cb,pedido)){} //Si el primero da true, se va a romper hasta que sea false
//         //console.log(cb(this.root))
//         if(this.right && this.right.depthFirstForEach(cb,pedido)){} 
//     }
// */
// BinarySearchTree.prototype.consultarTragos = function(efectivo,arr=[]) {
//     // Tu código aquí
//     console.log(this.value.precio);
//     if(this.value.precio<=efectivo) arr.push(this.value.nombre) 
//     if(this.left && this.left.consultarTragos(efectivo,arr)){}
   
//     if(this.right && this.right.consultarTragos(efectivo,arr)){}

//     return arr

// }

// console.log(arbol.consultarTragos(599));


// function encontrarMasCaros(tragos, precio,TragosEncontrados=[]) {
//     // Tu código aquí:
//     let auxTragos = tragos;
//     if(auxTragos.length===0) return 0
//     let tragoSeleccionado;
//     tragoSeleccionado = auxTragos.shift()
//     if(tragoSeleccionado.precio>=precio) {
//         TragosEncontrados.push(tragoSeleccionado)
//     }
//     encontrarMasCaros(auxTragos,precio,TragosEncontrados)
//     return TragosEncontrados
// }

// let tragos = [
//     {nombre:'Whisky',precio:312},
//     {nombre:'Ron',precio:156},
//     {nombre:'Gin',precio:215},
//     {nombre:'Vino tinto',precio:100},
// ]

// console.log(encontrarMasCaros(tragos,100));


class Node {
    constructor(valor) {
      this.value = valor;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(valor) {
      var nuevoNodo = new Node(valor);
  
      if (!this.head) {
        this.head = nuevoNodo;
      } else {
        var tailActual = this.head;
        while (tailActual.next !== null) {
          tailActual = tailActual.next;
        }
        tailActual.next = nuevoNodo;
      }
    }
  
    remove() {
      if (!this.head) {
        return undefined;
      }
  
      if (this.head.next === null) {
        var unicoNodo = this.head;
        this.head = null;
        return unicoNodo.value;
      }
  
      var nodoActual = this.head.next;
      var nodoPrevious = this.head;
      while (nodoActual.next !== null) {
        nodoPrevious = nodoActual;
        nodoActual = nodoActual.next;
      }
      nodoPrevious.next = null;
      return nodoActual.value;
    }
  
    search(arg) {
      var nodoActual = this.head;
  
      if (nodoActual === null) {
        return null;
      }
  
      while (nodoActual !== null) {
        if (typeof arg === "function") {
          if (arg(nodoActual.value)) {
            return nodoActual.value;
          }
        } else if (nodoActual.value === arg) {
          return nodoActual.value;
        }
        nodoActual = nodoActual.next;
      }
  
      return null;
    }
}

LinkedList.prototype.encontrarPeliculas = function(arg) {
        var tailActual = this.head;
        let arr=[]
        let lista = new LinkedList()
        while(tailActual.next!==null){
            if(tailActual.value===arg){
                lista.add(tailActual.value)
                tailActual = tailActual.next
            }
            else{
            tailActual = tailActual.next
            }
        
        } 
        return lista;
}

let lista = new LinkedList()
lista.add(2)
lista.add(4)
lista.add(6)
lista.add(7)
lista.add(3)
lista.add(3)
lista.add(4)
lista.add(1)
console.log(lista.encontrarPeliculas(4));
