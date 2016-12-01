function display_form() {
    document.getElementById("form-container").style.display = "block";
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
    }
    return connect;
}

function cookie_exist() {
    var n = 0;
    var cookie_name = document.cookie.split("=");
    while (cookie_name[n] != undefined)
    {
        if (cookie_name[n] == "student")
            console.log(cookie_name[n]);
        n++;
    }
}