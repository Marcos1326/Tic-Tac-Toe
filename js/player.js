// Java Script seleccion de jugadores

//Guardado nombre Player 1
let botonP1 = document.getElementById("botonP1");
botonP1.addEventListener("click", () =>
sessionStorage.setItem("player 1", nombre1)
);

let inputNombre1 = document.getElementById("Player1");
let nombre1;
inputNombre1.addEventListener("input", () => (nombre1 = inputNombre1.value));
console.log(nombre1);

//Guardado nombre Player 2
let botonP2 = document.getElementById("botonP2");
botonP2.addEventListener("click", () =>
sessionStorage.setItem("player 2", nombre2)
);

let inputNombre2 = document.getElementById("Player2");
let nombre2;
inputNombre2.addEventListener("input", () => (nombre2 = inputNombre2.value));
console.log(nombre2);
