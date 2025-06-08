let saldoInput = document.querySelector("#saldo");
let botaoCalcular = document.querySelector("#botaoCalcular");
let resultadoCredito = document.querySelector("#resultadoCredito");

function calcularCredito() {
    let saldo = Number(saldoInput.value);

    let percentual = 0;


    if (saldo <= 200) {
        mensagem = "Nenhum crédito disponível.";
    } else if (saldo <= 400) {
        percentual = 0.2;
    } else if (saldo <= 600) {
        percentual = 0.3;
    } else {
        percentual = 0.4;
    }

    let credito = saldo * percentual;

    resultadoCredito.innerHTML = `Saldo médio: R$ ${saldo.toFixed(2).replace('.', ',')}<br>
                                Crédito concedido: R$ ${credito.toFixed(2).replace('.', ',')}`;
}

botaoCalcular.onclick = function() {
    calcularCredito();
};