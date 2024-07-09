const Match = require('./Match')

class Arena {
    constructor() {
        this.players = []
        this.matches = []
    }

    addPlayer(player) {
        this.players.push(player)
    }

    startMatch(player1Index, player2Index) {
        const player1 = this.players[player1Index]
        const player2 = this.players[player2Index]
        const match = new Match(player1, player2)
        // console.log(match)
        this.matches.push(match)

        console.log(`Match between Player ${player1Index + 1} and Player ${player2Index + 1} started!\n`);

        while (!match.isGameOver()) {
            match.changeTurn()
        }

        if (match.winner === player1) {
            console.log(`Player ${player1Index + 1} wins the game!\n`)
        } else {
            console.log(`Player ${player2Index + 1} wins the game!\n`)
        }
    }
}

module.exports = Arena
