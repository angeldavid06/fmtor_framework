const btn_menu_toggle = document.getElementById('btn-menu-toggle')
const btn_subir = document.getElementById('btn-subir')

const menu = document.getElementById('menu')
const contenido = document.getElementById('contenido')

btn_menu_toggle.addEventListener('click', () => {
    contenido.classList.toggle('hidde_menu')
    menu.classList.toggle('hidde_menu')
});