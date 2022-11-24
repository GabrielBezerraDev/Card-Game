let carta = document.querySelectorAll('.carta')
let inicial = document.getElementById('telaInicial')
let costa = document.querySelectorAll('.costa')
let principal = document.getElementById('mexe')
let placarJogador;


let mexe = document.getElementById('mexe')
let cartas = [carta[0],carta[1],carta[2],carta[3],carta[4]];
let costas = [costa[0],costa[1],costa[2],costa[3],costa[4]];
function start() {
    document.getElementById('numero').innerHTML = cartas.length;
    placarJogador = document.getElementById('placarJogador')
    let aleatorio = Math.floor(Math.random()*cartas.length);
    let resultado = cartas[aleatorio];
    let mostra = [inicial.style.opacity = '0', inicial.style.transition = '1s', 
    principal.style.transform ='translateY(500px)', resultado.style.transform ='translateY(500px)' ,
    resultado.style.display = 'block']
    for (let i = 0; i < mostra.length; i++) {
         mostra[i];
    }

    setTimeout(() =>{
        mexe.style.display = 'block';
        placarJogador.style.display = 'flex';
    }, 1000)

    setTimeout(function () {
        inicial.style.display ='none';
        principal.style.display ='block';
        principal.style.transition = '2.5s';
        placarJogador.style.transition = '3s';
        placarJogador.style.transform = 'translateX(0px)';
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

let nomeJogador;
let numeroDeJogadores = 0 ;
(function() {
    nomeJogador = JSON.parse(localStorage.getItem('nomeJogador'));
    for (let i = 0; i < nomeJogador.length; i++) {
        numeroDeJogadores++
        let nomesAbaixo = document.getElementById('nomesAbaixo');
        let paragrafo = document.createElement('p');
        nomesAbaixo.appendChild(paragrafo);
        paragrafo.setAttribute('id',`paragrafo${i}`);
        let escreverParagrado = document.getElementById(`paragrafo${i}`);
        escreverParagrado.innerHTML = `Jogador ${numeroDeJogadores}º: ${nomeJogador[i]}`;

    }
})()





