const squares = document.querySelectorAll('.grid div');
const activePlayer = document.querySelector('#activeplayer');
const board = [
    [0, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33, 34],
    [35, 36, 37, 38, 39, 40, 41]
]
let player = 1;
let turnCount = 0;
let gameOver = false;

function allDone(){
    console.log('GAME OVER MAN');
    gameOver = true;
}

function handleTurn(index){
    // Makes sure square isn't already played and div one row lower has been
    if(squares[index].classList != "" || squares[index + 7].classList == ""){
        console.log('Nice try, hotshot.');
        return;
    }
    // Adds appropriate color to square
    (player === 1) ? squares[index].classList.add('player-one') : squares[index].classList.add('player-two');
    victoryConditions(index);
    // Alternates Player
    player === 1 ? player = 2 : player = 1;
    activePlayer.innerHTML = player;
    turnCount++;
    if(turnCount === 42){
        allDone();
    }
}

function victoryConditions(latestSquare){
    const cellPlayer = squares[latestSquare].classList.value;                       // The player identifier we'll compare to the row value
    if(latestSquare <= 20){                                                         // Runs only if row is high enough for possibility of victory
        if( 
            (cellPlayer === squares[latestSquare + 7].classList.value) &&
            (cellPlayer === squares[latestSquare + 14].classList.value) &&
            (cellPlayer === squares[latestSquare + 21].classList.value)){
                console.log('NAILED IT!')    
        }
    }    
    const row = board[Math.floor(latestSquare / 7)];                                // Determines which row the clicked square is on and selects it from array
    const rowData = row.map(cell => squares[cell].classList.value);                 // Extracts the player values for each cell in the row
    let consecutive = 0;                                                            // Accumulator for number of consecutive cells
    rowData.forEach(cell => {
        (cell === cellPlayer) ? consecutive++ : consecutive = 0;
        if(consecutive >= 4){
            console.log(`${cellPlayer} is the winner!!!`);
        }
    });
}

squares.forEach((square, index) => square.addEventListener('click', () => handleTurn(index)));