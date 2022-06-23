const playBtn = document.getElementById('btn-genera');
const gridContainer = document.getElementById('mine-camp');

// creo i songoli quadrati
playBtn.addEventListener('click', function () {
    for (let i = 0; i <= 100; i++) {
        // svuoto la griglia
        gridContainer.innerHTML = "";
        // inserisco la funzione che crea i quadrati
        insSquare = createSquares();
        // inserisco i quadrati nell'html con append
        insSquare.innerHTML = i;
        gridContainer.append(insSquare);


    }
});


// in una fuzione creo i singoli quadrati

function createSquares() {
    const square = document.createElement('div')
    square.classList.add('square-grid');

    // inserisco la funzione nel button
    square.addEventListener('click', function () {
        square.classList.toggle('active');
    });

    return square;

};