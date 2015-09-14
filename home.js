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
	
	if(!isMobileWidth() && $(".nav").hasClass("sticky")) {
		console.log($(".nav").height());
		adjustedPadding = containerPadding + parseFloat($(".nav").height());
	} else {
		adjustedPadding = containerPadding;
	}
	$(".container").css({"padding-top": adjustedPadding})
}

function pageIsMobile() {
	return $("#navigation").hasClass("mobile");
}

// If window size is small enough, make page mobile friendly
// If window size is large enough, make page non-mobile
// At < mobile width change to mobile class
function mobile() {
	console.log("check if mobile");
	// switch between mobile and nonmobile navbar
	if(isMobileWidth() && !pageIsMobile()) {
		// hide home image link and show text link
		$("#homeMobile").css({"display": "block"});
		$("#homeNonMobile").css({"display": "none"});
		
		//change classes to mobile
		$("#navigation").removeClass("nonMobile");
		$("#navigation").addClass("mobile");
		$("#currentPage").removeClass("currentPageNonMobile");
		$("#currentPage").addClass("currentPageMobile");
		
		// unstick navbar and adjust padding on container
		navStick();
		adjustPaddingTop();
		
	} else if(!isMobileWidth() && pageIsMobile()) {
		// show image link and hide text link
		$("#homeNonMobile").css({"display": "block"});
		$("#homeMobile").css({"display": "none"});
		
		// change classes to nonmobile
		$("#navigation").removeClass("mobile");
		$("#navigation").addClass("nonMobile");
		$("#currentPage").removeClass("currentPageMobile");
		$("#currentPage").addClass("currentPageNonMobile");
		navStick();
	}
}

// returns true if page is scrolled to top
function pageAtTop() {
	return $(window).scrollTop() == 0;
}

// returns true when navbar is stuck to very top of page
function navbarStuck() {
	return $(".nav").hasClass("sticky");
}

// toggle fixed position instead of updating top
function navStick() {
		// if page is nonmobile, nav bar sticks to top of page when scrolled
		if(!isMobileWidth()) {
			if($(window).scrollTop() > bannerHeight && !navbarStuck()) {
				// toggle on fixed position of navbar
				$(".nav").css({"position": "fixed", "top": 0});
				$(".nav").addClass("sticky");

			} else if ($(window).scrollTop() <= bannerHeight && navbarStuck()) {
				//toggle off fixed position of navbar
				$(".nav").css({"position": "static"});
				$(".nav").removeClass("sticky");
			}
	} else if($(".nav").hasClass("sticky")){
		$(".nav").css({"position": "static"});
		$(".nav").removeClass("sticky");
	}
	adjustPaddingTop();
}

mobile();
$(document).ready( function() {
	// At < mobile width, changes to mobile class
	$(window).resize(mobile);
	$(window).scroll(navStick);
})
