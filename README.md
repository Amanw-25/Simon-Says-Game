# Simon Says Game

## Overview

Simon Says is a memory-based game that challenges players to repeat a sequence of colors that are flashed in a specific order. As the game progresses, the sequences get longer, and the difficulty increases. The game also tracks and displays the highest score achieved.

## Features

- **Color Sequence**: The game generates a random sequence of colors that the player must replicate.
- **High Score Tracking**: The highest score is saved and displayed using browser `localStorage`.
- **Flashing Effects**: Buttons flash in white and light green to indicate game and user interactions.
- **Responsive Design**: The game is optimized for both desktop and mobile devices.

## Technologies

- **HTML**: Markup structure for the game interface.
- **CSS**: Styling for the game layout and design.
- **JavaScript**: Game logic, including sequence generation, user interaction, and high score management.

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge)

### Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Open the Project**

   Simply open the `index.html` file in your preferred web browser.

### Usage

1. **Start the Game**: Press any key to begin the game.
2. **Follow the Sequence**: Watch the buttons flash in a sequence and click the buttons in the same order to continue.
3. **Game Over**: If you make a mistake, the game will display your score and update the highest score if necessary. Press any key to restart the game.

## File Structure

- `index.html`: Main HTML file containing the structure of the game.
- `simon.css`: CSS file for styling the game.
- `simon.js`: JavaScript file containing the game logic and interactions.
