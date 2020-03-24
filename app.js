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
}

function victoryConditions(latestSquare){
    if (turnCount > 6){
        if(latestSquare <= 20){
            //Checks for vertical victory if it's at least four rows high
            if( (squares[latestSquare].classList.value === squares[latestSquare + 7].classList.value) &&
            (squares[latestSquare].classList.value === squares[latestSquare + 14].classList.value) &&
            (squares[latestSquare].classList.value === squares[latestSquare + 21].classList.value)){
                console.log('NAILED IT!')    
            }
        }    
        const row = board[Math.floor(latestSquare / 7)];                                // Determines which row the clicked square is on and selects it from array
        // Checks to see if center cell matches the three surrounding
        if( (squares[row[3]].classList.value == squares[row[2]].classList.value) &&
            (squares[row[3]].classList.value == squares[row[1]].classList.value) && 
            (squares[row[3]].classList.value == squares[row[0]].classList.value)){
                console.log('YAHOOOO')
        }if(   (squares[row[3]].classList.value == squares[row[4]].classList.value) &&
                    (squares[row[3]].classList.value == squares[row[5]].classList.value) && 
                    (squares[row[3]].classList.value == squares[row[6]].classList.value)){
                        console.log('YAHOOOO 2!')
        }if(   (squares[row[3]].classList.value == squares[row[1]].classList.value) &&
                    (squares[row[3]].classList.value == squares[row[2]].classList.value) && 
                    (squares[row[3]].classList.value == squares[row[4]].classList.value)){
                        console.log('YAHOOOO 2!')
        }if(   (squares[row[3]].classList.value == squares[row[2]].classList.value) &&
                    (squares[row[3]].classList.value == squares[row[4]].classList.value) && 
                    (squares[row[3]].classList.value == squares[row[5]].classList.value)){
                        console.log('YAHOOOO 2!')
        }
    }
}

squares.forEach((square, index) => square.addEventListener('click', () => handleTurn(index)));