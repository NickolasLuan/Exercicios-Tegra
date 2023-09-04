const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");


button.addEventListener('click', ()=> {

    const dataNascimento = document.querySelector("#dataNasc").value.split("/");
    const dia = parseInt(dataNascimento[0]);
    const mes = parseInt(dataNascimento [1]);
    let signo;

    const signos = {

        Aquário: (dia >= 21  && mes === 1) || (dia <= 18 && mes === 2),
        Peixes: (dia >= 19  && mes === 2) || (dia <= 20 && mes === 3),
        Áries: (dia >= 21  && mes === 3) || (dia <= 20 && mes === 4),
        Touro: (dia >= 21  && mes === 4) || (dia <= 20 && mes === 5),
        Gêmeos: (dia >= 21  && mes === 5) || (dia <= 20 && mes === 6),
        Câncer: (dia >= 21  && mes === 6) || (dia <= 22 && mes === 7),
        Leão: (dia >= 23  && mes === 7) || (dia <= 22 && mes === 8),
        Virgem: (dia >= 23  && mes === 8) || (dia <= 22 && mes === 9),
        Libra: (dia >= 23  && mes === 9) || (dia <= 22 && mes === 10),
        Escorpião: (dia >= 23  && mes === 10) || (dia <= 21 && mes === 11),
        Sagitário: (dia >= 22  && mes === 11) || (dia <= 21 && mes === 12),
        Capricórnio: (dia >= 22  && mes === 12) || (dia <= 20 && mes === 1)
    }
    

    for (let i in signos) {
        if (signos[i]) {
            signo = i;
        }
    }


    if (signo) {
        resultado.textContent = `Signo = ${signo}`;
    } else {
        resultado.textContent = "Insira a data corretamente. (dia/mês)";
    }
    
})
