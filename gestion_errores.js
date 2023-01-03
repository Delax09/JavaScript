const miFuncion = val => {
    if (typeof val === "number"){
        return val *2
    }
    throw new Error("El valor ingresado debe ser de tipo Numero")
} 

console.log(miFuncion(8))

let numero = 8
try {
    // ejecuta la linea de codigo si hay algun error va al catch y retorna el error
    console.log("Esta ejecutandose correctamente ")
    const doble = miFuncion(numero)
    console.log(doble)
} catch(e){
    console.log("Error!")
    // solo se ejecuta si hay algun error 
} finally{
    console.log("Ejecuto todo")
    // siempre se va a ejecutar 
}