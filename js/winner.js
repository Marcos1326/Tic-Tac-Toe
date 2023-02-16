let ganador = JSON.parse(sessionStorage.getItem("NombreGanador"));

document.getElementById("Playerwin").innerHTML = `${ganador} ha ganado en el bando de los herbívoros!!`;

sessionStorage.clear();
