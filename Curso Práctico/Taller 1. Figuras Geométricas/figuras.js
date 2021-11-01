// Cuadrado

function cuadrado(lado) {
    var area = lado * lado;
    var perimetro = lado * 4;
    return [area, perimetro];
}

function triangulo(base, altura) {
    var area = (base * altura) / 2;
    var perimetro = base * 3;
    return [area, perimetro];
}

function circulo(radio) {
    var area = Math.PI * (radio * radio);
    var perimetro = 2 * Math.PI * radio;
    return [area, perimetro];
}

// Cuadrado

console.group('Cuadrado')

    console.log(`El área del cuadrado es de ${cuadrado(10)[0]} unidades.`)
    console.log(`El perimetro del cuadrado es de ${cuadrado(10)[1]} unidades.`)

console.groupEnd()

// Triangulo

console.group('Triangulo')

    console.log(`El área del triangulo es de ${triangulo(10, 5)[0]} unidades.`)
    console.log(`El perimetro del triangulo es de ${triangulo(10, 5)[1]} unidades.`)

console.groupEnd()

// Circulo

console.group('Circulo')

    console.log(`El área del circulo es de ${circulo(10)[0].toFixed(2)} unidades.`)
    console.log(`El perimetro del circulo es de ${circulo(10)[1].toFixed(2)} unidades.`)

console.groupEnd()








