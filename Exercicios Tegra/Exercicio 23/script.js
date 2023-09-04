const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");

button.addEventListener('click', ()=> {

    const numero1 = parseInt(document.querySelector("#numero1").value);
    const numero2 = parseInt(document.querySelector("#numero2").value);
    let soma = 0;

    for (let i = numero1; i < numero2; i++) {
        if (i % 2 != 0) {
            soma = soma + i;
        }

        resultado.textContent = `Soma dos ímpares = ${soma}`;
    }    

    
})