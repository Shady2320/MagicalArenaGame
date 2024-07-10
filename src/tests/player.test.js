const Player = require('../models/Player')

// Mock console.log to prevent output during tests
beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {})
})

// Restore original console.log after tests
afterEach(() => {
    jest.restoreAllMocks();
})


// Test to verify Player initializes with correct attributes
test('Player initializes with correct attributes', () => {
    const player = new Player(100, 10, 20)
    expect(player.health).toBe(100)
    expect(player.strength).toBe(10)
    expect(player.attack).toBe(20)
})

// Test to verify Player rolls dice for attack within the correct range
test('Player rolls dice for attack within range', () => {
    const player = new Player(100, 10, 20)
    const roll = player.rollDiceForAttack()
    expect(roll).toBeGreaterThanOrEqual(1)
    expect(roll).toBeLessThanOrEqual(6)
})

// Test to verify Player rolls dice for defense within the correct range
test('Player rolls dice for defense within range', () => {
    const player = new Player(100, 10, 20)
    const roll = player.rollDiceForDefense()
    expect(roll).toBeGreaterThanOrEqual(1)
    expect(roll).toBeLessThanOrEqual(6)
})

// Test to verify Player calculates attack damage correctly
test('Player calculates attack damage correctly', () => {
    const player = new Player(100, 10, 20)
    const damage = player.calculateAttackDamage(3)
    expect(damage).toBe(60)
})

// Test to verify Player calculates defense strength correctly
test('Player calculates defense strength correctly', () => {
    const player = new Player(100, 10, 20)
    const damage = player.calculateDefense(3)
    expect(damage).toBe(30)
})

// Test to verify Player reduces health correctly
test('Player reduces health correctly', () => {
    const player = new Player(100, 10, 20)
    player.reduceHealth(30)
    expect(player.health).toBe(70)
})

// Test to verify Player's health, strength, and attack are positive integers
test('Player health, strength, and attack are positive integers', () => {
    const player = new Player(100, 10, 20)
    expect(Number.isInteger(player.health)).toBe(true)
    expect(player.health).toBeGreaterThan(0)

    expect(Number.isInteger(player.strength)).toBe(true)
    expect(player.strength).toBeGreaterThan(0)

    expect(Number.isInteger(player.attack)).toBe(true)
    expect(player.attack).toBeGreaterThan(0)
})

// Test to verify Player does not accept non-positive values for attributes
test('Player does not accept non-positive values for attributes', () => {
    expect(() => new Player(-10, 10, 20)).toThrow('Attributes must be positive integers')
    expect(() => new Player(100, -10, 20)).toThrow('Attributes must be positive integers')
    expect(() => new Player(100, 10, -20)).toThrow('Attributes must be positive integers')
    expect(() => new Player(0, 10, 20)).toThrow('Attributes must be positive integers')
    expect(() => new Player(100, 0, 20)).toThrow('Attributes must be positive integers')
    expect(() => new Player(100, 10, 0)).toThrow('Attributes must be positive integers')
})
