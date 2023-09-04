const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");

const numeros1 = ["Zero", "Um", "Dois", "Treze", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez", "Onze", "Doze", "Treze", "Quatorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove"];
const numeros2 = ["", "", "Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];

button.addEventListener('click', () => {
    const numero = parseInt(document.querySelector("#numero").value);

    if (numero < 0 || numero > 99) {
        resultado.textContent = "Digite um número de 0 a 99";
    } else if (numero < 20) {
        resultado.textContent = `Número por extenso: ${numeros1[numero]}`;
    } else {
        const unidade = numero % 10;
        const dezena = Math.floor(numero / 10);

        if (unidade === 0) {
          resultado.textContent = `Número por extenso: ${numeros2[dezena]}`;
      } else {
          resultado.textContent = `Número por extenso: ${numeros2[dezena]} e ${numeros1[unidade]}`;
      }
    }
  });
