const botaoCalcular = document.querySelector('#calcular');

botaoCalcular.addEventListener('click', ()=> {

    const larguraTerreno = parseFloat(document.querySelector('#largura').value);
    const comprimentoTerreno = parseFloat(document.querySelector('#comprimento').value);
    const valorMetroQuadrado =parseFloat(document.querySelector('#valorMetroQuadrado').value);

    const areaTerreno = larguraTerreno * comprimentoTerreno;
    const precoTerreno = areaTerreno * valorMetroQuadrado;

    const mostrarAreaTerreno = document.querySelector('#mostrarAreaTerreno');
    const mostrarPrecoTerreno = document.querySelector('#mostrarPrecoTerreno');

    if(isNaN(larguraTerreno) || isNaN(comprimentoTerreno) || isNaN(valorMetroQuadrado)) {
        mostrarAreaTerreno.textContent = `Preencha todos os campos!`;
        mostrarPrecoTerreno.textContent = "";
        
    } else {
        mostrarAreaTerreno.textContent = `Área do terreno: ${areaTerreno.toFixed(2)} m²`;
        mostrarPrecoTerreno.textContent = `Preço do terreno: R$ ${precoTerreno.toFixed(2)}`;
    }       
})