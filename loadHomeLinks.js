// when the page is smaller than this width, it changes into
// mobile version
var mobileWidth = 800;

// Returns true if window is less than mobile width
function isMobileWidth() {
	return $(window).width() <= mobileWidth;
}

	// switch between mobile and nonmobile navbar
	if(isMobileWidth()) {
		// Hide home image link in navbar and show text
		$("#homeImage").css({"display": "none"});
		$("#homeText").css({"display": "inline-block"});	
	} else if(!isMobileWidth()) {
		// Show home image link in navbar and hide text
		$("#homeImage").css({"display": "inline-block"});
		$("#homeText").css({"display": "none"});
	}
