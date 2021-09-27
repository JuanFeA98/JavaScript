// Cuadrado

let ladoCuadrado = parseInt(prompt('Cuando mide cada lado del cuadrado?'))
console.log(`Cada lado mide ${ladoCuadrado} unidades.`)

let perimetroCuadrado = ladoCuadrado * 4
console.log(`El perimetro del cuadrado es de ${perimetroCuadrado} unidades.`)

let areaCuadrado = ladoCuadrado**2
console.log(`El área del cuadrado es de ${areaCuadrado} unidades cuadradas.`)

// let cuadrado = document.getElementById('Cuadrado')
// cuadrado.innerHTML=ladoCuadrado

// Triangulo 9:16

let baseTriangulo = parseInt(prompt('Cuanto mide la base del triangulo?'))
console.log(`La base del triangulo mide ${baseTriangulo} unidades.`)

let ladoTriangulo = parseInt(prompt('Cuanto mide uno de los lados del triangulos?'))
let lado2Triangulo =  10

let alturaTriangulo = Math.sqrt(ladoTriangulo**2 - (baseTriangulo/2)**2)

console.log(Math.sqrt(alturaTriangulo))

console.log(`Los otros lados del triangulo miden ${baseTriangulo} y ${lado2Triangulo} unidades.`)

let perimetroTriangulo = baseTriangulo + ladoTriangulo + lado2Triangulo
console.log(`El perimetro del triangulo es de ${perimetroTriangulo} unidades.`)

let areaTriangulo = (baseTriangulo * alturaTriangulo)/2 
console.log(`El área del triangulo es de ${areaTriangulo} unidades cuadradas.`)

// Circulo 

let lado_circulo













