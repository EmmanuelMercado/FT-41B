//IIFE
// (function(){
//     function resta(a,b) {
//         return a-b
//     }

//     window.resta = resta;
// })();


//Modulos con CommonJS
exports.resta = function (a, b) {
    return a - b
}

