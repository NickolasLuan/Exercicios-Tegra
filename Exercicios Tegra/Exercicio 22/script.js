const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");

function mostrarTabuada() {

    const numeroTabuada = parseInt(document.querySelector("#numeroTabuada").value);
    let tabuada = "";

    if(isNaN(numeroTabuada)) {
        resultado.textContent = "Preencha os campos!";
    } else {
        for (let i = 1; i <= 10; i++) {
        tabuada += numeroTabuada + "x" + i + "= " + numeroTabuada * i + "<br>";
        resultado.innerHTML = tabuada;
        }
    }
    
}

button.addEventListener('click', mostrarTabuada);