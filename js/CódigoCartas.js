let carta = document.querySelectorAll('.carta')
let inicial = document.getElementById('telaInicial')
let costa = document.querySelectorAll('.costa')
let principal = document.getElementById('mexe')



function player() {
    let nomeJogador = JSON.parse(localStorage.getItem('nomeJogador'));
    document.getElementById('player').innerHTML = `${nomeJogador} `
}
player()

let cartas = [carta[0],carta[1],carta[2],carta[3],carta[4]];
let costas = [costa[0],costa[1],costa[2],costa[3],costa[4]];
function start() {
    document.getElementById('numero').innerHTML = cartas.length;
    let aleatorio = Math.floor(Math.random()*cartas.length);
    let resultado = cartas[aleatorio];
    let mostra = [inicial.style.opacity = '0', inicial.style.transition = '1s', 
    principal.style.transform ='translateY(500px)', resultado.style.transform ='translateY(500px)' ,
    resultado.style.display = 'block']
    for (let i = 0; i < mostra.length; i++) {
         mostra[i];
    }

    setTimeout(function () {
        inicial.style.display ='none';
        principal.style.display ='block';
        principal.style.transition = '2.5s';
        principal.style.transform = 'translateY(0px)';
        resultado.style.transform = 'translateY(0px)';
    }, 1200)
}


function virar () {
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].style.transform = 'rotateY(180deg)';
        costas[i].style.transform = "rotateY(180deg)";
    }
}




