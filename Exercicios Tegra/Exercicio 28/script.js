const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");

button.addEventListener('click', ()=> {

    const valores = document.querySelector("#valores").value;
    const numeros = valores.split(",").map(Number);
    const menorNumero = Math.min(...numeros);
    const maiorNumero = Math.max(...numeros);
    
    resultado.textContent = `Menor = ${menorNumero} Maior =  ${maiorNumero}`;

}); 
