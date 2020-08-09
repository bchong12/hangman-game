

class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('') //[c,a,t]
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = [] //['c']
        this.status = 'playing'
    }

    getPuzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === " ") {
                puzzle = puzzle + letter
            } else {
                puzzle = puzzle + '*'
            }
        })

        return puzzle
    }

    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }

    getStatusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else {
            return 'Congratulations! You guessed the word.'
        }
    }

    makeGuess(letter) {
        letter = letter.toLowerCase()
        const isUnique = !this.guessedLetters.includes(letter)
        const badGuess = !this.word.includes(letter)

        if (this.status !== 'playing') {
            return
        }

        if (isUnique) {
            this.guessedLetters.push(letter)
        }

        if (isUnique && badGuess) {
            this.remainingGuesses--
        }

        if (this.remainingGuesses < 0) {
            this.remainingGuesses = 0
        }

        this.calculateStatus()
    }
}


