//Clase con Daina

function BinarySearchTree(value){
    this.root = value;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.insert = function(value){
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


const miArbolito = new BinarySearchTree(5)
console.log(miArbolito);

console.log(miArbolito.insert(2));
console.log(miArbolito);
console.log(miArbolito.insert(1));
console.log(miArbolito);
console.log(miArbolito.insert(3));
console.log(miArbolito);
console.log(miArbolito.insert(8));
console.log(miArbolito);


//DFS
let array=[]
function cb (root){
    console.log(array);
    array.push(root)
    return array
}
BinarySearchTree.prototype.depthFirstForEach = function(cb,pedido){
    //pedido >>> 'in-order'
    //pedido >>> 'pre-order' root, izquierda, derecha
    //pedido >>> 'post-order' 
    //cb fn(root){
    //let array =[]
    //array.push(root)
    //}

    if(pedido==='in-order' || pedido===undefined){
        //Izquierda->Nodo->Derecha
        if(this.left && this.left.depthFirstForEach(cb,pedido)){} //Si el primero da true, se va a romper hasta que sea false
        //console.log(cb(this.root))
        cb(this.root)
        if(this.right && this.right.depthFirstForEach(cb,pedido)){} 
    }
    else if(pedido==='pre-order'){
        //root, izquierda, derecha
        cb(this.root)
        if(this.left && this.left.depthFirstForEach(cb,pedido)){} //Si el primero da true, se va a romper hasta que sea false
        //console.log(cb(this.root))
        if(this.right && this.right.depthFirstForEach(cb,pedido)){} 
    }
    else if(pedido==='post-order'){
        //izquierda Derecha Nodo
        
        if(this.left && this.left.depthFirstForEach(cb,pedido)){} //Si el primero da true, se va a romper hasta que sea false
        //console.log(cb(this.root))
        if(this.right && this.right.depthFirstForEach(cb,pedido)){} 
        cb(this.root)
    }
}

console.log(miArbolito.depthFirstForEach(cb,'post-order'))
console.log(array);
