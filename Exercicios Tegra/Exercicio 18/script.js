const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");


const celsiusParaFahrenheit = (celsius)=> {
    return (1.8 * celsius) + 32;
}

const fahrenheitParaCelsius = (fahrenheit)=> {
    return (fahrenheit - 32) / 1.8;
}


function converterTemperatura() {
    const escala = document.querySelector("#escala").value.toUpperCase();
    const temperatura = parseFloat(document.querySelector("#temperatura").value);

    if (escala === "C") {
        const temperaturaFahrenheit = celsiusParaFahrenheit(temperatura);
        resultado.textContent = `Temperatura equivalente em Fahrenheit: ${temperaturaFahrenheit.toFixed(2)}`;

    } else if (escala === "F") {
        const temperaturaCelsius = fahrenheitParaCelsius(temperatura);
        resultado.textContent = `Temperatura equivalente em Celsius: ${temperaturaCelsius.toFixed(2)}`;
    }
}


button.addEventListener('click', converterTemperatura);