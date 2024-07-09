# Magical Arena 

## Overview

Magical Arena is a simple JavaScript project that simulates a battle between players in an arena. It includes classes for players, the arena, and matches, allowing for the creation and management of battles with dice rolls determining attack and defense outcomes.

## Files and Descriptions

- **app.js**: Initializes players and starts a match in the arena.
- **Player.js**: Defines the `Player` class with health, strength, and attack attributes and methods for combat mechanics.
- **Arena.js**: Manages players and initiates matches in the arena.
- **Match.js**: Simulates a match between two players, handling turns and determining the winner.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/arena-battle-simulator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd arena-battle-simulator
    ```

### Running the Application

1. Run the application:
    ```bash
    node app.js
    ```
2. Observe the match progress and final result in the console output.

## Project Structure

```plaintext
.
├── app.js
├── models
│   ├── Player.js
│   ├── Arena.js
│   └── Match.js
└── README.md
