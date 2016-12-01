function today() {
    var requete = new XMLHttpRequest();
    requete.open('GET', 'http://40.115.42.10:80/api/smajov_d/cc8ed6db-ec38-444b-ba18-f68f58560068/schedule');
    requete.send();
    requete.onreadystatechange = function () {
        if (requete.readyState == 4 && requete.status == 200){
            var resultat = eval('('+ requete.responseText+')');
            var div = document.createElement("div");
            var div2 = document.createElement("div");
            document.body.appendChild(div);
            var n = 0;
            while (resultat[n] != undefined) {
                div.textContent += resultat[n].name;
                div2.textContent += resultat[n].date;
                n++;
            }
        }
    }
}