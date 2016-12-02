function today() {
	var requete = new XMLHttpRequest();

	requete.open('GET', 'http://40.115.42.10:80/api/dalil_s/62ac98a8-62a5-47f7-b972-4e00db6663d1/schedule');
	requete.send();
	requete.onreadystatechange = function () {
		if (requete.readyState == 4 && requete.status == 200) {
			var resultat = eval('(' + requete.responseText + ')');
			var today = document.getElementById("today");

			for (var i = 0; i < resultat.length; i++) {
				var course = document.createElement("TR");
				var discipline = document.createElement("TD");
				var schedule = document.createElement("TD");
				var time = new Date(resultat[i]['date']).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

				today.appendChild(course);
				course.appendChild(schedule);
				course.appendChild(discipline);
				course.id = resultat[i]['name'];
				course.className = "course";
				schedule.className = "course-element";
				schedule.innerHTML = time;
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
			var td1 = document.createElement("TD");
			var td2 = document.createElement("TD");
			var table_registered = document.createElement("TABLE");
			var table_unregistered = document.createElement("TABLE");
			var th_registered = document.createElement("TH");
			var th_unregistered = document.createElement("TH");

			tomorrow.appendChild(td1);
			tomorrow.appendChild(td2);
			td1.appendChild(table_registered);
			td1.className = "my_td";
			td2.appendChild(table_unregistered);
			td2.className = "my_td";
			table_registered.appendChild(th_registered);
			table_registered.id = "inscrit";
			table_registered.className = "lists";
			table_unregistered.appendChild(th_unregistered);
			table_unregistered.id = "non-inscrit";
			table_unregistered.className = "lists";
			th_registered.innerHTML = "Inscrit";
			th_unregistered.innerHTML = "Non inscrit";
			for (var i = 0; i < resultat.length; i++) {
				var course = document.createElement("TR");
				var discipline = document.createElement("TD");
				var schedule = document.createElement("TD");
				var time = new Date(resultat[i]['date']).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

				course.appendChild(schedule);
				course.appendChild(discipline);
				course.id = resultat[i]['name'];
				course.className = "course";
				course.onclick = function () {
					change_list(this);
				};
				schedule.className = "course-element";
				schedule.innerHTML = time;
				discipline.className = "course-element";
				discipline.innerHTML = resultat[i]['name'];
				if (resultat[i]["registered"] == true)
					table_registered.appendChild(course);
				else
					table_unregistered.appendChild(course);
			}
		}
	};
}

function change_list(node) {
	var new_parent_id;
	if (node.parentNode.id === "inscrit")
		new_parent_id = "non-inscrit";
	else
		new_parent_id = "inscrit";
	console.log(node.parentNode.id + " " + node.id + " " + new_parent_id);
	var detached_course = node.parentNode.removeChild(node);
	var table = document.getElementById(new_parent_id);
	table.appendChild(detached_course);
}

function deconnexion() {
	document.cookie = "student=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
	cookie_exist();
}

function show_today() {
	document.getElementById("today").style.display = "table";
	document.getElementById("today-o").style.background = "rgba(80, 80, 80, 0.55)";
	document.getElementById("tomorrow").style.display = "none";
	document.getElementById("tomorrow-o").style.background = "rgba(25, 25, 25, 0.55)";
}

function show_tomorrow() {
	document.getElementById("tomorrow").style.display = "table";
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