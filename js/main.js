var scrollPos = 0,
	nav = document.getElementById("navbar"),
	navLogo = document.getElementById("nav-logo"),
	navTop = navLogo.offsetTop;

function scrollNav() {
	if (window.scrollY >= navTop) {
		nav.classList.add("nav-sticky");
		navLogo.classList.add("zero-height");
		document.body.style.paddingTop = nav.offsetHeight + 'px';
	} else {		
		nav.classList.remove("nav-sticky");
		navLogo.classList.remove("zero-height");	
		document.body.style.paddingTop = 0;
	}

	scrollPos = window.scrollY;
}

window.addEventListener("scroll", function() {requestAnimationFrame(scrollNav);});