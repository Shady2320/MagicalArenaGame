class Match {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
        if(this.player1.health < this.player2.health) {
            this.currentPlayer = this.player1
        } else {
            this.currentPlayer = this.player2
        }

        this.winner = null
    }
    changeTurn() {
        const attacker = this.currentPlayer
        let defender
    
        if(attacker === this.player1) {
            defender = this.player2
        } else {
            defender = this.player1
        }


        const attackRoll = attacker.rollDiceForAttack()
        const defenseRoll = defender.rollDiceForDefense()
        const attackDamage = attacker.calculateAttackDamage(attackRoll)
        const defenseStrength = defender.calculateDefense(defenseRoll)

        let finalDamage = attackDamage - defenseStrength
        if(finalDamage<0) {
            finalDamage = 0
        }
        defender.reduceHealth(finalDamage)

        console.log(`Attacker rolls ${attackRoll}, Defender rolls ${defenseRoll}`)
        console.log(`Attack damage: ${attackDamage}, Defense strength: ${defenseStrength}`)
        console.log(`Defender health reduced by ${finalDamage} to ${defender.health}\n`)

        if (defender.health <= 0) {
            this.winner = attacker
        } else {
            this.currentPlayer = defender
        }
    }

    isGameOver() {
        return this.winner !== null
    }
}

module.exports = Match
