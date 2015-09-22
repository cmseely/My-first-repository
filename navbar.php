<?php
$menu = array(
	'home' => array('text'=>'Home', 'url'=>'?p=home'),
	'news' => array('text'=>'News', 'url'=>'?p=news'),
	'bio' => array('text'=>'Biography', 'url'=>'?p=bio'),
	'pics' => array('text'=>'Pictures', 'url'=>'pics.html'),
	'contact' => array('text'=>'Contact', 'url'=>'?p=contact'),
	'store' => array('text'=>'Store', 'url'=>'?p=store'),
);
echo "<!DOCTYPE html>\n";
echo "<link rel='stylesheet' type='text/css' href='navbar.css'>\n";

class CNavigation {
	public static function GenerateNavbar($items, $class) {
		$current_URL = $_SERVER['REQUEST_URI'];
		
		$html .= "<div class='nav' id='navigation'>\n";
		$html .= "<script src='loadNavbar.js'></script>\n";
		$html .= "<ul>\n";
		foreach($items as $item) {
			
			$html .= "<li";
			
			if(strpos($current_URL, $item['url']) !== false) {
				$html .= " class='currentPage'";
			}
			
			if($item['text'] == 'Home') {
				$html .=	" id='homeImage'>\n";
				$html .= "<a href='{$item['url']}'><img alt='Home' src='";
				if(strpos($current_URL, $item['url']) !== false) {
					$html .= "home_icon_alt.png";
				} else {
					$html .= "home_icon.png";
				}
				$html .= "'></a>\n";
				$html .= "</li\n>";
				
				$html .= "<li ' id='homeText'>\n";
				$html .= "<a href='{$item['url']}'>{$item['text']}</a>\n";
				
				$html .= "<script src='loadHomeLinks.js'></script>\n";
			} else {
				$html .= ">\n";
				$html .= "<a href='{$item['url']}'>{$item['text']}</a>\n";
			}
			$html .= "</li\n>";
		}
		
		$html .= "</ul>\n";
		$html .= "</div>\n";

		return $html;
	}
}

echo CNavigation::GenerateNavbar($menu, $navbar);
?>
