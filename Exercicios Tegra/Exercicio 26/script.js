const button = document.querySelector("#button");
const resultadoVogais = document.querySelector("#resultadoVogais");
const resultadoConsoantes = document.querySelector("#resultadoConsoantes");

const vogais = ["a","e","i","o","u"]
const consoantes = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];


button.addEventListener('click', ()=> {

    const palavra = document.querySelector("#palavra").value.toLowerCase();
    let quantidadeVogais = 0;
    let quantidadeConsoantes = 0;

    for (let i = 0; i < palavra.length; i++) {
        const letra = palavra[i];
        
        if (vogais.includes(letra)) {
            quantidadeVogais = quantidadeVogais + 1
        } else {
            quantidadeConsoantes = quantidadeConsoantes + 1;
        }
    }
    
    resultadoVogais.textContent = `Vogais = ${quantidadeVogais}`;
    resultadoConsoantes.textContent = `Consoantes = ${quantidadeConsoantes}`;

})