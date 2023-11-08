const boxes = document.getElementsByClassName('box');
// console.log(boxes);
for (const box of boxes) {
  box.addEventListener('click', addTurn);
  box.addEventListener('mouseover', addShadow);
  box.addEventListener('mouseout', removeShadow);
  // console.log(box);
};
let turnMode = 'x';
function addTurn() {

  // console.log(this);
  if (turnMode === 'x') {
    this.classList.add('circle');
    this.id = 'circle';
    turnMode = 0;
  }
  else {
    this.classList.add('cross');
    this.id = 'cross';
    turnMode = 'x';
  }
  this.removeEventListener('click', addTurn);
  this.removeEventListener('mouseover', addShadow);
  checkwin();
}

function addShadow() {
  if (turnMode === 'x') {
    this.classList.add('circle_shadow')
  }
  if (turnMode === 0) {
    this.classList.add('cross_shadow')

  }
}
function removeShadow() {
  this.classList.remove('circle_shadow')
  this.classList.remove('cross_shadow')

}


function checkwin() {
  let winner = '';
  const boxes = document.getElementsByClassName('box');
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  winningCombinations.forEach((e) => {
    if (boxes[e[0]].id === boxes[e[1]].id && boxes[e[1]].id === boxes[e[2]].id) {
      winner = `${boxes[e[0]].id}`
    };
  })
  alertMsg(winner);
}

function alertMsg(m) {
  if (m !== '') {
    for (const box of boxes) {
      box.removeEventListener('click', addTurn);
      box.removeEventListener('mouseover', addShadow);
    };
    popup(m)
  }
}
//-----------------------------

function resetGame() {
  location.reload();
}
function popup(m) {
  if (m === 'cross') {
    m = 'X';
  }
  else {
    m = 'O'
  }
  let popup = document.getElementById('popup');
  popup.classList.add('popup')
  popup.innerHTML = `<div class="congrates">Congratulations</div>
  <div class="result">${m} player won the game!</div>
  <button onclick="resetGame()" >Restart game</button>`;
}