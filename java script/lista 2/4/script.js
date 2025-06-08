let Sabor1 = document.querySelector("#Sabor1");
let Sabor2 = document.querySelector("#Sabor2");
let Sabor3 = document.querySelector("#Sabor3");
let Sabor4 = document.querySelector("#Sabor4");
let Refrigerantes = document.querySelector("#Refrigerantes");
let Botao = document.querySelector("#Botao");
let Resposta = document.querySelector("#Resposta");

function Sabores() {
    let S1 = Sabor1.value;
    let S2 = Sabor2.value;
    let S3 = Sabor3.value;
    let S4 = Sabor4.value;
    let Refri = Number(Refrigerantes.value);

    let total = 4 * 12 + Refri * 7;

    Resposta.textContent = "Sabores escolhidos: " + S1 + ", " + S2 + ", " + S3 + ", " + S4 + ". ";
    Resposta.textContent += "Refrigerantes: " + Refri + ". ";
    Resposta.textContent += "Total a pagar: R$ " + total.toFixed(2) + ".";

}

Botao.onclick = Sabores;
