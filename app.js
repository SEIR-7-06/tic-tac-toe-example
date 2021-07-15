const gameBoardEl = document.querySelector('#game-board');

// Storing the state of our application
let currentPlayer = 'x';

function switchPlayer() {
  if (currentPlayer === 'x') {
    currentPlayer = 'o';
  } else if (currentPlayer === 'o') {
    currentPlayer = 'x';
  }
}

function checkForWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
    //
  ];
  
  // Check winningCombos for x's
  // Loop through the winningCombos
  // Check if there is an x in each position for that combo

  // Check winningCombos for o's
  // Loop through the winningCombos
  // Check if there is an o in each position for that combo
}

function handleClick(event) {
  // event.target is the thing that was clicked
  const squareClicked = event.target;

  // Check if the square is empty
  if (
    !squareClicked.classList.contains('x')
    && !squareClicked.classList.contains('o')
  ) {
    // Add a class x or o to squareClicked
    squareClicked.classList.add(currentPlayer)
  
    // Check for a winner
    checkForWinner();

    switchPlayer();
  }
  // Check if the game is still in play



  console.log(currentPlayer)
}

gameBoardEl.addEventListener('click', handleClick);
