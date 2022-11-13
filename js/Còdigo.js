let carta = document.querySelectorAll('.carta')
let inicial = document.getElementById('telaInicial')
let costa = document.querySelectorAll('.costa')
let principal = document.getElementById('mexe')


let cartas = [carta[0],carta[1],carta[2],carta[3],carta[4]];
function teste() {
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


function virar() {
    carta[0].style.transform = 'rotateY(180deg)';
    costa[0].style.transform = "rotateY(180deg)";

}

function virar2() {
    carta[1].style.transform = 'rotateY(180deg)';
    costa[1].style.transform = "rotateY(180deg)";

}

function virar3() {
    carta[2].style.transform = 'rotateY(180deg)';
    costa[2].style.transform = "rotateY(180deg)";

}

function virar4() {
    carta[3].style.transform = 'rotateY(180deg)';
    costa[3].style.transform = "rotateY(180deg)";

}

function virar5() {
    carta[4].style.transform = 'rotateY(180deg)';
    costa[4].style.transform = "rotateY(180deg)";

}


