let boxes_container = document.getElementById('boxes')

for (let i = 1; i <= 9; i++) {
  let box = document.createElement('div')
  box.className = 'box align'
  box.innerHTML = i
  boxes_container.append(box)
}

// game
let boxes = document.querySelectorAll('.box')
let turn = 'X'
let gameOver = false

function innitGame () {
  boxes.forEach(box => {
    box.innerHTML = ''

    if (gameOver == false) {
      box.addEventListener('mouseover', mouseOverFunction)
      box.addEventListener('mouseout', mouseOutFunction)
      box.addEventListener('click', clickFunction)
    }
  })
}

innitGame()

// play again
document.querySelector('#play-again').addEventListener('click', () => {
  clearBoxColors();
  document.querySelector("#result").innerHTML = "";
  gameOver = false;
  innitGame();
  
})
function clearBoxColors() {
  boxes.forEach(box => {
    box.style.backgroundColor = '';
  });
}
function mouseOverFunction () {
  if (!gameOver) {
    this.style.backgroundColor =
      turn === 'X' ? 'rgb(246, 96, 96)' : ' rgb(78, 137, 189)'
  }
}

function mouseOutFunction () {
  if (!gameOver) {
    this.style.backgroundColor = '' // Reset background color on mouseout
  }
}
function clickFunction () {
  if (!gameOver && this.innerHTML === '') {
    this.innerHTML = turn
    checkWinner()
    changeTurn()
  }
}
function changeTurn () {
  if (turn === 'X') {
    turn = 'O'
    document.querySelector('#bg').style.left = '9.8em'
    document.querySelector('#bg').style.backgroundColor = 'rgb(78, 137, 189)'
  } else {
    turn = 'X'
    document.querySelector('#bg').style.left = '5.45em'
    document.querySelector('#bg').style.backgroundColor = 'rgb(246, 96, 96)'
  }
}

function checkWinner () {
  let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < winningCombinations.length; i++) {
    const element = winningCombinations[i]
    let cellA = boxes[element[0]].innerHTML
    let cellB = boxes[element[1]].innerHTML
    let cellC = boxes[element[2]].innerHTML

    // win
    if (cellA != '' && cellA === cellB && cellA === cellC) {
      document.querySelector('#result').innerHTML = `${cellA} wins!`
      gameOver = true

      if (turn == 'X') {
        for (let j = 0; j < 3; j++) {
          boxes[winningCombinations[i][j]].style.backgroundColor =
            'rgb(246, 96, 96)'
        }
      } else {
        for (let j = 0; j < 3; j++) {
          boxes[winningCombinations[i][j]].style.backgroundColor =
            'rgb(78, 137, 189)'
        }
      }
    }
  }

  if (!gameOver) {
    // checkDraw
    let draw = true
    boxes.forEach(box => {
      if (box.innerHTML === '') {
        draw = false
      }
    })

    if (draw == true) {
      // draw
      boxes.forEach(box => {
        box.style.backgroundColor = ''
      })
      document.querySelector('#result').innerHTML = `Draw`
      gameOver = true
    }
  }
}

// play again
document.querySelector('#play-again').addEventListener('click', () => {
  innitGame();
  
})
