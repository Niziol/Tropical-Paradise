const navHidden = document.querySelector('.nav-hidden');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav-hidden__item');

const handleNav = () => {
	navHidden.classList.toggle('nav-hidden--active');

	allNavItems.forEach((navItem) => {
		navItem.addEventListener('click', () => {
			navHidden.classList.remove('nav-hidden--active');
		});
	});

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((navItem) => {
		navItem.classList.toggle('nav-items-animation');
		navItem.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

const deleteNavItemsAnimation = () => {
	allNavItems.forEach((navItem) => {
		navItem.classList.remove('nav-items-animation');
	});
};

Array.from(allNavItems).forEach((navItem) => {
	navItem.addEventListener('click', deleteNavItemsAnimation);
});

navBtn.addEventListener('click', handleNav);
