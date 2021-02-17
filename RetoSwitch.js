
var Piedra = "Piedra"
var Papel = "Papel"
var Tijera = "Tijera"






var resultado = function(user, cpu){
    user: "Tijera"
    cpu:"Papel"
    switch (user != cpu) {
        case (user === Piedra && cpu === Tijera) || 
             (user === Tjera && cpu === Papel) ||
             (user === Papel && cpu === Piedra):
            console.log("Ganaste")
            break;
        case(user === cpu):
             console.log("Empate")

        default:
            console.log("Perdiste")
            break;
    }
}

console.log(resultado)