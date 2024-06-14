let boxes_container = document.getElementById('boxes')

for (let index = 1; index <= 9; index++) {
  let box = document.createElement('div')
  box.className = 'box align'
  // box.innerHTML = index
  boxes_container.append(box)
}

// game

let boxes = document.querySelectorAll('.box')
let turn = 'X'
let gameOver = false

boxes.forEach(box => {
  box.innerHTML = ''
  box.addEventListener('click', () => {
    if (!gameOver && box.innerHTML === '') {
      box.innerHTML = turn
      changeTurn()
      checkWinner()
    }
  })
})

function changeTurn () {
  if (turn === 'X') {
    turn = 'O'
    document.querySelector('#bg').style.left = '9.8em'
    document.querySelector('#bg').style.backgroundColor = ' rgb(78, 137, 189)'
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
}
