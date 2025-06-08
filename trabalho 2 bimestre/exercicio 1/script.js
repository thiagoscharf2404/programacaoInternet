let LadoX = document.querySelector("#LadoX");
let LadoY = document.querySelector("#LadoY");
let LadoZ = document.querySelector("#LadoZ");
let resultado = document.querySelector("#resultado");
let Botao = document.querySelector("#Botao");

function verificarTriangulo() {
    let x = Number(LadoX.value);
    let y = Number(LadoY.value);
    let z = Number(LadoZ.value);

    if (x < y + z && y < x + z && z < x + y) {
        if (x === y && y === z) {
            resultado.textContent = "Triângulo Equilátero";
        } else if (x === y || y === z || x === z) {
            resultado.textContent = "Triângulo Isósceles";
        } else {
            resultado.textContent = "Triângulo Escaleno";
        }
    } else {
        resultado.textContent = "Não forma um triângulo";
    }
}

Botao.onclick = function() {
    verificarTriangulo();
};


