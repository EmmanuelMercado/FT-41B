/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
    this.root = value
    this._length = 1
    this.left = null
    this.right = null
}

BinarySearchTree.prototype.insert = function(value){
    this._length++;
    if(value<this.root){
        //es menor, va a hacia la izquierda
        //Prehuntar si hay algo
        if(this.left){ //Se hace la recursión cuando ya hay un valor existente en la rama izq
            //Tengo algo a la izquierda
            this.left.insert(value)
            
        }
        else{
            //No tengo algo a la izquierda
            this.left = new BinarySearchTree(value)
            
        }
    }
    else if(value>this.root){
        //es mayor, va a hacia la derecha
        if(this.right){ //Se hace la recursión cuando ya hay un valor existente en la rama izq
            //Tengo algo a la izquierda
            this.right.insert(value)
        }
        else{
            //No tengo algo a la izquierda
            this.right = new BinarySearchTree(value)
            
        }
    }
}

BinarySearchTree.prototype.size=function(){
    return this._length;
}

const miArbolito = new BinarySearchTree(10)

miArbolito.insert(2);
miArbolito.insert(4);
miArbolito.insert(12);
miArbolito.insert(14);
miArbolito.insert(6);

console.log(miArbolito);
console.log(miArbolito.size());