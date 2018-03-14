var openMenuButton = document.querySelector('.js-show-nav-button');
var closeMenuButton = document.querySelector('.js-close-nav-button');
var nav = document.querySelector('.js-nav');
var body = document.body;
var overlay = document.querySelector('.js-overlay');

/*************************/

hideMobileNavOnResize();
toggleMobileNav();

/*************************/

function showMobileNav() {
	nav.classList.add('is-active');
	body.classList.add('is-overflow');
	overlay.classList.add('is-active');
}

function hideMobileNav() {
	nav.classList.remove('is-active');
	body.classList.remove('is-overflow');
	overlay.classList.remove('is-active');
}

function hideMobileNavOnResize() {
	window.addEventListener('resize', function() {
		let winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

		if (winWidth > 768 && nav.classList.contains('is-active')) {
			hideMobileNav();
		}
	});
}


function toggleMobileNav() {
	openMenuButton.addEventListener('click', function(e) {
		e.preventDefault();
		showMobileNav();
	});

	closeMenuButton.addEventListener('click', function(e) {
		e.preventDefault();
		hideMobileNav();
	});

	overlay.addEventListener('click', function() {
		hideMobileNav();
	});
}

