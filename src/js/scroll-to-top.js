import { ScrollTo } from 'scroll-to-position';

/*************************/

var backToTop = document.querySelector('.js-up');

/*************************/

showButton();
scrollToTop()

/*************************/


function showButton() {
	window.addEventListener('scroll', function() {
		if ( window.pageYOffset > 200 || document.documentElement.scrollTop > 200 ) {
			backToTop.classList.add('is-visible');
		} else {
			backToTop.classList.remove('is-visible');
		}
	});
}

function scrollToTop() {
	backToTop.addEventListener('click', function(e) {
		e.preventDefault();
		ScrollTo([0, 0], {
 			duration: [300, 500]
		});
	});
}

