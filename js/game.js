// Java Script Juego


document.getElementById("Player1").innerHTML = sessionStorage.getItem("player-1");
document.getElementById("Player2").innerHTML = sessionStorage.getItem("player-2");



//Turnos player 1 y 2
let tablero = Array.from(document.getElementsByClassName("casillas"));

let turno = true;

let turnoP1 = 3;
let turnoP2 = 3;


//Tablero
let miTablero = ["","","","","","","","",""];

tablero.map(
    (celda)=>{
        celda.addEventListener("click", ()=>{
            if((celda.innerHTML === "") && (turnoP1 > 0 || turnoP2 > 0)){
                celda.innerHTML = (turno) ? "X" : "O";
                //pintado de las img
                celda.classList.add((turno) ? "Ximg" : "Oimg"); 
                (turno) ? turnoP1-- : turnoP2--;
                miTablero[celda.id] = (turno) ? "X" : "O";
                comprueboGanador();
                
                turno = !turno;
            }
        })
    }
);

//combinacion ganadora
let combinacionGanadora=[
    [0, 1, 2], //posicion 0 
    [3, 4, 5], //posicion 1
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const comprueboGanador = () => {

//primera combinacion ganadora 1a fila 
if ((miTablero[combinacionGanadora[0][0]] === "X") && (miTablero[combinacionGanadora[0][1]] === "X") && (miTablero[combinacionGanadora[0][2]] === "X")){
    window.location.href= "../pages/winner.html"
//primera combinacion ganadora 1a fila 
} else if  ((miTablero[combinacionGanadora[0][0]] === "O") && (miTablero[combinacionGanadora[0][1]] === "O") && (miTablero[combinacionGanadora[0][2]] === "O")){
    window.location.href= "../pages/winner.html"
    
//Segunda combinacion ganadora 2a fila
} else if  ((miTablero[combinacionGanadora[1][0]] === "X") && (miTablero[combinacionGanadora[1][1]] === "X") && (miTablero[combinacionGanadora[1][2]] === "X")){
    window.location.href= "../pages/winner.html"
//Segunda combinacion ganadora 2a fila
} else if  ((miTablero[combinacionGanadora[1][0]] === "O") && (miTablero[combinacionGanadora[1][1]] === "O") && (miTablero[combinacionGanadora[1][2]] === "O")){
        window.location.href= "../pages/winner.html"
    
//Tercera combinacion ganadora 3a fila
} else if  ((miTablero[combinacionGanadora[2][0]] === "X") && (miTablero[combinacionGanadora[2][1]] === "X") && (miTablero[combinacionGanadora[2][2]] === "X")){
    window.location.href= "../pages/winner.html"
//Tercera combinacion ganadora 3a fila
}  else if  ((miTablero[combinacionGanadora[2][0]] === "O") && (miTablero[combinacionGanadora[2][1]] === "O") && (miTablero[combinacionGanadora[2][2]] === "O")){
    window.location.href= "../pages/winner.html"
    
//Cuarta combinacion ganadora 1a columna
}  else if  ((miTablero[combinacionGanadora[3][0]] === "X") && (miTablero[combinacionGanadora[3][1]] === "X") && (miTablero[combinacionGanadora[3][2]] === "X")){
    window.location.href= "../pages/winner.html"
//Cuarta combinacion ganadora 1a columna
} else if  ((miTablero[combinacionGanadora[3][0]] === "O") && (miTablero[combinacionGanadora[3][1]] === "O") && (miTablero[combinacionGanadora[3][2]] === "O")){
    window.location.href= "../pages/winner.html"

//Cuarta combinacion ganadora 2a columna
} else if  ((miTablero[combinacionGanadora[4][0]] === "X") && (miTablero[combinacionGanadora[4][1]] === "X") && (miTablero[combinacionGanadora[4][2]] === "X")){
    window.location.href= "../pages/winner.html"
//Cuarta combinacion ganadora 2a columna
} else if  ((miTablero[combinacionGanadora[4][0]] === "O") && (miTablero[combinacionGanadora[4][1]] === "O") && (miTablero[combinacionGanadora[4][2]] === "O")){
    window.location.href= "../pages/winner.html"
    
//Quinta combinacion ganadora 3a columna
} else if  ((miTablero[combinacionGanadora[5][0]] === "X") && (miTablero[combinacionGanadora[5][1]] === "X") && (miTablero[combinacionGanadora[5][2]] === "X")){
    window.location.href= "../pages/winner.html"
//Quinta combinacion ganadora 3a columna
} else if  ((miTablero[combinacionGanadora[5][0]] === "O") && (miTablero[combinacionGanadora[5][1]] === "O") && (miTablero[combinacionGanadora[5][2]] === "O")){
    window.location.href= "../pages/winner.html"
    
//Sexta combinacion ganadora diagonal 1
} else if  ((miTablero[combinacionGanadora[6][0]] === "X") && (miTablero[combinacionGanadora[6][1]] === "X") && (miTablero[combinacionGanadora[6][2]] === "X")){
    window.location.href= "../pages/winner.html"
//Sexta combinacion ganadora diagonal 1
} else if  ((miTablero[combinacionGanadora[6][0]] === "O") && (miTablero[combinacionGanadora[6][1]] === "O") && (miTablero[combinacionGanadora[6][2]] === "O")){
    window.location.href= "../pages/winner.html"
//Septima combinacion ganadora diagonal 1
} else if  ((miTablero[combinacionGanadora[7][0]] === "X") && (miTablero[combinacionGanadora[7][1]] === "X") && (miTablero[combinacionGanadora[7][2]] === "X")){
    window.location.href= "../pages/winner.html"
//Septima combinacion ganadora diagonal 1
} else if  ((miTablero[combinacionGanadora[7][0]] === "O") && (miTablero[combinacionGanadora[7][1]] === "O") && (miTablero[combinacionGanadora[7][2]] === "O")){
    window.location.href= "../pages/winner.html"}
}