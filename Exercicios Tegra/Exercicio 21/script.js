const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");

button.addEventListener('click', ()=> {

    const valorX = parseInt(document.querySelector("#valorX").value);
    const ArrayPares = [];

    for(let i = 1; i <= valorX; i++) {
        if (i % 2 === 0) {
            ArrayPares.push(i);
        }
    }
    
    const numerosPares = ArrayPares.join(" , ");
    resultado.textContent = `Números pares = ${numerosPares}`;
})

