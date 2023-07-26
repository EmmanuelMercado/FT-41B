// function factorear(num) {
//     // Factorear el número recibido como parámetro y devolver en un array
//     // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
//     // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
//     // Tu código:
//  //   let factorial = 
  
//   }

//   console.log(Math.sqrt(180));

// function esPrimo(numero) {
//     if (numero < 1) return false;
  
//     const limite = Math.sqrt(numero);
//     for (let i = 2; i <= limite; i++) {
//         console.log(numero);
//       if (numero % i === 0) {
        
//         return false;
//       }
//     }
//     return true;
//   }
  
//   function factorizarEnPrimos(numero) {
//     if (numero < 2) {
//       throw new Error('La función solo admite números enteros mayores o iguales a 2.');
//     }
  
//     const factoresPrimos = [];
  
//     for (let i = 2; i <= numero; i++) {
//       while (numero % i === 0) {
//         if (esPrimo(i)) {
//           factoresPrimos.push(i);
//         }
//         numero /= i;
//       }
//     }
  
//     return factoresPrimos;
//   }
  
//   // Ejemplo de uso:
//   const numero = 180;
//   const factoresPrimosDe36 = factorizarEnPrimos(numero);
//   console.log(factoresPrimosDe36); // Salida: [2, 2, 3, 3]
//   // Salida: [1, 2, 3, 4, 6, 9, 12, 18, 36]


console.log(180/2);
console.log(90/2);
console.log(45%2);
console.log(15/3);
console.log(5/5);


function factorear(num){
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
    return array
}

console.log(factorear(200));



function bubbleSort(arr) {
    
    
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
        break;
      }
    }
  }
  
  // Ejemplo de uso:
  const lista1 = [64, 34, 25, 12, 22, 11, 90];
  console.log("Lista original:", lista1);
  bubbleSort(lista1);
  console.log("Lista ordenada:", lista1);
   
  
  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentElement = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = currentElement;
    }
  }
  
  // Ejemplo de uso:
  const lista2 = [64, 34, 25, 12, 22, 11, 90];
  console.log("Lista original:", lista2);
  insertionSort(lista2);
  console.log("Lista ordenada:", lista2);
  
  function selectionSort(arr) {
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
  }
  
  // Ejemplo de uso:
  const lista = [15,10,20,40,5];
  console.log("Lista original:", lista);
  selectionSort(lista);
  console.log("Lista ordenada:", lista);
  
