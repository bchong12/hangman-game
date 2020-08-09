const puzzle = document.getElementById('puzzle')
const guessesLeft = document.getElementById('guessesLeft')
let game1

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzle.innerHTML = ''

    const newGameArr = game1.getPuzzle().split('')
    newGameArr.forEach((letter) => {
        const newEl = document.createElement('span')
        newEl.textContent = letter.toUpperCase()
        newEl.className = 'spans'
        puzzle.appendChild(newEl)
    })
    guessesLeft.textContent = game1.getStatusMessage()
}
const startGame = async () => {
    const puzzle = await getPuzzle(3)
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()