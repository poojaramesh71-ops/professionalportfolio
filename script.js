const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
menu.classList.toggle('bx-x');
navbar.classList.toggle('active');
});

const typed = new Typed('.multiple-text', {
strings: [
'Frontend Developer',
'Backend Developer',
'Web Developer'
],
typeSpeed:80,
backSpeed:80,
backDelay:1200,
loop:true
});
