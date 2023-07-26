//Clase con Daina
function mergeSort(array) { //9,7,3,1,5,2,6
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
  
    //okey probemos ahora

    if(array.length<2) return array //Caso de corte: que el támaño del array sea 1 
    const mitad = Math.floor(array.length/2)
    let left =  array.slice(0,mitad)//Parte el arreglo [9,7,3] **El último número no lo incluye
    let right = array.slice(mitad)//Parte el arreglo [1,5,2,6] **El último número no lo incluye, si yo quiero todo no le pongo el segundo arg
    array=[]//
    
    left = mergeSort(left)
    console.log(left);
    right = mergeSort(right)
    console.log(right);

    while(left.length && right.length){
        if(left[0] < right[0]){
            array.push(left.shift())
            console.log(array);
        }
        else{
            array.push(right.shift())
            console.log(array);
        }
    }

    array=array.concat(left,right)
    console.log(array);

    return array;
  }

  let arr = [9,7,3,1,5,2,6]
  console.log(mergeSort(arr));