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
    var time = new Date().toLocaleTimeString(de-AT);
    alert(time);

    if (time > "00:00:00" && time < "05:59:00")
        password = "Air";
    else if (time > "06:00:00" && time < "11:59:00")
        password = "Earth";
    else if (time > "12:00:00" && time < "17:59:00")
        password = "Fire";
    else if (time > "18:00:00" && time < "23:59:00")
        password = "Water";
    if (document.getElementById("error") === null) {
        var error = document.createElement("div");
        error.setAttribute("id", "error");
        form.appendChild(error);
    } else
        var error = document.getElementById("error");
    if (login_preg != null && user_password == password) {
        alert("Vous allez être conduit à la page d'accueil.");
        document.cookie = "student =" + user_login;
    }
        else {
        connect = false;
        document.cookie = "forbidden = true";
        var message = "";
        if (login_preg == null)
            message += "Le login n'est pas correct<br>";
        if (user_password != password)
            message += "Le password n'est pas correct<br>";
        error.innerHTML = message;
    }
    alert(password);
    return connect;
}