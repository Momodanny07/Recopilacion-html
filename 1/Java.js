// Distancia en kilómetros
const distanciaKm = 2

// Tiempo en minutos
const tiempoMinutos = 5

// Convertir la distancia de kilómetros a metros
const distanciaMetros = distanciaKm * 1000

// Convertir el tiempo de minutos a segundos
const tiempoSegundos = tiempoMinutos * 60

// Calcular la velocidad en metros por segundo
const velocidadMetrosSegundo = distanciaMetros / tiempoSegundos

// Imprimir el resultado
console.log(
 'La velocidad del proyectil es de ' +
  velocidadMetrosSegundo +
  ' metros por segundo.'
)
