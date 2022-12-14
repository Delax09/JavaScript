// Una variable que contenga la lista de la compra (mínimo 5 elementos)
// Modifica la lista de la compra y añádele "Aceite de Girasol"
// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
var lista_compra = ["arroz", "leche", "jugo", "mantequilla", "queso", "pasta"]

lista_compra.push("aceite de girasol")

console.log(lista_compra)

for (x=0; x< lista_compra.length; x++){
    if (lista_compra[x] === "pasta"){
        lista_compra.pop()
    }
}

console.log(lista_compra)

/* 
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/

//1 - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
var peliculas = [
    {nombre: "Avengers End Game", director: "Pedro perez", fecha: new Date(2019,3,26)},
    {nombre: "John Wick 3", director: "Chad Stalheinks", fecha: new Date(2019,4,17)}, 
    {nombre: "Los picapiedras", director: "Fabian", fecha: new Date(2022,0,30)} 
]

//2 - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const peliculas_1ene = peliculas.filter(obj => {
    let ene = new Date(2010,0,1)
    if (obj.fecha > ene){
        console.log(obj.nombre)
        return true
    } else {
        console.log(obj.nombre)
        return false
    }
})

console.log(peliculas_1ene)

// 3 - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const lista_map = peliculas.map((valor, indice)=> `${indice+1} -  ${valor.director} `)

console.log(lista_map)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const lista_pel_map = peliculas.map((objeto, indice) => `${indice+1} ${objeto.nombre}`)


console.log(lista_pel_map)


