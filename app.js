// // Contenido de app.js 
// console.log("Hello World")


// // Esta es mi función que suma dos números
// const sum = (a,b) => {
//     return a + b
// }

// // Solo un registro en consola para nosotros
// console.log(sum(7,3))

// // Exporta la función para usarla en otros archivos 
// // (similar a la palabra clave "export" cuando se usa webpack)
// module.exports = { sum };


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 149.03;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.0072;
    return valueInPound; 
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };