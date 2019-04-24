var scrollPos = 0,
	nav = document.getElementById("navbar"),
	navTop = nav.offsetTop;

function scrollNav() {
	if (window.scrollY >= navTop) {
		nav.classList.add("nav-sticky");
		document.body.style.paddingTop = nav.offsetHeight + 'px';
	} else {
		nav.classList.remove("nav-sticky");
		document.body.style.paddingTop = 0;
	}
	/*
	if (window.scrollY < scrollPos && nav.classList.contains("nav-sticky")) {
		nav.classList.add("is-hidden");
	} else {
		nav.classList.remove("is-hidden");
	}
	*/
	scrollPos = window.scrollY;
}

window.addEventListener("scroll", scrollNav);