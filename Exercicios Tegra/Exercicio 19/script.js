const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");
const mostrarAumento = document.querySelector("#aumento");
const mostrarPorcentagem = document.querySelector("#porcentagem");

function aumentoSalario() {

    const salario = parseFloat(document.querySelector("#salarioAtual").value);
    let porcentagem;

    if(salario <= 999.00) {
        porcentagem = 20;
    } else if(salario >= 1000.00 && salario <= 2999.00) {
        porcentagem = 15;
    } else if (salario >= 3000.00 && salario <= 7999.00) {
        porcentagem = 10;
    } else {
        porcentagem = 5;
    }

    const aumento = (salario * porcentagem) / 100;
    const novoSalario = salario + aumento;

    resultado.textContent = `Novo salário = ${novoSalario.toFixed(2)}`;
    mostrarAumento.textContent = `Aumento = R$ ${aumento.toFixed(2)}`;
    mostrarPorcentagem.textContent = `Porcentagem = ${porcentagem} %`;
     
}

button.addEventListener('click', aumentoSalario);