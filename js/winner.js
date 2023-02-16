let ganador = JSON.parse(sessionStorage.getItem("NombreGanador"));

document.getElementById("Playerwin").innerHTML = `${ganador} <br> ha ganado la guerra!!`;

sessionStorage.clear();
