function display_form() {
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
        password.setAttribute("placeholder", "password");
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

function connexion() {
    var form = document.getElementById("form-container");
    var user_login = document.getElementById("login-input").value;
    var login_preg = user_login.match(/[a-z]{2,6}_[a-z0-9]/);
    var user_password = document.getElementById("password-input").value;
    var password;
    var connect = true;
    var time = new Date().toLocaleTimeString();

    if (time > "00:00:00 AM" && time < "05:59:00 AM")
        password = "Air";
    else if (time > "06:00:00 AM" && time < "11:59:00 AM")
        password = "Earth";
    else if (time > "12:00:00 AM" && time < "5:59:00 PM")
        password = "Fire";
    else if (time > "06:00:00 PM" && time < "11:59:00 PM")
        password = "Water";
    if (document.getElementById("error") === null) {
        var error = document.createElement("div");
        error.setAttribute("id", "error");
        form.appendChild(error);
    } else
        var error = document.getElementById("error");
    if (login_preg != null && user_password == password) {
        alert("Vous allez être conduit à la page d'accueil.");
        document.cookie = "student =" + user_login + "; max-age = 18000";
    }
    else {
        connect = false;
        document.cookie = "forbidden = true; max-age = 21600";
        var message = "";
        if (login_preg == null)
            message += "Le login n'est pas correct<br>";
        if (user_password != password)
            message += "Le password n'est pas correct<br>";
        error.innerHTML = message;
        return connect;
    }
}

function cookie_exist() {
   var n = 0;
    var cookie_name = document.cookie.split("=");
    while (cookie_name[n] != undefined) {
        if (cookie_name[n] == "student")
           return window.location.replace("schedule.html");
        n++;
    }
}

cookie_exist();