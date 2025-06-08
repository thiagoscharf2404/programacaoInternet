let anocarro = document.querySelector("#anocarro");

let valorcarro = document.querySelector("#valorcarro");

let btcalc = document.querySelector("#btcalc");

let h3result = document.querySelector("#h3result");

function calcImposto(){

    num1 = Number(anocarro.value);

    num2 = Number(valorcarro.value);


    if (num1 < 1990){
        let calc1 = num2 * 0.01;
        h3result.textContent = calc1;
        return;
    }else{
        let calc2 = num2 * 0.015
        h3result.textContent = calc2;
        return;
    }
}


btcalc.onclick = function(){
    calcImposto();
}
