
    let h1texto = document.querySelector("#h1texto");
    let inputTexto = document.querySelector("#inputTexto");
    let bttexto = document.querySelector("#bttexto");

    function trocarTexto(){
        let textoDigitado = inputTexto.value; //retornando o texto digitado no campo

        h1texto.textContent = textoDigitado; //alterando o texto do h1

    }

    bttexto.onclick = function(){
        trocarTexto();
    }