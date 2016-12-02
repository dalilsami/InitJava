function cookie_exist_index() {
	if (get_info_from_cookie("forbidden") === "")
		if (get_info_from_cookie("student") !== "")
			return window.location.replace("schedule.html");
}

function cookie_exist_schedule() {
	if (get_info_from_cookie("student") === "")
		return window.location.replace("index.html");
}

function get_info_from_cookie(cookie_name) {
	var pattern = cookie_name + "=([^;]+);?";
	var regex_to_match = new RegExp(pattern);
	if (regex_to_match.test(document.cookie))
		return document.cookie.match(regex_to_match)[1];
	return "";
}

function deconnexion() {
	document.cookie = "student=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
	cookie_exist_schedule();
}