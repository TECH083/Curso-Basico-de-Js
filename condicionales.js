var edad = 18;



if (edad === 18) {
    console.log("Puedes votar, sera tu primera votación")
} else if (edad < 18) {
    console.log("Puedes votar de Nuevo")
} else {
    console.log("Aun no puedes votar")
}


// Condicional Ternario

// condition ? true : false

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if (user != cpu){
        if (
		(user === op1 && cpu === op3) || 
		(user === op2 && cpu === op1) || 
		(user === op3 && cpu === op2) 
){
            console.log("el usuario GANO")
        }
        else{
            console.log("La CPU Gano!!")
        }
    }
    else if(user === cpu){
        console.log("Empate")
    }
};

    console.log(resultado)




