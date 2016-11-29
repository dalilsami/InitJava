function display_form() {
    document.getElementById("form-container").style.display = "block";
}

function connexion(){

    var login = document.getElementById("login").value;
    login.match(/[a-z]{2,6}_[a-z0-9]/);
    var password = document.getElementById("password").value;
    var erreur = false;
    if (login != undefined )
    {
        alert("hle");
    }
    else
    {
        erreur = true;
        var texte_erreur = document.createElement("p");
        document.getElementById("form-container").appendChild(texte_erreur);
        texte_erreur.textContent = "Le login n'est pas correct";
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