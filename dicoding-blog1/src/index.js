import './styles/main.css';
import './styles/responsive.css';

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('body');

hamburgerButtonElement.addEventListener('click', event => {
    drawerElement.classList.toggle('open');
    event.stopPropagation();
})

mainElement.addEventListener('clik', event => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
})