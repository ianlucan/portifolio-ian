// typewriter

function typewriter (elemento){
    const textoArray = elemento.innerText.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra , 75 * i)
    });
}
const titulo = document.querySelector('.typewriter-h1');
typewriter(titulo);

typewriter(document.querySelector('.typewriter-p'))

// Sidebar

var hamburguer = document.querySelector(".button-menu")

hamburguer.addEventListener("click", function (){
    document.querySelector(".sidebar").classList.toggle("show-menu");
    document.querySelector(".button-menu").classList.toggle("show-menu");
    document.getElementById("x").classList.toggle("fa-x");
});

// About me

function iniciaModal (modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'fechar'){
                modal.classList.remove('mostrar');
            }
        });
    }
}

const sobre = document.querySelector('.sobre');
sobre.addEventListener('click', () => iniciaModal('about-me'));

