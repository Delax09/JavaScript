var fecha_hoy = new Date()

console.log(fecha_hoy)

var fecha_cumple = new Date(2002,2,8)

console.log(fecha_cumple)

console.log(fecha_hoy.getTime() > fecha_cumple.getTime())

var dia_nac = fecha_cumple.getDate()

var mes_nac = fecha_cumple.getMonth()

var annio_nac = fecha_cumple.getFullYear()

console.log(dia_nac)
console.log(mes_nac + 1)
console.log(annio_nac)