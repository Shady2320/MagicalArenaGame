class Player {
    constructor(health, strength, attack) {
        this.health = health
        this.strength = strength
        this.attack = attack
    }

    rollDiceForAttack() {
        return Math.ceil(Math.random() * 6)
    }

    rollDiceForDefense() {
        return Math.ceil(Math.random() * 6)
    }

    calculateAttackDamage(roll) {
        return this.attack * roll
    }

    calculateDefense(roll) {
        return this.strength * roll
    }

    reduceHealth(damage) {
        this.health -= damage
    }
}

module.exports = Player
