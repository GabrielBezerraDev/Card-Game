let tagP = document.querySelectorAll('.acessar');

tagP.forEach(tagPs => {tagPs.addEventListener('click', () =>{
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
    let jogador = document.querySelectorAll('.jogador')
    for (valores of jogador) {
        if(!valores.value){
            return alert('não pode existir jogadores sem nome')
        }
      jogadores.push(valores.value)
    }
    let transformando = JSON.stringify(jogadores)
    localStorage.setItem('nomeJogador', transformando);
    window.location ='htmlDasCartas.html';
    console.log(jogadores);
}
let legenda = document.getElementById('legenda')

document.getElementById('adicionar').addEventListener('mouseover', () => {
    legenda.removeAttribute('style')
    legenda.setAttribute('style','display:relative; font-size:10px;')

})

let adicionar = document.getElementById('adicionar')

adicionar.addEventListener('mouseout', () => {
   setTimeout(() => { legenda.setAttribute('style','display:none;')}, 1000)
})
let novosInputs = document.getElementById('novosInputs');
function adicionarInput() {
    let criarInput = document.createElement('input');
    criarInput.classList.add('jogador');
    criarInput.setAttribute('type','text');
    criarInput.setAttribute('placeholder','nome do jogador');
    novosInputs.appendChild(criarInput);
}
