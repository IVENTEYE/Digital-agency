$(function () {
	$('.header-slider').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 8000,
		arrows: true,
		prevArrow: $('.header-slider__arrow-prev'),
		nextArrow: $('.header-slider__arrow-next')
	});
	$('.quotes-slider').slick({
		arrows: false,
		dots: true
	});
});


const menu = document.querySelector('.menu-block__icon'),
 	  links = document.querySelectorAll('a[href*="#"]');
let menuButton = document.querySelector('.header-nav__menu'),
	fallingMenu = document.querySelector('.header-nav__menu-falling'),
	items = document.querySelector('.menu');
	

let newsTab = function() {
	let tabNav = document.querySelectorAll('.news-card'),
		tabInfo = document.querySelectorAll('.news-card__hover'),
		tabName;

	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav);
	});

	function selectTabNav() {
		tabNav.forEach(item => {
			item.classList.remove('active');
		});
		this.classList.add('active');
		tabName = this.getAttribute('data-news-tab');
		selectTabInfo(tabName);
	}

	function selectTabInfo(tabName) {
		tabInfo.forEach(item => {
			item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
		});
	}
}

newsTab();

let mTab = function () {
	let tabNav = document.querySelectorAll('.items-products'),
		tabInfo = document.querySelectorAll('.items-products__hover'),
		tabName;

	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav);
	});

	function selectTabNav() {
		tabNav.forEach(item => {
			item.classList.remove('active');
		});
		this.classList.add('active');
		tabName = this.getAttribute('data-mobile-tab');
		selectTabInfo(tabName);
	}

	function selectTabInfo(tabName) {
		tabInfo.forEach(item => {
			item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
		});
	}
}

mTab();

let tab = function () {
	let tabNav = document.querySelectorAll('.tabs-items'),
		tabInfo = document.querySelectorAll('.tabs-info'),
		tabName;

	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav);
	});

	function selectTabNav() {
		tabNav.forEach(item => {
			item.classList.remove('active');
		});
		this.classList.add('active');
		tabName = this.getAttribute('data-tab-name');
		selectTabInfo(tabName);
	}

	function selectTabInfo(tabName) {
		tabInfo.forEach(item => {
			item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
		});
	}
}

tab();

for (let link of links) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const blockId = link.getAttribute('href');
      document.querySelector('' + blockId).scrollIntoView({
        behavior: 'smooth', 
        block: 'start'
      });
    });
  }

menuButton.addEventListener('click', (e) => {
	menu.classList.toggle('active');
	fallingMenu.classList.toggle('fall');
});

document.addEventListener('click', (e) => {
	if (!e.target.closest('.header-nav__menu')) {
		menu.classList.remove('active');
		fallingMenu.classList.remove('fall');
	}
});

window.addEventListener('resize', function () {
	adaptive_function();
});

function adaptiveMenu(w, h) {
	if (w > 640) {
		if (!document.querySelector('.news-card__items-7').classList.contains('done')) {
			document.querySelector('.news-card__items-7').classList.add('done');
			document.querySelector('.news-card__item-image--5').appendChild(document.querySelector('.news-card__items-7'));
		}
	} else {
		if (document.querySelector('.news-card__items-7').classList.contains('done')) {
			document.querySelector('.news-card__items-7').classList.remove('done');
			document.querySelector('.news-card-7').appendChild(document.querySelector('.news-card__items-7'));
		}
	}
	if (w > 1023) {
		if (document.querySelector('.news-card__items-7').classList.contains('done')) {
			document.querySelector('.news-card__items-7').classList.remove('done');
			document.querySelector('.news-card-7').appendChild(document.querySelector('.news-card__items-7'));
		}
	}
}

function adaptive_function() {
	let w = window.screen.width;
	let h = window.screen.height;
	adaptiveMenu(w, h);
}

adaptive_function();