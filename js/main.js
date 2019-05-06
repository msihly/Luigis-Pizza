var scrollPos = 0,
	nav = document.getElementById("navbar"),
	navLogo = document.getElementById("nav-logo"),
    navTop = navLogo.offsetTop,
    activeMenuTab = document.getElementsByClassName("menu-tab active")[0],
    activeMenuContent = document.getElementsByClassName("menu-content active")[0];

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

function formSubmit(event) {
    event.preventDefault();
    document.getElementById(this.dataset.submit).classList.remove("hidden");
    this.parentNode.classList.add("hidden");
}

function changeTab() {
    activeMenuTab.classList.remove("active");
    activeMenuContent.classList.remove("active");
    activeMenuTab = this;
    activeMenuContent = document.getElementById(this.dataset.content);
    activeMenuTab.classList.add("active");
    activeMenuContent.classList.add("active");
}

/*
function addZero(num) {
    if (num < 10) {num = "0" + num;}
    return num;
}

function populateTime(el, startHours, startMins, endHours, endMins, interval) {
    var startTime = new Date(),
        endTime = new Date();
    startTime.setHours(startHours, startMins);
    endTime.setHours(endHours, endMins);
    for (let i = startTime.getTime(); i < endTime.getTime(); i += interval ) {  // i += interval does not work. Need a date modification method.
        let option = document.createElement("option"),
            formattedTime = i.getHours() + ":" + addZero(i.getMinutes());
        option.textContent = formattedTime;
        option.value = formattedTime;
        el.appendChild(option);
    }
}
*/

document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy-load"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy-load");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }

    var menuTabList = document.getElementsByClassName("menu-tab");

    for (let i = 0; i < menuTabList.length; i++) {menuTabList[i].addEventListener("click", changeTab);}
    document.getElementById("reservation-form").addEventListener("submit", formSubmit);
    document.getElementById("contact-form").addEventListener("submit", formSubmit);

    var selectTime = document.getElementById("resTime"),
        timeOptions = ["7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"];

    for (let i = 0; i < timeOptions.length; i++) {
        var option = document.createElement("option");
        option.textContent = timeOptions[i];
        option.value = timeOptions[i];
        selectTime.appendChild(option);
    }
    
   // populateTime(document.getElementById("resTime"), 7, 00, 9, 30, 30);
});

window.addEventListener("scroll", function() {requestAnimationFrame(scrollNav);});