const button = document.querySelector("#botaoMostrar");
const resultado = document.querySelector("#resultado");
const mostrarNota = document.querySelector("#mostrarNota");

button.addEventListener('click', ()=> {
           
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const notaFinal = nota1 + nota2;

    if(isNaN(nota1) || isNaN(nota2)) {
        resultado.textContent = "Insira as notas!";
        mostrarNota.textContent = "";

    } else if(notaFinal >= 60) {
        mostrarNota.textContent = `NOTA FINAL = ${notaFinal.toFixed(1)}`;
        resultado.textContent = "APROVADO :)"

    } else {
        mostrarNota.textContent = `NOTA FINAL = ${notaFinal.toFixed(1)}`;
        resultado.textContent = "REPROVADO :(";
    }
          
});