const Match = require('../models/Match')
const Player = require('../models/Player')

// Mock console.log to prevent output during tests
beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {})
})

// Restore original console.log after tests
afterEach(() => {
    jest.restoreAllMocks()
})

// Test to verify Match initializes with correct players
test('Match initializes with correct players', () => {
    const player1 = new Player(100, 10, 20)
    const player2 = new Player(80, 15, 25)
    const match = new Match(player1, player2)
    expect(match.player1).toBe(player1)
    expect(match.player2).toBe(player2)
})

// Test to verify Match determines first player correctly
test('Match determines first player correctly', () => {
    const player1 = new Player(100, 10, 20)
    const player2 = new Player(80, 15, 25)
    const match = new Match(player1, player2)
    expect(match.currentPlayer).toBe(player2)
})

// Test to verify isGameOver returns true when a player has no health left
test('isGameOver returns true when a player has no health left', () => {
    const player1 = new Player(100, 10, 20)
    const player2 = new Player(80, 15, 25)
    const match = new Match(player1, player2)

    // Simulate player2 reducing player1's health to 0
    player1.reduceHealth(100)
    match.changeTurn() // This should set the winner and end the game

    expect(match.isGameOver()).toBe(true)
    expect(match.winner).toBe(player2)
})
