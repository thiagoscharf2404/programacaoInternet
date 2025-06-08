let Ingredientes = document.querySelector("#Ingredientes");
let Somar = document.querySelector("#Somar");
let Resultado = document.querySelector("#Resultado");

function Quantidade(){
let pessoas = Number (Ingredientes.value);

if (pessoas <= 0) {
    Resultado.textContent = "quantidade de pessoas:";
    return;
}

let ovos = (pessoas * 2);
let queijo = (pessoas * 50);

Resultado.textContent = `Voce vai precisar de ${ovos} ovos e ${queijo}g de queijos.`;
}

Somar.onclick = function(){
    Quantidade();
}