function today() {
    var requete = new XMLHttpRequest();
    requete.open('GET', 'http://40.115.42.10:80/api/smajov_d/cc8ed6db-ec38-444b-ba18-f68f58560068/schedule');
    requete.send();
    requete.onreadystatechange = function () {
        if (requete.readyState == 4 && requete.status == 200){
            var resultat = eval('('+ requete.responseText+')');
            var n = 0;
            while (resultat[n] != undefined) {
                var div = document.createElement("div");
                var div2 = document.createElement("div");
                var horaire = new Date(resultat[n]['date']).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                document.body.appendChild(div);
                div.id = resultat[n]['name'];
                document.getElementById(resultat[n]['name']).appendChild(div2);
                div.textContent += resultat[n]['name'];
                div2.textContent += horaire;
                n++;
            }
        }
    }
}

function tomorrow() {
    var requete = new XMLHttpRequest();
    requete.open('GET', 'http://40.115.42.10:80/api/smajov_d/cc8ed6db-ec38-444b-ba18-f68f58560068/classes');
    requete.send();
    requete.onreadystatechange = function () {
        if (requete.readyState == 4 && requete.status == 200) {
            var resultat = eval('(' + requete.responseText + ')');
            var n = 0;
            var list_inscrit =  document.createElement("ul");
            var list_noninscrit = document.createElement("ul");
            document.body.appendChild(list_inscrit);
            list_inscrit.id = "inscrit";
            document.body.appendChild(list_noninscrit);
            list_noninscrit.id = "non_inscrit";
            while (resultat[n] != undefined) {
                if (resultat[n]["registered"] == true) {
                    var div = document.createElement("div");
                    var div2 = document.createElement("div");
                    list_inscrit.appendChild(div);
                    list_inscrit.appendChild(div2);
                    div.textContent += resultat[n]['name'];
                    div2.textContent += resultat[n]['date'];
                    div.onclick = function () {
                        var copy_name = div;
                        var copy_date = div2;
                        list_noninscrit.appendChild(copy_name);
                        list_noninscrit.appendChild(copy_date);
                    };
                }
                else
                {
                    var div3 = document.createElement("div");
                    var div4 = document.createElement("div");
                    list_noninscrit.appendChild(div3);
                    list_noninscrit.appendChild(div4);
                    div3.textContent += resultat[n]['name'];
                    div4.textContent += resultat[n]['date'];
                    div3.onclick = function () {
                        var copy_name2 = div3;
                        var copy_date2 = div4;
                        list_inscrit.appendChild(copy_name2);
                        list_inscrit.appendChild(copy_date2);
                    };
                }
                n++;
            }
        }
    }
}