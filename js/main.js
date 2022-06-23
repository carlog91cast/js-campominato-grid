// recupero il parent mediante id del button nell'html


function btnPlay() {
    const play = document.getElementById('btn-genera');
    play.addEventListener("click");
};

// genero la griglia con gli elementi dentro cosi poi da inserila nell'eventlistener tramite funzione

function createGridContainer(grid, className) {
    // griglia vuota
    grid.innerHTML = "";

    // creo gli elementi con un ciclo for

    for (let i = 0; i <= 100; index++) {
        let gridContainer = gridSquare (className, i);
        gridContainer.btnPlay('click');
        
    };
}


// genero i songoli quadrati da mettere nel gridcontainer

function createSquare(className, i) {
    let gridSquare = document.createElement('div')
    gridSquare.classList.add('square-grid')
    return gridSquare;
};

