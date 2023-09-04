const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");
const resultadoX2 = document.querySelector("#resultadoX2");

function calcularRaiz() {
    const coeficienteA = parseFloat(document.querySelector("#coeficienteA").value);
    const coeficienteB = parseFloat(document.querySelector("#coeficienteB").value);
    const coeficienteC = parseFloat(document.querySelector("#coeficienteC").value);

    const delta = Math.pow(coeficienteB, 2) - 4 * coeficienteA * coeficienteC;
    const x1 = ((-coeficienteB + Math.sqrt(delta)) / (2 * coeficienteA)).toFixed(4);
    const x2 = ((-coeficienteB - Math.sqrt(delta)) / (2 * coeficienteA)).toFixed(4);

    if(delta < 0) {
        resultado.textContent = "Esta equação não possui raízes reais.";
        resultadoX2.textContent = "";
    } else {
        resultado.textContent = `X1 = ${x1}`;
        resultadoX2.textContent = `X2 = ${x2}`;
    }
}

button.addEventListener('click', calcularRaiz);