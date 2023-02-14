let ganador1 = sessionStorage.getItem("player-1");
document.getElementById("Playerwin").innerHTML = `<p>${ganador1}</p>`;

let ganador2 = sessionStorage.getItem("player-2");
document.getElementById("Playerwin").innerHTML = `<p>${ganador2}</p>`;

sessionStorage.clear();
