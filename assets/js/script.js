const themeToggle = document.querySelector('.navbar .navbar-item .navbar-toggle button a');
const html = document.querySelector('html');
themeToggle.addEventListener('click', function() {
	if (themeToggle.className === 'bi bi-sun') {
		themeToggle.className = 'bi bi-moon';
		html.dataset.themeMode = 'dark';
	} else {
		themeToggle.className = 'bi bi-sun';
		html.dataset.themeMode = 'light';
	}
});



const menuToggle = document.querySelector('.menu-toggle');
const navLink = document.querySelector('.navbar .navbar-item:nth-child(2)');

menuToggle.addEventListener('click', function() {
	menuToggle.classList.toggle('menu-toggle-animation');
	if (menuToggle.classList.contains('menu-toggle-animation')) {
		navLink.style.right = 0;
	} else {
		navLink.style.right = '-60%';
	}
});
