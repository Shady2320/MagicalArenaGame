class Match {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2

        // Determine the current player based on lower health
        if(this.player1.health < this.player2.health) {
            this.currentPlayer = this.player1
        } else {
            this.currentPlayer = this.player2
        }

        this.winner = null
    }

    // Method to handle a turn change, where the current player attacks and the other defends
    changeTurn() {
        const attacker = this.currentPlayer
        let defender
    
        // Determine the defender
        if(attacker === this.player1) {
            defender = this.player2
        } else {
            defender = this.player1
        }

        // Roll dice for attack value
        const attackRoll = attacker.rollDiceForAttack()

        // Roll dice for defense value
        const defenseRoll = defender.rollDiceForDefense()

        // Calculate attack damage
        const attackDamage = attacker.calculateAttackDamage(attackRoll)

        // Calculate defense strength
        const defenseStrength = defender.calculateDefense(defenseRoll)

        // Calculate final damage after defense and ensuring damage is not negative
        let finalDamage = attackDamage - defenseStrength
        if(finalDamage<0) {
            finalDamage = 0
        }
        defender.reduceHealth(finalDamage) // Reduce defender's health by final damage

        // Check if the defender's health is zero or less to determine the winner
        if (defender.health <= 0) {
            this.winner = attacker
        } else {
            this.currentPlayer = defender
        }

        // Determine player labels for logging
        let attackerLabel, defenderLabel
        if (attacker === this.player1) {
            attackerLabel = 'Player1 (attacker)'
        } else {
            attackerLabel = 'Player2 (attacker)'
        }
        if (defender === this.player1) {
            defenderLabel = 'Player1 (defender)'
        } else {
            defenderLabel = 'Player2 (defender)'
        }

        // Log attack and defense details
        console.log(`${attackerLabel} rolls ${attackRoll}, ${defenderLabel} rolls ${defenseRoll}`)
        console.log(`Attack damage: ${attackDamage}, Defense strength: ${defenseStrength}`)
        console.log(`${defenderLabel} health reduced by ${finalDamage} to ${defender.health}\n`)

    }

    // Method to check if the game is over (if there's a winner)
    isGameOver() {
        return this.player1.health <= 0 || this.player2.health <= 0
    }
}

module.exports = Match
