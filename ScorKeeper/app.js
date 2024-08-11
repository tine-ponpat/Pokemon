let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');

let p1Button = document.querySelector('#p1Button');
let p2Button = document.querySelector('#p2Button');

let resetButton = document.querySelector('#reset');

let playto = document.querySelector('#playto')

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

let p1 = {
    score : 0,
    button : document.querySelector('#p1Button'),
    display : document.querySelector('#p1Display')
}

let p2 = {
    score : 0,
    button : document.querySelector('#p2Button'),
    display : document.querySelector('#p2Display')
}

p1Button.addEventListener("click", function () {
    updateScore (p1,p2)
})

p2Button.addEventListener("click", function () {
    updateScore (p2,p1)
})
    
function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1
        if (player.score == winningScore) {
            isGameOver = true
            player.display.classList.add('winner')
            opponent.display.classList.add('loser')
            player.button.disable = true
            opponent.button.disable = true          
        }

        player.display.textContent = player.score
    }
}

resetButton.addEventListener('click', reset)

playto.addEventListener('change', function () {
    winningScore = Number(this.value)
    reset();
})

function reset() {
    isGameOver = false
    p1Score = 0
    p2Score = 0
    p1Display.textContent = p1Score
    p2Display.textContent = p2Score
    p1Display.classList.remove('loser','winner')
    p2Display.classList.remove('loser','winner')
}