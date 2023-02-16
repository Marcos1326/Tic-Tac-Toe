let ganador = JSON.parse(sessionStorage.getItem("NombreGanador"));

document.getElementById("Playerwin").innerHTML = ganador;

sessionStorage.clear();
