const Player = require('./models/Player')
const Arena = require('./models/Arena')

const arena = new Arena()
const playerA = new Player(50, 5, 10)
const playerB = new Player(100, 10, 5)

arena.addPlayer(playerA)
arena.addPlayer(playerB)
arena.startMatch(0, 1)



console.log(arena.matches[0])