let codigoInput = document.querySelector("#codigo");
let quantidadeInput = document.querySelector("#quantidade");
let botaoCalcular = document.querySelector("#botaoCalcular");
let resultadoPedido = document.querySelector("#resultadoPedido");

//aprendi a fazer tabelas em python no ceep, assisti video de como fazer em js.:)
let cardapio = {
    100: { nome: "Cachorro Quente", preco: 11.00 },
    101: { nome: "Bauru", preco: 8.50 },
    102: { nome: "Misto Quente", preco: 8.00 },
    103: { nome: "Hambúrguer", preco: 9.00 },
    104: { nome: "Cheeseburguer", preco: 10.00 },
    105: { nome: "Refrigerante", preco: 4.50 }
};

function calcularPedido() {
    let codigo = Number(codigoInput.value);
    let quantidade = Number(quantidadeInput.value);

    let item = cardapio[codigo];

    let total = item.preco * quantidade;

    resultadoPedido.innerHTML = `Produto: ${item.nome}<br>
                                Quantidade: ${quantidade}<br>
                                Total a pagar: R$ ${total.toFixed(2).replace('.', ',')}`;
}

botaoCalcular.onclick = function() {
    calcularPedido();
};