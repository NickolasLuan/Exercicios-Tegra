const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");

function verificarMultiplo() {

    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    
    if(isNaN(numero1) || isNaN(numero2)) {
        resultado.textContent = "Preencha os campos!";

    } else if(numero1 % numero2 === 0 || numero2 % numero1  === 0) {
        resultado.textContent = "São múltiplos.";
        
    } else {
        resultado.textContent = "Não são múltiplos.";
    }
      
}

button.addEventListener('click', verificarMultiplo);