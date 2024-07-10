const Match = require('./Match')

class Arena {
    constructor() {
        this.players = [] // Initializes an empty array to hold players
        this.matches = [] // Initializes an empty array to hold matches
    }

    // Adds a player to the players array
    addPlayer(player) {
        this.players.push(player)
    }

    // Starts a match between two players identified by their indices
    startMatch(player1Index, player2Index) {

        if (player1Index < 0 || player1Index >= this.players.length || player2Index < 0 || player2Index >= this.players.length) {
            throw new Error('Invalid player indices provided')
        }

        const player1 = this.players[player1Index]
        const player2 = this.players[player2Index]

        // Creates a new Match instance with the two players
        const match = new Match(player1, player2)

        // Adds the match to the matches array
        this.matches.push(match)

        console.log(`Match between Player ${player1Index + 1} and Player ${player2Index + 1} started!\n`);

        // Simulates the match by alternating turns until the game is over
        while (!match.isGameOver()) {
            match.changeTurn()
        }

        // Logs the winner of the match
        if (match.winner === player1) {
            console.log(`Player ${player1Index + 1} wins the game!\n`)
        } else {
            console.log(`Player ${player2Index + 1} wins the game!\n`)
        }
    }
}

module.exports = Arena
