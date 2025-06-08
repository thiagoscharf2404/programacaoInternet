let Troco = document.querySelector("#Troco");
let Num = document.querySelector("#Num");
let Num2 = document.querySelector("#Num2");
let Botao = document.querySelector("#Botao");

function troco(){
    let Caixa = Number (Num.value);

    let texto = Number (Num2.value);

    Troco.textContent = Caixa - texto;
}

Botao.onclick = function (){
    troco()
}