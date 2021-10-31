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

// Triangulo 

console.group('Triángulo')
let baseTriangulo = parseInt(prompt('Cuanto mide la base del triangulo?'))
console.log(`La base del triangulo mide ${baseTriangulo} unidades.`)

let ladoTriangulo = parseInt(prompt('Cuanto mide uno de los lados del triangulos?'))
let ladoTriangulo2 =  ladoTriangulo

let alturaTriangulo = Math.sqrt(ladoTriangulo**2 - (baseTriangulo/2)**2)

console.log(`La altura del triangulo es de ${alturaTriangulo.toFixed(2)} unidades`)
console.log(`Los otros lados del triangulo miden ${ladoTriangulo} unidades cada uno.`)

let perimetroTriangulo = baseTriangulo + ladoTriangulo + ladoTriangulo2
console.log(`El perimetro del triangulo es de ${perimetroTriangulo} unidades.`)

let areaTriangulo = (baseTriangulo * alturaTriangulo)/2 
console.log(`El área del triangulo es de ${areaTriangulo.toFixed(2)} unidades cuadradas.`)
console.groupEnd()

// Circulo

let radioCirculo = parseInt(prompt('Cuánto mide el radio del circulo?'))

let areaCirculo = Math.PI * (radioCirculo**2)
let perimetroCirculo = 2 * Math.PI * radioCirculo

console.group('Circulo')

console.log(`El área del circulo es de ${areaCirculo.toFixed(2)} unidades`)
console.log(`El perimetro del circulo es de ${perimetroCirculo.toFixed(2)} unidades`)

console.groupEnd()









