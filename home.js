
	var bannerHeight = $(".banner").height();
	var containerPadding = parseFloat($(".container").css("padding-top"));
	var sidebarPadding = $(".sidebar").css("padding-top");

// when the page is smaller than this width, it changes into
// mobile version
var mobileWidth = 800;

// Returns true if window is less than mobile width
function isMobileWidth() {
	return $(window).width() <= mobileWidth;
}

function adjustPaddingTop() {
	// if mobile, padding-top is 25px
	// if non-mobile without sticky navbar, padding-top is 25px
	// if non-mobile with sticky navbar, padding-top is 25px + navbarHeight
	var adjustedPadding;
	
	if(!isMobileWidth()) {
		if($(window).scrollTop() > bannerHeight) {
			adjustedPadding = 75;
		} else {
		//console.log(navHeight);
		adjustedPadding = 25;
		}
	} else {
		adjustedPadding = containerPadding;
	}
	console.log(adjustedPadding);
	$(".container").css({"padding-top": adjustedPadding});
}

function pageIsMobile() {
	return $("#navigation").hasClass("mobile");
}

function pageIsNonMobile() {
	return $("#navigation").hasClass("nonMobile");
}

// If window size is small enough, make page mobile friendly
// If window size is large enough, make page non-mobile
// At < mobile width change to mobile class
function mobile() {
	console.log("check if mobile");
	// switch between mobile and nonmobile navbar
	if(isMobileWidth() && !pageIsMobile()) {
		//change class to mobile
		if(pageIsNonMobile) {
			$("#navigation").removeClass("nonMobile");
		}
		$("#navigation").addClass("mobile");
		// unstick navbar and adjust padding on container
		navStick();
		// Hide home image link in navbar and show text
		$("#homeImage").css({"display": "none"});
		$("#homeText").css({"display": "inline-block"});
		
	} else if(!isMobileWidth() && !pageIsNonMobile()) {
		// change class to nonMobile
		if(pageIsMobile) {
			$("#navigation").removeClass("mobile");
		}
		$("#navigation").addClass("nonMobile");
		// stick navbar and adjust padding on container
		navStick();
		// Show home image link in navbar and hide text
		$("#homeImage").css({"display": "inline-block"});
		$("#homeText").css({"display": "none"});
	}
}

function navStick() {
		// if page is nonmobile, nav bar sticks to top of page when scrolled
		if(!isMobileWidth()) {
			if($(window).scrollTop() > bannerHeight) {
				// toggle on fixed position of navbar
				$(".nav").css({"position": "fixed", "top": 0});
				
			} else if ($(window).scrollTop() <= bannerHeight) {
				//toggle off fixed position of navbar
				$(".nav").css({"position": "static"});
			}
	} else {
		$(".nav").css({"position": "static"});
	}
	adjustPaddingTop();
}

mobile();
$(document).ready( function() {
	// At < mobile width, changes to mobile class
	$(window).resize(mobile);
	$(window).scroll(navStick);
})
