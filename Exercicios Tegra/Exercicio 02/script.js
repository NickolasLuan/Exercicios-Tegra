const botaoCalcular = document.querySelector('#calcular');

botaoCalcular.addEventListener('click', ()=> {

    const baseRetangulo = parseFloat(document.querySelector('#base').value);
    const alturaRetangulo = parseFloat(document.querySelector('#altura').value);
    const mostrarArea = document.querySelector('#mostrarArea');
    const mostrarPerimetro = document.querySelector('#mostrarPerimetro');
    const mostrarDiagonal = document.querySelector('#mostrarDiagonal');

    const area = baseRetangulo * alturaRetangulo;
    const perimetro = 2 * (baseRetangulo + alturaRetangulo);
    const diagonal = Math.sqrt(baseRetangulo ** 2 + alturaRetangulo ** 2);
    
    if (isNaN(baseRetangulo) || isNaN(alturaRetangulo)) {
        mostrarArea.textContent = `Preencha todos os campos!`;
        mostrarPerimetro.textContent = "";
        mostrarDiagonal.textContent = "";
    } else {
        mostrarArea.textContent = `ÁREA = ${area.toFixed(4)}`;
        mostrarPerimetro.textContent = `PERIMETRO = ${perimetro.toFixed(4)}`;
        mostrarDiagonal.textContent = `DIAGONAL = ${diagonal.toFixed(4)}`;
    }        
})


