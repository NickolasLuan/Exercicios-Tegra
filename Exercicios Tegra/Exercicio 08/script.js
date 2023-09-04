const botaoCalcular = document.getElementById("calcular");
const mostrarQuadrado = document.getElementById("mostrarQuadrado");
const mostrarTriangulo = document.getElementById("mostrarTriangulo");
const mostrarTrapezio = document.getElementById("mostrarTrapezio");

botaoCalcular.addEventListener('click', ()=> {

    const medidaA = parseFloat(document.getElementById("medidaA").value);
    const medidaB = parseFloat(document.getElementById("medidaB").value);
    const medidaC = parseFloat(document.getElementById("medidaC").value);

    const AreaQuadrado = Math.pow(medidaA, 2);
    const AreaTriangulo = medidaA * medidaB / 2;
    const AreaTrapezio = (medidaA + medidaB) * medidaC / 2;
            
    if (isNaN(medidaA) || isNaN(medidaB) || isNaN(medidaC)) {
        mostrarQuadrado.textContent = "Preencha todos os campos!"
        mostrarTriangulo.textContent = "";
        mostrarTrapezio.textContent = "";
    } else {
        mostrarQuadrado.textContent = `ÁREA DO QUADRADO = ${AreaQuadrado.toFixed(4)} cm²`;
        mostrarTriangulo.textContent = `ÁREA DO TRIÂNGULO = ${AreaTriangulo.toFixed(4)} cm²`;
        mostrarTrapezio.textContent = `ÁREA DO TRAPEZIO = ${AreaTrapezio.toFixed(4)} cm²`;
    }

})
