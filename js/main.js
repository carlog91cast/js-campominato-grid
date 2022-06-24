const playBtn = document.getElementById('btn-genera');
const gridContainer = document.getElementById('mine-camp');

// creo i songoli quadrati
playBtn.addEventListener('click', function () {
    gridContainer.innerHTML = "";
    for (let i = 0; i <= 100; i++) {

        // inserisco la funzione che crea i quadrati
        inSquare = createSquares();
        // inserisco la funzione nel button

        // inserisco i quadrati nell'html con append
        inSquare.innerHTML = i;
        gridContainer.append(inSquare);


    }

});


// in una fuzione creo i singoli quadrati

function createSquares() {

    const square = document.createElement('div')
    square.classList.add('square-grid');
    square.addEventListener('click', function () {
        square.classList.toggle('active');
    });


    return square;

};