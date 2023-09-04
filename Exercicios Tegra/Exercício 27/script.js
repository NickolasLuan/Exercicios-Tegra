const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");

button.addEventListener('click', ()=> {

    const palavra = document.querySelector("#palavra").value.toLowerCase();
    const palavraReversa = palavra.split("").reverse().join('');
    console.log(palavraReversa);

    if (palavra === palavraReversa) {
        resultado.textContent = "É palíndroma.";
    } else {
        resultado.textContent = "Não é palíndroma.";
    }

})