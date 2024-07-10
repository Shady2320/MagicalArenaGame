const Arena = require('../models/Arena')
const Player = require('../models/Player')
const Match = require('../models/Match')

// Mock console.log to prevent output during tests
beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {})
})

// Restore original console.log after tests
afterEach(() => {
    jest.restoreAllMocks()
})


// Test that Arena initializes with empty players and matches arrays
test('Arena initializes with empty players and matches arrays', () => {
    const arena = new Arena();
    expect(arena.players).toEqual([])
    expect(arena.matches).toEqual([])
})

// Test that players are added correctly to Arena
test('Arena adds players correctly', () => {
    const arena = new Arena()
    const player = new Player(100, 10, 20)
    arena.addPlayer(player)
    expect(arena.players.length).toBe(1)
    expect(arena.players[0]).toBe(player)
})

// Test that startMatch creates a new match and adds it to matches array
test('startMatch creates a new match and adds it to matches array', () => {
    const arena = new Arena()
    const player1 = new Player(100, 10, 20)
    const player2 = new Player(80, 15, 25)
    arena.addPlayer(player1)
    arena.addPlayer(player2)

    arena.startMatch(0, 1)
    
    expect(arena.matches.length).toBe(1)
    expect(arena.matches[0]).toBeInstanceOf(Match)
    expect(arena.matches[0].player1).toBe(player1)
    expect(arena.matches[0].player2).toBe(player2)
})

// Test that startMatch handles player indices correctly
test('startMatch handles player indices correctly', () => {
    const arena = new Arena()
    const player1 = new Player(100, 10, 20)
    const player2 = new Player(80, 15, 25)
    const player3 = new Player(90, 12, 22)
    arena.addPlayer(player1)
    arena.addPlayer(player2)
    arena.addPlayer(player3)

    arena.startMatch(1, 2)

    expect(arena.matches.length).toBe(1)
    expect(arena.matches[0].player1).toBe(player2)
    expect(arena.matches[0].player2).toBe(player3)
})

// Test that startMatch simulates a match and determines a winner
test('startMatch simulates a match and determines a winner', () => {
    const arena = new Arena()
    const player1 = new Player(100, 10, 20)
    const player2 = new Player(80, 15, 25)
    arena.addPlayer(player1)
    arena.addPlayer(player2)

    arena.startMatch(0, 1)

    const match = arena.matches[0]
    expect(match.isGameOver()).toBe(true)
    expect(match.winner).not.toBe(null)
    expect([player1, player2]).toContain(match.winner)
})
