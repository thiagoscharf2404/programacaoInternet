let inputHoras = document.querySelector('#horas'); 
let resultado = document.querySelector('#resultado');
let botaoCalcular = document.querySelector('#botaoCalcula');
function calcularSalario() {
    let nivelSelecionadoInput = document.querySelector('input[name="nivel"]:checked');
    let valorHora = 0;
    let horasTexto = inputHoras.value;
    let horas = parseFloat(horasTexto);
    let mensagem = "";
    let nivelSelecionado;

    if (nivelSelecionadoInput) {
        nivelSelecionado = parseInt(nivelSelecionadoInput.value);
    }

    if (nivelSelecionado === 1) {
        valorHora = 12;
    }
    if (nivelSelecionado === 2) {
        valorHora = 17;
    }
    if (nivelSelecionado === 3) {
        valorHora = 25;
    }

    if (!horas || horas <= 0) {
        mensagem = "Por favor, insira um número válido de horas.";
    }

    if (valorHora > 0 && horas > 0) {
        mensagem = "Salário mensal: R$ " + (valorHora * horas * 4.5).toFixed(2);
    }

    resultado.innerText = mensagem;
}
botaoCalcular.onclick = function(){
    calcularSalario()
}