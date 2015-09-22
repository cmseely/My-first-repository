// when the page is smaller than this width, it changes into
// mobile version
var mobileWidth = 800;

// Returns true if window is less than mobile width
function isMobileWidth() {
	return $(window).width() <= mobileWidth;
}


	// switch between mobile and nonmobile navbar
	if(isMobileWidth()) {
		//change class to mobile
		$("#navigation").addClass("mobile");	
	} else if(!isMobileWidth()) {
		// change class to nonMobile
		$("#navigation").addClass("nonMobile");
	}
