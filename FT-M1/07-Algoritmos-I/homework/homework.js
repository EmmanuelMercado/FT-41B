'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factor = 2
    let array = [1]
    console.log('llego aquí');
    while(num!==1){
        if(num%factor===0){
            console.log(num);
            console.log(factor);
            array.push(factor)
            num=num/factor
        }
        else{
            factor++;
        }
    }
    return array;

}

function bubbleSort(arr) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < arr.length; i++) {
    let cambios = false;
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Intercambiar los elementos si están en el orden incorrecto
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          cambios = true;
        }
      }
  
      // Si no hubo cambios en esta iteración, la lista ya está ordenada
      // y podemos salir del bucle externo antes de recorrer todo el arreglo
      if (!cambios) {
        return arr
        break;
        
      }
    }
}


function insertionSort(arr) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentElement;
  }
  return arr;
}


function selectionSort(arr) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Intercambiar el elemento más pequeño con el primer elemento de la parte no ordenada
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
