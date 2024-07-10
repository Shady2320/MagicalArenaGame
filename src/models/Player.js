class Player {
    constructor(health, strength, attack) {
        // Validates and initializes player's health, strength, and attack attributes
        if (!Number.isInteger(health) || health <= 0) {
            throw new Error('Attributes must be positive integers');
        }
        if (!Number.isInteger(strength) || strength <= 0) {
            throw new Error('Attributes must be positive integers');
        }
        if (!Number.isInteger(attack) || attack <= 0) {
            throw new Error('Attributes must be positive integers');
        }
        this.health = health
        this.strength = strength
        this.attack = attack
    }

    // Rolls a dice to determine attack value(1-6)    
    rollDiceForAttack() {
        return Math.ceil(Math.random() * 6)
    }

    // Rolls a dice to determine defense value(1-6)
    rollDiceForDefense() {
        return Math.ceil(Math.random() * 6)
    }

    // Calculates attack damage based on dice roll
    calculateAttackDamage(roll) {
        return this.attack * roll
    }

    // Calculates defense strength based on dice roll
    calculateDefense(roll) {
        return this.strength * roll
    }

    // Reduces player's health by the damage received
    reduceHealth(damage) {
        this.health -= damage
        if (this.health < 0) {
            this.health = 0; // Ensure health never goes negative
        }
    }
}

module.exports = Player
