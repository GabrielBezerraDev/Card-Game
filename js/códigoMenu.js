let tagP = document.querySelectorAll('.acessar');

tagP.forEach(tagPs => {tagPs.addEventListener('click', () =>{
        console.log(tagPs);
        document.getElementById('menu1').setAttribute('style','display:none');
        setTimeout(() => {
        let menus = document.getElementById(`game-${tagPs.id}`)
        menus.setAttribute('style','display:flex')
        setTimeout( () => {
            menus.style.opacity = '1';
            menus.style.transition = '2s';
        }, 500)
        }, 500)})
})

function jogar() {
    let jogadores = []
    let jogador = document.getElementById('jogador')
    jogadores.push(jogador.value);
    console.log(jogadores);
    let transformando = JSON.stringify(jogadores)
    localStorage.setItem('nomeJogador', transformando);
    window.location ='htmlDasCartas.html';
}
