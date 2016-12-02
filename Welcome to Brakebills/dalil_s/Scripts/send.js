var requete = new XMLHttpRequest();
requete.open('POST', 'http://40.115.42.10:80/api/dalil_s/62ac98a8-62a5-47f7-b972-4e00db6663d1/classes');
requete.onreadystatechange = function () {
requete.send("[{name:"+ name +",registered: true }]");