const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menulateral');

botaoMenu.addEventListener('click', ()=> {
    menu.classList.toggle('menulateral--ativo');
})