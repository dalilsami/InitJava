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
			var n = 0;
			var list_inscrit = document.createElement("ul");
			var list_noninscrit = document.createElement("ul");
			document.body.appendChild(list_inscrit);
			list_inscrit.id = "inscrit";
			document.body.appendChild(list_noninscrit);
			list_noninscrit.id = "non_inscrit";
			while (resultat[n] != undefined) {
				if (resultat[n]["registered"] == true) {
					var course = document.createElement("SECTION");
					var discipline = document.createElement("SECTION");
					var schedule = document.createElement("SECTION");
					list_inscrit.appendChild(course);
					course.appendChild(discipline);
					course.appendChild(schedule);
					course.id = resultat[n]['name'];
					discipline.innerHTML = resultat[n]['name'];
					schedule.innerHTML = resultat[n]['date'];
					discipline.onclick = function () {
						var copy = course;
						list_noninscrit.appendChild(copy);
					};
				}
				else {
					var course2 = document.createElement("SECTION");
					var discipline2 = document.createElement("SECTION");
					var schedule2 = document.createElement("SECTION");
					list_noninscrit.appendChild(course2);
					course2.appendChild(discipline2);
					course2.appendChild(schedule2);
					course2.id = resultat[n]['name'];
					discipline2.innerHTML = resultat[n]['name'];
					schedule2.innerHTML = resultat[n]['date'];
					discipline2.onclick = function () {
						var copy = course;
						list_noninscrit.appendChild(copy);
					};
				}
				n++;
			}
		}
		;
	}
}

function show_today() {
	document.getElementById("today").style.display = "block";
	document.getElementById("tomorrow").style.display = "none";
}

function show_tomorrow() {
	document.getElementById("tomorrow").style.display = "block";
	document.getElementById("today").style.display = "none";
}

today();
tomorrow();