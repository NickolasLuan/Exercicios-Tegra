const botaoCalcular = document.querySelector("#botaoCalcular");
const mostrarTroco = document.querySelector("#mostrarTroco");

botaoCalcular.addEventListener('click', ()=> {
    
    const precoUnitario = parseFloat(document.querySelector('#precoUnitario').value);
    const quantidadeComprada = parseFloat(document.querySelector('#qtdComprada').value);
    const dinheiroRecebido = parseFloat(document.querySelector('#dinheiroRecebido').value);
    const mostrarTroco = document.querySelector('#mostrarTroco');
    const troco = dinheiroRecebido - (precoUnitario * quantidadeComprada);
    const valorRestante = (precoUnitario * quantidadeComprada) - dinheiroRecebido ;
        
         //VALIDAÇÃO 
    if (dinheiroRecebido < precoUnitario * quantidadeComprada) {
         mostrarTroco.textContent = `Dinheiro insuficiente! Faltam ${valorRestante.toFixed(2)} REAIS!`;

    } else if (isNaN(precoUnitario) || isNaN(quantidadeComprada) || isNaN(dinheiroRecebido)) {
        mostrarTroco.textContent = `Preencha todos os campos!`

    } else {
        mostrarTroco.textContent = `TROCO =  R$ ${troco.toFixed(2)}`;
    }

});