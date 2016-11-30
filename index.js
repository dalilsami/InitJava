function display_form() {
    document.getElementById("form-container").style.display = "block";
}

function connexion(){

    var login = document.getElementById("login-input").value;
    var login_preg = login.match(/[a-z]{2,6}_[a-z0-9]/);
    var password = document.getElementById("password-input").value;
    var erreur = false;
    if (login_preg != null)
    {

    }
    else
    {
        erreur = true;
        var div_erreur = document.createElement("div");
        document.body.appendChild(div_erreur);
        div_erreur.textContent = "Le login n'est pas correct";
        return false;
    }
    if (password == "")
    {

    }
    else
    {
        erreur = true;
        //message erreur passwd incorrect
    }

}