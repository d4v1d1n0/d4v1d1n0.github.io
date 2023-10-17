//All the cookie setting stuff
function SetCookie(cookieName, cookieValue, nDays) {
	"use strict";
	var today = new Date();
	var expire = new Date();
	if (nDays == null || nDays == 0) nDays = 1;
	expire.setTime(today.getTime() + 3600000 * 24 * nDays);
	document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString() + "; path=/";
}

function ReadCookie(cookieName) {
	"use strict";
	var theCookie = " " + document.cookie;
	var ind = theCookie.indexOf(" " + cookieName + "=");
	if (ind == -1) ind = theCookie.indexOf(";" + cookieName + "=");
	if (ind == -1 || cookieName == "") return "";
	var ind1 = theCookie.indexOf(";", ind + 1);
	if (ind1 == -1) ind1 = theCookie.length;
	return unescape(theCookie.substring(ind + cookieName.length + 2, ind1));
}

function DeleteCookie(cookieName) {
	"use strict";
	var today = new Date();
	var expire = new Date() - 30;
	expire.setTime(today.getTime() - 3600000 * 24 * 90);
	document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString();
}

function AcceptCookies() {
	SetCookie('sgCookies', true, 30);
	jQuery("#cookie-bar").hide();

}


$(document).ready(function (e) {
	var toTop = $("<div id='cookie-bar'> We use cookies, just to track visits to our website, we store no personal details.<a tabindex='1' href='#'>Find out more</a><button id='Cookie' tabindex=1 onclick='AcceptCookies();'>Okay, thanks</button> </div>").appendTo("body");



if (!ReadCookie("sgCookies")) { //If the cookie has not been set
			jQuery("#cookie-bar").show();
	
	} else {
			jQuery("#cookie-bar").hide();

	
	}
	});