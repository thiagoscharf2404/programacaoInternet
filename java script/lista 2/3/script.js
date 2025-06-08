let Num1 = document.querySelector("#Num1");
let Num2 = document.querySelector("#Num2");
let Botao = document.querySelector("#Botao");
let Resultado = document.querySelector("#Resultado");

function Calcular(){
     let numero = Number(Num1.value);
     let numero2 = Number(Num2.value);

     let soma = (numero + numero2);
     let subtraçao = (numero - numero2);
     let multiplicaçao = (numero * numero2);
     let divisao = (numero / numero2);

     Resultado.innerHTML = `Soma: ${soma} <br> Subtração: ${subtraçao} <br> Multiplicação: ${multiplicaçao} <br> Divisão: ${divisao}`;
}

Botao.onclick = function(){
    Calcular();
}