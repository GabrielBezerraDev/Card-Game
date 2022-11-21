let tagP = document.querySelectorAll('.acessar');

tagP.forEach(tagPs => {tagPs.addEventListener('click', () =>{
        console.log(tagPs);
        document.getElementById('menu').setAttribute('style','display:none');
        setTimeout(() => {
        let x = document.getElementById(`game-${tagPs.id}`)
        x.setAttribute('style','display:flex')
        setTimeout( () => {
            x.style.opacity = '1';
            x.style.transition = '5s';}, 2000)
        }, 2000)})
})