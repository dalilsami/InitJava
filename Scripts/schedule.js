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
				else {
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