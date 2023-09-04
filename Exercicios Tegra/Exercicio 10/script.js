const botao = document.getElementById("botaoMostrar");
const mostrarNumero = document.getElementById("mostrarNumero");
        
botao.addEventListener('click', ()=> {

    const numero1 = parseInt(document.getElementById("primeiroValor").value);
    const numero2 = parseInt(document.getElementById("segundoValor").value);
    const numero3 = parseInt(document.getElementById("terceiroValor").value);
   
    if(isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        mostrarNumero.textContent = "Preencha corretamente!";
    } else {
        const menorNumero = Math.min(numero1,numero2,numero3);
        mostrarNumero.textContent = `MENOR = ${menorNumero}`;
    }
    
})