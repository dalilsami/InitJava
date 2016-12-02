function today() {
	var requete = new XMLHttpRequest();

	requete.open('GET', 'http://40.115.42.10:80/api/dalil_s/62ac98a8-62a5-47f7-b972-4e00db6663d1/schedule');
	requete.send();
	requete.onreadystatechange = function () {
		if (requete.readyState == 4 && requete.status == 200) {
			var resultat = eval('(' + requete.responseText + ')');
			var today = document.getElementById("today");

			for (var i = 0; i < resultat.length; i++) {
				var course = document.createElement("SECTION");
				var discipline = document.createElement("SECTION");
				var schedule = document.createElement("SECTION");
				var time = new Date(resultat[i]['date']).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

				today.appendChild(course);
				course.appendChild(schedule);
				course.appendChild(discipline);
				course.id = resultat[i]['name'];
				course.className = "course";
				schedule.className = "course-element";
				schedule.innerHTML = time + ": ";
				discipline.className = "course-element";
				discipline.innerHTML = resultat[i]['name'];
			}
		}
	};
}

function tomorrow() {
	var requete = new XMLHttpRequest();

	requete.open('GET', 'http://40.115.42.10:80/api/dalil_s/62ac98a8-62a5-47f7-b972-4e00db6663d1/classes');
	requete.send();
	requete.onreadystatechange = function () {
		if (requete.readyState == 4 && requete.status == 200) {
			var resultat = eval('(' + requete.responseText + ')');
			var tomorrow = document.getElementById("tomorrow");
			var list_inscrit = document.createElement("ul");
			var list_noninscrit = document.createElement("ul");

			tomorrow.appendChild(list_inscrit);
			tomorrow.appendChild(list_noninscrit);
			list_inscrit.id = "inscrit";
			list_noninscrit.id = "non_inscrit";
			for (var i = 0; i < resultat.length; i++) {
				if (resultat[i]["registered"] == true) {
					var course = document.createElement("SECTION");
					var discipline = document.createElement("SECTION");
					var schedule = document.createElement("SECTION");

					list_inscrit.appendChild(course);
					course.appendChild(discipline);
					course.appendChild(schedule);
					course.className = "course";
					schedule.className = "course-element";
					discipline.className = "course-element";
					course.id = resultat[i]['name'];
					discipline.innerHTML = resultat[i]['name'];
					schedule.innerHTML = resultat[i]['date'];
					discipline.onclick = function () {
						list_noninscrit.appendChild(course);
					};
				}
				else {
					var course2 = document.createElement("SECTION");
					var discipline2 = document.createElement("SECTION");
					var schedule2 = document.createElement("SECTION");

					list_noninscrit.appendChild(course2);
					course2.appendChild(discipline2);
					course2.appendChild(schedule2);
					course2.className = "course";
					schedule2.className = "course-element";
					discipline2.className = "course-element";
					course2.id = resultat[i]['name'];
					discipline2.innerHTML = resultat[i]['name'];
					schedule2.innerHTML = resultat[i]['date'];
					discipline2.onclick = function () {
						list_inscrit.appendChild(course2);
					};
				}
			}
		}
	};
}

function show_today() {
	document.getElementById("today").style.display = "block";
	document.getElementById("today-o").style.background = "rgba(80, 80, 80, 0.55)";
	document.getElementById("tomorrow").style.display = "none";
	document.getElementById("tomorrow-o").style.background = "rgba(25, 25, 25, 0.55)";
}

function show_tomorrow() {
	document.getElementById("tomorrow").style.display = "block";
	document.getElementById("tomorrow-o").style.background = "rgba(80, 80, 80, 0.55)";
	document.getElementById("today").style.display = "none";
	document.getElementById("today-o").style.background = "rgba(25, 25, 25, 0.55)";
}

function cookie_exist() {
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

cookie_exist();

today();
tomorrow();