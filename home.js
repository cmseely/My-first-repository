var bannerHeight = $(".banner").height();
var containerPadding = $(".container").css("padding-top");
var sidebarPadding = $(".sidebar").css("padding-top");

// when the page is smaller than this width, it changes into
// mobile version
var mobileWidth = 800;

// Returns true if window is less than mobile width
function isMobileWidth() {
	return $(window).width() < mobileWidth;
}

// If window size is small enough, make page mobile friendly
// If window size is large enough, make page non-mobile
// At < mobile width change to mobile class
function mobile() {

	// switch between mobile and nonmobile navbar
	if(isMobileWidth() && !$("#navigation").hasClass("mobile")) {
		// hide image link and show text link
		$("#currentPageMobile").css({"display": "block"});
		$("#currentPageNonMobile").css({"display": "none"});
		
		//change class to mobile
		$("#navigation").removeClass("nonMobile");
		$("#navigation").addClass("mobile");
		
	} else if(!isMobileWidth() && !$("#navigation").hasClass("nonMobile")) {
		// show image link and hide text link
		$("#currentPageNonMobile").css({"display": "block"});
		$("#currentPageMobile").css({"display": "none"});
		
		// change class to nonmobile
		$("#navigation").removeClass("mobile");
		$("#navigation").addClass("nonMobile");
	}	
}

// checks if page needs to be changed
$(window).resize(mobile);

$(document).ready( function() {
	// At < mobile width, changes to mobile class
	mobile();

	var navSticky = false;
	console.log(navSticky);
	$(window).scroll(function() {
		// if page is nonmobile, nav bar sticks to top of page when scrolled
		if(!isMobileWidth()) {
			//console.log(navSticky);
			// find height of nonmobile navbar and calculate adjusted padding
			var navHeight = parseFloat($(".nav").height());
			var adjustedContainerPadding = parseFloat(navHeight) + parseFloat(containerPadding);
			var adjustedSidebarPadding = parseFloat(navHeight) + parseFloat(sidebarPadding);

			// if the page is scrolled past the banner, the navbar becomes fixed
			// and the padding to the container and sidebars are adjusted accordingly
			console.log($(window).scrollTop());
			console.log(bannerHeight);
			if ($(window).scrollTop() == 0 ) {
				console.log("at top");
				$(".nav").css({"top": "auto"})
				navSticky = false;
			} else if ($(window).scrollTop() <= bannerHeight) {
				console.log("star stick");
				$(".nav").css({
					position: "fixed", top: bannerHeight - $(window).scrollTop()
				});
				$(".container").css({"padding-top": adjustedContainerPadding});
				$(".sidebar").css({"padding-top": adjustedSidebarPadding});
			}
			else if ($(window).scrollTop() < bannerHeight && navSticky == false){
				// if the page is scrolled to the banner again, padding and navbar
				// are reverted to their initial positions
				console.log("stick completely");
				$(".nav").css({
					"position": "initial", "top": 0
				});
				$(".container").css({"padding-top": containerPadding});
				$(".sidebar").css({"padding-top": sidebarPadding});
				
				navSticky = true;
			}
		}	
	})
})
