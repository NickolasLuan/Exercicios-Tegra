const botaoCalcular = document.querySelector('#calcular');
const mostrarConsumo = document.querySelector('#mostrarConsumo');

botaoCalcular.addEventListener('click', (pagina)=> {
            
    const distPercorrida = parseFloat(document.querySelector("#distPercorrida").value);
    const combustivelGasto = parseFloat(document.querySelector("#combustivelGasto").value);
    const consumoMedio = distPercorrida / combustivelGasto;

    if (isNaN(distPercorrida) || isNaN(consumoMedio)) {
        mostrarConsumo.textContent = "Preencha todos os campos!"
    } else {
        mostrarConsumo.textContent = `Consumo médio = ${consumoMedio.toFixed(3)}`;
    }           

})
