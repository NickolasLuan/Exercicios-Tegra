const botaoCalcular = document.querySelector('#calcular');
const mostrarPagamento = document.querySelector('#mostrarPagamento');

botaoCalcular.addEventListener('click', ()=> {

    const nomeFuncionario = document.querySelector('#nomeFuncionario').value;
    const valorHora = parseFloat(document.querySelector('#valorHora').value);
    const horasTrabalhadas = parseFloat(document.querySelector('#horasTrab').value);
    const pagamento = valorHora * horasTrabalhadas;

     if(isNaN(valorHora) || isNaN(horasTrabalhadas) ) {
        mostrarPagamento.textContent = "Preencha todos os campos!";
    } else {
        mostrarPagamento.textContent = `O pagamento para ${nomeFuncionario} deve ser ${pagamento.toFixed(2)}`;
    }
          
})
