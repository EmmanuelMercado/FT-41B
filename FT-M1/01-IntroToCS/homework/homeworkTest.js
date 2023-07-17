function BinarioADecimal(num) {
    var arr = num.split("")
    var arrReverse = arr.reverse()
    var resultado = 0; 
    //console.log(arrReverse);
    for (var i = 0; i <= arrReverse.length - 1 ; i++){
        resultado += arrReverse[i] * Math.pow(2,i)
    }
    //console.log(resultado);
}

console.log(BinarioADecimal("11001"))

function DecimalABinario(num) {
    var newNumber = num;
    var resultado = "";
    while (newNumber>0){
        
        if (newNumber%2==0){
            resultado = '0' + resultado
        }
        else {
            resultado = '1' + resultado
        }
        newNumber = Math.floor(newNumber/2)
    }
    return resultado
}

console.log(DecimalABinario(25));