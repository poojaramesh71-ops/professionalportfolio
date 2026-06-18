let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
menu.classList.toggle('bx-x');
navbar.classList.toggle('active');
};

document.querySelectorAll('.navbar a').forEach(link => {
link.addEventListener('click', () => {
menu.classList.remove('bx-x');
navbar.classList.remove('active');
});
});

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
