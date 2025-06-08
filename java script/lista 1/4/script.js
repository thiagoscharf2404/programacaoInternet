let Resultado = document.querySelector("#Resultado");
let Numero1 = document.querySelector("#Numero1");
let Numero2 = document.querySelector("#Numero2");
let Numero3 = document.querySelector("#Numero3");
let Botao = document.querySelector("#Botao");

function calculo(){
    let Num1 = Number(Numero1.value);
    let Num2 = Number(Numero2.value);
    let Num3 = Number(Numero3.value);
    
    let MediaAritmetica = (Num1 + Num2 + Num3) /3;
    let MediaPonderada = (Num1 * 3 + Num2 * 2 + Num3 * 5) / (3 + 2 + 5);
    let Soma = MediaAritmetica + MediaPonderada;
    let MediadasMedias = Soma / 2;

    Resultado.textContent =
        "MediaAritmetica: " + MediaAritmetica.toFixed(2) +
        " | MediaPonderada: " + MediaPonderada.toFixed(2) +
        " | Soma: " + Soma.toFixed(2) +
        " | MediadasMedias: " + MediadasMedias.toFixed(2);
}

Botao.onclick = function (){
    calculo()
}
