let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu'); // Não precisa das chaves dentro da string
});

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu'); // Não precisa das chaves dentro da string
});
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu'); // Não precisa das chaves dentro da string
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

