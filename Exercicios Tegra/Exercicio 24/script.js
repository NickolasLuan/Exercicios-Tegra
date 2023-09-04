const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");
  
function compararNumeros(a,b) {if(a ==b) return 0; if(a < b) return -1 ; if(a > b) return 1;}


button.addEventListener('click', ()=> {

    const numerosInt= document.querySelector("#numerosInt").value;
    const numeros = numerosInt.split(",").map(Number).sort(compararNumeros);
    const numerosOrdenados = numeros.join(', ');
    resultado.textContent = `Números ordenados = ${numerosOrdenados}`;

}); 
