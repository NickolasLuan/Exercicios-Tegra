const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");

button.addEventListener('click', ()=> {

    const numeroInicial = parseInt(document.querySelector("#numeroInicial").value);
    const numeroFinal = parseInt(document.querySelector("#numeroFinal").value);
    let soma = 0;

    for (let i = numeroInicial; i <= numeroFinal; i++) {
        soma = soma + i;
    }

    resultado.textContent = `Resultado = ${soma}`;
})