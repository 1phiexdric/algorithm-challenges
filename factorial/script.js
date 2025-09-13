// function factorial(n){
//     if(n <= 1){
//         return 1
//     }
//     return n * factorial(n-1)
// }
// console.log(factorial(5))

// let string = "racecar"

// function isBalanced(string){
//     let segundaMitad;
//     let mitad = Math.floor(string.length /2)
//     if(string.length % 2 == 0){
//         segundaMitad = string.slice(mitad, string.length)
//     }else{
//         segundaMitad = string.slice(mitad+1, string.length)
//     }
//     let primeraMitad = string.slice(0, mitad)
//     console.log(primeraMitad, segundaMitad)
//     const vocales1 = contarVocales(primeraMitad)
//     const vocales2 = contarVocales(segundaMitad)
//     return vocales1 == vocales2
// }

// function contarVocales(str){
//     const coincidencias = str.match(/[aeiou]/gi);
//     return coincidencias ? coincidencias.length : 0
// }

// console.log(isBalanced(string))
function valordeletra(caracter){
    let abecedario = "ABCDEFGHIJKLMNOPQRSTUVWQYZ";
    let partida = 10;
    let indice = abecedario.indexOf(caracter.toUpperCase());
    return indice + partida;
}
function isNumeric(str){
    return /^\d+$/.test(str);
}
function isValidNumber(n, base) {
    let result;
    for(let numero of n){
        if(isNumeric(numero)){
            result = numero
        }else{
            result = valordeletra(numero)
        }
        if(result >= base){
            return false
        }
    }
    
        return true
}