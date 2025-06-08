let precoInput = document.querySelector("#preco");
let botaoCalcular = document.querySelector("#botaoCalcular");
let resultado = document.querySelector("#resultado");

function calculo() {
    let preco = parseFloat(precoInput.value);
    let condicaoSelecionada = document.querySelector('input[name="condicao"]:checked');

    let condicao = condicaoSelecionada.value;

    let condicoes = {
        a: { fator: 0.90, mensagem: "À vista em dinheiro ou cheque (10% de desconto)" },
        b: { fator: 0.85, mensagem: "À vista no cartão de crédito (15% de desconto)" },
        c: { fator: 1.00, mensagem: "Em duas vezes (sem juros)" },
        d: { fator: 1.10, mensagem: "Em duas vezes com juros (10% de acréscimo)" }
    };

    let condicaoPagamento = condicoes[condicao];

    if (!condicaoPagamento) {
        resultado.textContent = "Condição de pagamento inválida.";
        return;
    }

    let valorFinal = preco * condicaoPagamento.fator;
    resultado.innerHTML = `${condicaoPagamento.mensagem}<br>
                            Valor a pagar: R$ ${valorFinal.toFixed(2).replace('.', ',')}`;
};

botaoCalcular.onclick = function(){
    calculo()
}