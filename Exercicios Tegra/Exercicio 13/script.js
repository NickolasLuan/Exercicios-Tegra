const botaoCalcular = document.querySelector("#botaoCalcular");
const resultado = document.querySelector("#resultado");

botaoCalcular.addEventListener('click', ()=> {
           
    const quantidadeMinutos = parseInt(document.getElementById("qtdMinutos").value);
    const minutosPlano = 100;
    const planoBasico = 50.00;
    const minutosExcedentes  = quantidadeMinutos - minutosPlano;
            
    if(isNaN(quantidadeMinutos)) {
        resultado.textContent = "Preencha os campos!";

    } else if (quantidadeMinutos < minutosPlano) {
        resultado.textContent = `Valor a pagar = R$ ${planoBasico.toFixed(2)}`

    } else {
        const valorExcedente = minutosExcedentes * 2;
        const valorFinal = planoBasico + valorExcedente;
        resultado.textContent = `Valor a pagar = R$ ${valorFinal.toFixed(2)}`;
    }
        
});
        