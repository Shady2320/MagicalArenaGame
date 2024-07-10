# Magical Arena

## Overview

Magical Arena is a simple JavaScript project that simulates a battle between players in an arena. It includes classes for players, the arena, and matches, allowing for the creation and management of battles with dice rolls determining attack and defense outcomes.

## Files and Descriptions

- **app.js**: Initializes players and starts a match in the arena.
- **Player.js**: Defines the `Player` class with health, strength, and attack attributes and methods for combat mechanics.
- **Arena.js**: Manages players and initiates matches in the arena.
- **Match.js**: Simulates a match between two players, handling turns and determining the winner.

## Test Files

- **player.test.js**: Contains unit tests for the `Player` class methods.
- **arena.test.js**: Contains unit tests for the `Arena` class functionality.
- **match.test.js**: Contains unit tests for the `Match` class logic.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Shady2320/MagicalArenaGame.git
    ```

2. Navigate to the project directory:
    ```bash
    cd src
    ```

### Running the Application

To start a match in the Magical Arena:

1. Ensure you're in the project directory (`src`):
    ```bash
    cd src
    ```

2. Run the application:
    ```bash
    node app.js
    ```

    This command initializes players and starts a match in the arena. You'll see the battle simulation in action based on the logic defined in the project files.

### Running Tests

1. Install dependencies:
    ```bash
    npm install jest
    ```

2. Run tests:
    ```bash
    npm test
    ```

    This will execute the unit tests defined in `player.test.js`, `arena.test.js`, and `match.test.js`, providing feedback on the functionality of your classes.
