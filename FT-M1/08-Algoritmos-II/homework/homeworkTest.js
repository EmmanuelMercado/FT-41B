//Quick sort.
/*
1.- Elegir un número al azar que será el pivote
[15,10,20,40,5]
let pivote = arr[Math.floor(Math.random()*arr.length)]

2.- Separar a un lado los menores y al otro los mayores
let arr = [15,10,20,40,5]
let pivote = arr[Math.floor(Math.random()*arr.length)]
let menores = []
let mayores = []
let arrpivote = []
console.log(pivote);
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

console.log(menores);
console.log(mayores);
console.log(arrpivote);

*/

let arreglo= [15,10,20,40,5]
//let arreglo= [15,5,9,8,10]

function quickSort(arr){
    
    if(arr.length===1) return arr
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

console.log(quickSort(arreglo))


