const botaoConverter = document.getElementById("converter");
const mostrar = document.getElementById("mostrar");
        
botaoConverter.addEventListener('click', ()=> {
            
    const duracaoSegundos = parseInt(document.getElementById("duracaoSegundos").value);
    const horas = Math.floor(duracaoSegundos / 3600);
    const minutos = Math.floor((duracaoSegundos % 3600) / 60);
    const segundos = (duracaoSegundos % 60) % 60;
            
    if(isNaN(duracaoSegundos)) {
        mostrar.textContent = "Preencha os campos!";
    } else {
        mostrar.textContent = `${horas}h ${minutos}min ${segundos}s`;
    }
            
})
