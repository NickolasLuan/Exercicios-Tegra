const botaoCalcular = document.querySelector("#mostrar");
const resultado = document.querySelector("#resultado");

function classificacao() {

    const medidaGlicose = parseFloat(document.getElementById("medidaGlicose").value);

    if(isNaN(medidaGlicose)) {
        resultado.textContent = "Preencha os campos!";

    }else  if (medidaGlicose <= 100) {
        resultado.textContent = "Classificação: Normal";

    } else if (medidaGlicose > 100 && medidaGlicose <= 140) {
        resultado.textContent = "Classificação: Elevado";
        
    } else {
        resultado.textContent = "Classificação: Diabetes";
    }

}

botaoCalcular.addEventListener('click', classificacao);
        