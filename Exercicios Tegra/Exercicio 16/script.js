const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");

button.addEventListener('click', ()=> {

    const distancia1 = parseFloat(document.querySelector("#dist1").value);
    const distancia2 = parseFloat(document.querySelector("#dist2").value);
    const distancia3 = parseFloat(document.querySelector("#dist3").value);
    const maiorDistancia = Math.max(distancia1,distancia2,distancia3);

    if(isNaN(distancia1) || isNaN(distancia2) || isNaN(distancia3)) {
        resultado.textContent = "Preencha os campos!";
    } else {
        resultado.textContent = `Maior distância = ${maiorDistancia}`;
    }
    
})

