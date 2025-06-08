let Resultado = document.querySelector("#Resultado");
let Valor = document.querySelector("#Valor");
let Qtd = document.querySelector("#Qtd");
let Botao = document.querySelector("#Botao");

function quilo() {
    let vlr = Number (Valor.value);
    let qtd = Number (Qtd.value);
    Resultado.textContent = vlr * qtd;
}

Botao.onclick = function(){
    quilo();
}