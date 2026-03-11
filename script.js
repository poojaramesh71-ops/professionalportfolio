let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
menu.classList.toggle('bx-x');
navbar.classList.toggle('active');
};

new Typed('.multiple-text', {
strings: [
'Frontend Developer',
'Backend Developer',
'Web Developer'
],
typeSpeed: 80,
backSpeed: 80,
backDelay: 1200,
loop: true
});
