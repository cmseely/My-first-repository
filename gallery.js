
// Set thumbnails to be clicked
var image = document.getElementsByClassName("image");
var i = image.length;
while(i--) {
	image[i].onclick = function() {showImage()};
}

// centers image vertically in div
function centerVertically(img) {
	// reset horizontal centering
	img.css("margin-left", "0");
	img.css("left", "0");
	
	// center vertically
	var y = -1 * parseFloat(img.css("height")) / 2 ;
	img.css("margin-top", y);
	img.css("top", "50%");
}

// centers image horizontally in div
function centerHorizontally(img) {
	// reset vertical centering
	img.css("top", "0");
	img.css("margin-top", "0");
	
	// center horizontally
	var x = -1 * parseFloat(img.css("width")) / 2 ;
	img.css("margin-left", x);
	img.css("left", "50%");
}

function getSource(e) {
	var posx = 0;
	var posy = 0;
	if (!e) var e = window.event;
	if (e.pageX || e.pageY) 	{
		posx = e.pageX;
		posy = e.pageY;
	}
	else if (e.clientX || e.clientY) 	{
		posx = e.clientX + document.body.scrollLeft
			+ document.documentElement.scrollLeft;
		posy = e.clientY + document.body.scrollTop
			+ document.documentElement.scrollTop;
	}
	// posx and posy contain the mouse position relative to the document
	var elementClicked = document.elementFromPoint(posx,posy);
	console.log(elementClicked);
	var imgName = elementClicked.src;
	console.log(imgName);
	return imgName;
}

// When clicked, an enlarged version of the thumbnail takes up the screen
function showImage() {
/*
	// Get source of element that was clicked
	e = window.event || e;
	var x = e.clientX, y = e.clientY;
	
	var elementClicked = document.elementFromPoint(x,y);
	var imgName = elementClicked.src;*/
	
	// Set the hidden, large image as the thumbnail's image
	var imgName = getSource();
	document.getElementById('largeImg').src = imgName;
	var img = $("#largeImg");
	
	// area for image to load
	var bgWidth = $("#galleryBG").width();
	var bgHeight = $("#galleryBG").height();
	
	// Set size of image depending on aspect ratio
	if(parseInt(img.css("height")) > parseInt(img.css("width"))) {
		// Image is taller than wide
		img.css("width", "auto");
		
		if(img.width() > bgWidth) {
			// width would be wider than background, so shrink to bg
			img.css("width", bgWidth);
			img.css("height", "auto");
			centerVertically(img);
			
		} else {
			// Wide image will fit in bg
			img.css("height", "100%");
			centerHorizontally(img);
		}		
	} else {
		// Image is wider than tall
		img.css("height", "auto");
		
		if(img.height() > bgHeight) {
			// height would be taller than background, so shrink to bg
			img.css("height", bgHeight);
			img.css("width", "auto");
			centerHorizontally(img);
			
		} else {
			// Tall image will fit in bg
			img.css("width", "100%");
			centerVertically(img);
		}
	}
	
	showLargeImagePanel();
	unselectAll();
}

// Unhides the large image
function showLargeImagePanel() {
		document.getElementById('largeImgPanel').style.visibility = 'visible';
		$("body").addClass("noScroll");
}

//
function unselectAll() {
		if(document.selection) document.selection.empty();
		if(window.getSelection) window.getSelection().removeAllRanges();
}

// Hides the large image
function hideMe(obj) {
		obj.style.visibility = 'hidden';
		$("body").removeClass("noScroll");
}
