// Conversor de moneda
// Crea una función llamada conversorMonedas que tome una tasa de cambio (rate) y devuelva dos funciones: convertirDesdeUSD y 
// convertirDesdeOtraMoneda. convertirDesdeUSD debería tomar una cantidad en dólares y devolver su equivalente en la 
//otra moneda (utilizando la tasa de cambio proporcionada). convertirDesdeOtraMoneda debería hacer lo contrario, 
// tomar una cantidad en la otra moneda y devolver su equivalente en dólares.

function conversorMonedas(rate) {
    return {
        convertirDesdeUSD: function(Money){
            return Money*rate
        },
        convertirDesdeOtraMoneda: function(Money){
            return Money/rate
        }
    }    
}
const conversor = conversorMonedas(16.70);
console.log(conversor.convertirDesdeUSD(20));
console.log(conversor.convertirDesdeOtraMoneda(1670));