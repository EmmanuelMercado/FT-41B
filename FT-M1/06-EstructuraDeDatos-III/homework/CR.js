//CR con Feli 

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
   this.value = value
   this.left = null
   this.right = null
   //this.size = 1;
}

BinarySearchTree.prototype.insert = function(arg){
    //arg -> 9
    if(arg<this.value){
        //Se va a mandar a la izquierda
        //Primero hay que verificar si hay espacio disponible
        if(this.left){//Hay algo ahí?
            this.left.insert(arg)
        }
        //this.size++;
        this.left = new BinarySearchTree(arg)
    }
    else if(arg>this.value){
        if(this.right){//Hay algo ahí?
            this.right.insert(arg)
        }
        //this.size++;
        this.right = new BinarySearchTree(arg)
    }
}

BinarySearchTree.prototype.size=function(){
    //return this.size
    let count = 1
    if(this.left) count += this.left.size()
    if(this.right) count += this.right.size()
    return count;
}

BinarySearchTree.prototype.contains=function(target){
    //target ->8
    if (this.value===target) return true
    if(target<this.value){
        if(this.left){
            return this.left.contains(target)
        }
        return false
    }
    else if(target>this.value){
        if(this.right){
            return this.right.contains(target)
        }
        return false
    }
    
}

BinarySearchTree.prototype.depthFirstForEach = function(){
    
}


const instanciaArbol = new BinarySearchTree(8)
console.log(instanciaArbol);
console.log(instanciaArbol.size());
instanciaArbol.insert(9)
console.log(instanciaArbol);
console.log(instanciaArbol.size());
console.log(instanciaArbol.contains(9));