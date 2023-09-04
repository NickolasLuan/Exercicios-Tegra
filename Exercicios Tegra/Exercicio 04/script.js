const botaoCalcular = document.querySelector('#calcular');

botaoCalcular.addEventListener('click', ()=> {

    const precoUnitario = parseFloat(document.querySelector('#precoUnitario').value);
    const quantidadeComprada = parseFloat(document.querySelector('#qtdComprada').value);
    const dinheiroRecebido = parseFloat(document.querySelector('#dinheiroRecebido').value);
    const mostrarTroco = document.querySelector('#mostrarTroco');
    const troco = dinheiroRecebido - (precoUnitario * quantidadeComprada);

 //VALIDAÇÃO 
    if (dinheiroRecebido < precoUnitario * quantidadeComprada) {
        mostrarTroco.textContent = `Você não tem dinheiro suficiente!`;

    } else if (isNaN(precoUnitario) || isNaN(quantidadeComprada) || isNaN(dinheiroRecebido)) {
        mostrarTroco.textContent = `Preencha todos os campos!`
        
    } else {
        mostrarTroco.textContent = `TROCO =  R$ ${troco.toFixed(2)}`;
    }
    
})
