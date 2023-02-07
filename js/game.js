// Java Script Juego

//Turnos player 1 y 2
let tablero = Array.from(document.getElementsByClassName("casillas"));

let turno = true;

let turnoP1 = 3;
let turnoP2 = 3;

let miTablero = ["","","","","","","","",""];

const comprueboGanador = () => {
    console.log(miTablero);
}

tablero.map(
    (celda)=>{
        celda.addEventListener("click", ()=>{
            if((celda.innerHTML === "") && (turnoP1 > 0 || turnoP2 > 0)){
                celda.innerHTML = (turno) ? "X" : "O";
                
                (turno) ? turnoP1-- : turnoP2--;

                miTablero[celda.id] = (turno) ? "X" : "O";

                comprueboGanador();
                
                console.log(celda.id);
                //cambio de turno
                turno = !turno;
            }
        })
    }
);

let combinacionGanadora=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
