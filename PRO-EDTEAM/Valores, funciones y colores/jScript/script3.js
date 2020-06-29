//let age = parseInt(prompt('Dime tu edad'),10)
//
//if(age){
//    
//    if(age >= 18){
//        alert('Eres un adulto')
//    }else{
//        alert('Eres un bebé')
//    }
//
//} else {
//    age = parseInt(prompt('Tu edad debe ser un //número'),10)
//}

/*
//let = message = age >= 18
//            ? 'Eres mayor de edad'
//            : 'Eres un bebé'
//
//alert(message)*/

            /*Switch*/

//let answer = prompt('Escoge un número del 1 al 3')
//
//    switch (answer) {
//        case '1':
//            alert('Eres feliz')
//            break;
//        case '2':
//            alert('Eres extrovertido')
//            break;
//        case '3':
//            alert('Eres timido')
//            break;
//        default:
//            alert('por favor pon un numero del 1 //al 3')
//            break;
//    }

let answer = prompt(`Cual es la capital de Colombia?

a. Lima
b. Caracas
c. Bogotá
d. Rio
Escribe la letra de tu respuesta
`).toUpperCase().trim()

switch (answer) {
    case 'c':
        alert('Correcto!')
        break;
    case 'a':
        alert('Te equivocaste, intentalo de nuevo')
        break;
    default:
        alert('Te equivocaste, intentalo de nuevo')
        break;
}