const botaoCalcular = document.querySelector('#calcular');

botaoCalcular.addEventListener('click', ()=> {
    
    const nome1 = document.querySelector('#nome1').value;
    const nome2 = document.querySelector('#nome2').value;
    const idade1 = parseInt(document.querySelector('#idade1').value);
    const idade2 = parseInt(document.querySelector('#idade2').value);
    const media = (idade1 + idade2) / 2;
    const mostrarIdadeMedia = document.querySelector('#mostrarIdadeMedia');
                
    //Validação dos campos
    if (isNaN(idade1) || isNaN(idade2)  || nome1 === "" || nome2 === "") {
        mostrarIdadeMedia.textContent = "Preencha todos os campos!";
    } else {
        mostrarIdadeMedia.textContent = `A idade média de ${nome1} e ${nome2} é de ${media.toFixed(1)} anos!`
    }
    
})