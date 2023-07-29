'use strict'
// No cambies los nombres de las funciones.

function quickSort(arr) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(arr.length<=1) return arr
    let pivote = arr[Math.floor(Math.random()*arr.length)]
    let menores = []
    let mayores = []
    let arrpivote = []

    for(let i = 0; i<arr.length; i++){
        
    if(arr[i]<pivote){
        menores.push(arr[i])
    }
    else if(arr[i]>pivote){
        mayores.push(arr[i])
    }
    else if(arr[i]===pivote){
        arrpivote.push(arr[i])
    }
    }
    
    arr=[]
    // // menores = quickSort(menores)
    // if 
    if (menores.length>=2) menores = quickSort(menores)
    if (mayores.length>=2) mayores = quickSort(mayores)
    arr = menores.concat(arrpivote).concat(mayores)
    return arr;
}

function mergeSort(array) {
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

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
