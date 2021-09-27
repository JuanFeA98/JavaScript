// Cuadrado

console.group('Cuadrado')
let ladoCuadrado = parseInt(prompt('Cuando mide cada lado del cuadrado?'))
console.log(`Cada lado mide ${ladoCuadrado} unidades.`)

let perimetroCuadrado = ladoCuadrado * 4
console.log(`El perimetro del cuadrado es de ${perimetroCuadrado} unidades.`)

let areaCuadrado = ladoCuadrado**2
console.log(`El área del cuadrado es de ${areaCuadrado} unidades cuadradas.`)
console.groupEnd()
// let cuadrado = document.getElementById('Cuadrado')
// cuadrado.innerHTML=ladoCuadrado

// Triangulo 9:16

console.group('Triángulo')
let baseTriangulo = parseInt(prompt('Cuanto mide la base del triangulo?'))
console.log(`La base del triangulo mide ${baseTriangulo} unidades.`)

let ladoTriangulo = parseInt(prompt('Cuanto mide uno de los lados del triangulos?'))
let ladoTriangulo2 =  ladoTriangulo

let alturaTriangulo = Math.sqrt(ladoTriangulo**2 - (baseTriangulo/2)**2)

console.log(`Los otros lados del triangulo miden ${baseTriangulo} y ${ladoTriangulo2} unidades.`)

let perimetroTriangulo = baseTriangulo + ladoTriangulo + ladoTriangulo2
console.log(`El perimetro del triangulo es de ${perimetroTriangulo} unidades.`)

let areaTriangulo = (baseTriangulo * alturaTriangulo)/2 
console.log(`El área del triangulo es de ${areaTriangulo.toFixed(2)} unidades cuadradas.`)
console.groupEnd()

// Circulo 

let lado_circulo













