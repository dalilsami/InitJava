function display_form() {
    document.getElementById("form-container").style.display = "block";
}

function connexion() {

    var form = document.getElementById("form-container");
    var login = document.getElementById("login-input").value;
    var login_preg = login.match(/[a-z]{2,6}_[a-z0-9]/);
    var password = document.getElementById("password-input").value;
    var connect = true;
    if (login_preg != null) {

    }
    else {
        connect = false;
        var erreur = document.createElement("div");
        form.appendChild(erreur);
        erreur.textContent = "Le login n'est pas correct";
        return connect;
    }
    if (password == "") {

    }
    else {
        erreur = true;
        //message erreur passwd incorrect
    }

}