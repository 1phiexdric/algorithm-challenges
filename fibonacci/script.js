// solucion iterativa de fibonacci
// function fibonacci(n){
//     let a = 0
//     let b = 1
//     let temp;
//     let fibonacci = [a, b]
//     for(let i = 0; i < n; i++){
//         temp = a + b;
//         a = b // toma el valor de la suma anterior 'b'
//         b = temp// toma el valor de la suma
//         fibonacci.push(temp)
//     }
//     return fibonacci
// }

// console.log(fibonacci(15));

// solucion recursiva
function fibonacciRecursivo(n) {                                                             
if (n <= 1) {                                                                              
    return n;                                                                                 
  }                                                                                           
  return fibonacciRecursivo(n-1) + fibonacciRecursivo(n - 2);                            
} 

console.log(fibonacciRecursivo(3));