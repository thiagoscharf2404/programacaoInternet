let cargofunc = document.querySelector("#cargofunc");

let inserirSalario = document.querySelector("#inserirSalario");

let btCalc = document.querySelector("#btCalc");

let h3result = document.querySelector("#h3result");

let salario = document.querySelector("#salario");

let antigoSalario = document.querySelector("#antigoSalario");


// função especifica para o calculo da porcentagem salarial, ela vai comparar os cargos e setar as devidas porcentagens 
function calcSalario(){

    salarioA = Number(inserirSalario.value);

    cargo = cargofunc.value;

    if(cargo.toLowerCase() === "gerente"){
        return salarioA * 0.10

    }else if(cargo.toLowerCase() === "engenheiro"){
        return salarioA * 0.20

    }else if(cargo.toLowerCase() === "tecnico"){
       return salarioA * 0.30
    }

    
    

}

// Essa função vai modificar a pagina HTML, então vamos passar as variaveis apenas quando o botão for acionado, nao tem necessidade carregar antes. 
btCalc.onclick = function(){
    salarioA = Number(inserirSalario.value);
    let abc = salarioA + calcSalario();
    salario.innerHTML = abc
    antigoSalario.innerHTML = salarioA;
    h3result.innerHTML = calcSalario();
}