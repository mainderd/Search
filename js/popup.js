function openTabByURL(url){
	
	window.open(url);
	window.close();
	
}

function openSearcherTab(target){

	var idsArray = ["a-google", "a-bing", "a-yahoo", "a-ask", "a-yandex", "a-baidu", "a-rambler", "a-mail-ru", "a-youtube", "a-vimeo", "a-google-maps", "a-yandex-maps", "a-google-play", "a-chrome-webstore"];
	if ( $.inArray(target.id, idsArray) >=0 ){
		openTabByURL(target.href);
	}
	
}

$(document).ready(function(){
	
	document.querySelector("#menu-general").innerHTML = chrome.i18n.getMessage("popup_menu_general");
	document.querySelector("#menu-special").innerHTML = chrome.i18n.getMessage("popup_menu_special");
	document.querySelector(".popup-menu").addEventListener("click", function(event){ openSearcherTab(event.target) }, false);
	
});
