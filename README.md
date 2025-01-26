# Pokedex App

This is a Pokedex application built with **Ionic Angular**. The app allows users to view detailed information about Pokémon, including their stats, abilities, moves, types, and cries. The app is fully responsive and provides an interactive user interface.

## Features

- **Pokémon Name and Sprite**: Displays the Pokémon's name, sprite, height, weight, and base experience.
- **Pokémon Types**: Lists the types of the Pokémon.
- **Pokémon Abilities**: Lists the Pokémon's abilities.
- **Pokémon Stats**: Displays the stats of the Pokémon.
- **Pokémon Moves**: Shows the moves a Pokémon can learn, by the level learned.
- **Cries Section**: Includes playable audio for the latest and legacy cries of the Pokémon.
- **Responsive Design**: Adjusts the layout for both desktop and mobile screens.

## Technologies Used

- **Ionic Angular**: Framework for building cross-platform mobile applications.
- **TypeScript**: Strongly typed language for JavaScript.
- **HTML5 & SCSS**: For layout and styling.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [Ionic CLI](https://ionicframework.com/docs/cli/installation)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mryusuf/pokedex-angular
   cd pokedex-angular
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ionic serve
   ```

   This will open the app in your default web browser.

4. To run the iOS / Android project:

   ```bash
   ionic capacitor sync ios # or android
   ionic capacitor run ios # or android
   ```

### Project Structure

```
.
├── src
│   ├── app
│   │   ├── favorite
│   │   ├── home
│   │   ├── pokemon-detail
│   │   ├── tabs
│   │   ├── services
│   │   │   └── api.service.ts
│   │   │   └── favorite.service.ts
│   │   │   └── storage.service.ts
│   │   └── app.module.ts
│   └── assets
└── README.md
```

## How to Use

1. Navigate through the app to select a Pokémon.
2. View detailed information such as types, stats, and abilities.
3. Play the Pokémon cries using the provided audio controls.

## Future Improvements

- Filter pokemon by types (on progress)
- Add search functionality to find Pokémon by name or ID.
- Add dark mode support.
