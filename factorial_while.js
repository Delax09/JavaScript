// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

var factorial = 10
var cont = 1
var aux = 1
var aux2=1
while (cont <= factorial){
    aux = aux2 * aux
    cont ++
    aux2++
}
console.log(aux)