const botaoCalcular = document.querySelector('#calcular');
const mostrarArea = document.querySelector('#mostrarArea');


botaoCalcular.addEventListener('click', ()=> {

    const raioCirculo = parseFloat(document.querySelector('#raioCirculo').value);
    const pi = 3.14159;
    const area = pi * Math.pow(raioCirculo, 2);

    if (isNaN(raioCirculo)) {
        mostrarArea.textContent = `Preencha os campos!`;

    } else {
        mostrarArea.textContent = `ÁREA = ${area.toFixed(3)}`;
    }
                
})
