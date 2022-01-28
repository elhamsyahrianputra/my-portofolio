const toggle = document.querySelector('.navbar .navbar-item .navbar-toggle button a');
const html = document.querySelector('html');
toggle.addEventListener('click', function() {
	if (toggle.className === 'bi bi-sun') {
		toggle.className = 'bi bi-moon';
		html.dataset.themeMode = 'dark';
	} else {
		toggle.className = 'bi bi-sun';
		html.dataset.themeMode = 'light';
	}
});