const container = document.querySelector('#container');
const board = document.querySelector('#board');
const cells = [];
for (let i = 0; i < 9; i++) {
    const cell = document.createElement('button');
    cell.classList.add('cell');
    cell.id = `cell${i}`;
    board.appendChild(cell);
    cells.push(cell);
}

const players = ['X', 'O'];
const gameBoard = Array(9);
let isGameOver = false;
let eventCounts = 0;
const curPlayer = document.querySelectorAll('.player');
const outer = document.querySelector("#outer");

for (let i = 0; i < 9; i++) {
    cells[i].addEventListener("click", function (e) {
        this.removeEventListener('mouseover', handleMouseOver);
        this.removeEventListener('mouseout', handleMouseOut);
        this.classList.add("clicked");
        this.innerText = choosePlayer(eventCounts);
        this.disabled = true;
        gameBoard[i] = choosePlayer(eventCounts);
        judge(gameBoard, choosePlayer(eventCounts));
        eventCounts++;
        if (isGameOver) {
            outer.classList.toggle('hide');
            curPlayer[1].innerText = choosePlayer(eventCounts - 1);
            for (let i = 0; i < 9; i++) {
                cells[i].disabled = true;
            }
        }
        curPlayer[0].innerText = choosePlayer(eventCounts);
    })
    cells[i].addEventListener("mouseover", handleMouseOver)
    cells[i].addEventListener("mouseout", handleMouseOut)
}

function handleMouseOver() {
    if (!this.disabled && !this.innerText) {
        this.innerText = choosePlayer(eventCounts);
        this.classList.toggle("hover");
    }
}

function handleMouseOut() {
    if (!this.disabled && this.innerText === choosePlayer(eventCounts)) {
        this.innerText = "";
        this.classList.toggle("hover");
    }
}

function choosePlayer(eventCounts) {
    return players[eventCounts % 2];
}

function judge(gameBoard, player) {
    let curpositions = [];
    for (let i = 0; i < 9; i++) {
        if (gameBoard[i] === player) {
            curpositions.push(i);
        }
    }
    const winningPositions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]
    let counter = 0;
    for (let winningPosition of winningPositions) {
        for (let position of winningPosition) {
            if (!curpositions.includes(position)) {
                counter = 0;
                break;
            }
            else {
                counter++;
                if (counter === 3) {
                    isGameOver = true;
                    return;
                }
            }
        }
    }
}
