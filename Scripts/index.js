function display_form() {
	if (get_info_from_cookie("forbidden") === "") {
		if (document.getElementById("form-container") === null) {
			var container = document.createElement("SECTION");
			var form = document.createElement("FORM");
			var title = document.createElement("SECTION");
			var input = document.createElement("SECTION");
			var login = document.createElement("INPUT");
			var password = document.createElement("INPUT");
			var submit = document.createElement("INPUT");

			container.id = "form-container";
			form.onsubmit = function () {
				return connexion();
			};
			title.className = "form-title";
			title.innerHTML = "Entrez vos identifiants";
			input.id = "form-input";
			login.id = "login-input";
			login.className = "input-text";
			login.setAttribute("type", "text");
			login.setAttribute("placeholder", "Login");
			password.id = "password-input";
			password.className = "input-text";
			password.setAttribute("type", "password");
			password.setAttribute("placeholder", "Password");
			submit.className = "input-submit";
			submit.setAttribute("type", "submit");
			submit.value = "Connect";

			document.body.appendChild(container);
			container.appendChild(form);
			form.appendChild(title);
			form.appendChild(input);
			form.appendChild(submit);
			input.appendChild(login);
			input.appendChild(password);
		}
	}
}

function connexion() {
	var time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
	var form = document.getElementById("form-container");
	var user_login = document.getElementById("login-input").value;
	var login_preg = user_login.match(/[a-z]{2,6}_[a-z0-9]/);
	var user_password = document.getElementById("password-input").value;
	var password;
	var cookie_expire;
	if (time > "00:00 AM" && time < "05:59 AM") {
        password = "Air";
        cookie_expire = 21540;
    }
	else if (time > "06:00 AM" && time < "11:59 AM") {
        password = "Earth";
        cookie_expire = 43140;
    }
	else if (time > "12:00 AM" && time < "5:59 PM") {
        password = "Fire";
        cookie_expire = 64740;
    }
	else if (time > "06:00 PM" && time < "11:59 PM") {
        password = "Water";
        cookie_expire = 86340;
    }
	var error;
	if (document.getElementById("error") === null) {
		error = document.createElement("div");
		error.setAttribute("id", "error");
		form.appendChild(error);
	} else
		error = document.getElementById("error");

    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var current_time_second = ((hours*3600) + (minutes * 60));
    var expiration = cookie_expire - current_time_second;
	if (login_preg != null && user_password == password)
		document.cookie = "student =" + user_login + "; max-age =" + expiration;
	else {
		document.cookie = "forbidden = true; max-age=" + expiration;
		var message = "";
		if (login_preg == null)
			message += "login non valide, ";
		if (user_password != password)
			message += "password non valide, ";
		message = message.charAt(0).toUpperCase() + message.slice(1);
		alert(message + "\nessayez au prochain changement de mot de passe !");
	}
}

cookie_exist_index();