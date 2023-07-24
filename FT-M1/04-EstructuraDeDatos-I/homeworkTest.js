// nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
// Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

// Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
            
function nFibonacci(n) {
    //Primer 0
    //Segundo 1
    if (n<=0) return 0
    else if (n===1) return 1

    else return nFibonacci(n - 1) + nFibonacci(n - 2);
  }
//1ra iteración
// n=7
// return nfibonacci(7-1) + nFibonacci(7-2)
// Nfibonacci(6) + Nfibonacci(5)
// return nfibonacci(6-1) + nFibonacci(6-2) +  return nfibonacci(5-1) + nFibonacci(5-2)
// Nfibonacci(5) + Nfibonacci(4) + 

console.log(nFibonacci(7)); 


