# Tic-Tac-Toe

[https://en.wikipedia.org/wiki/Tic-tac-toe]

## Description

The target of this test is to create a Tic-Tac-Toe game with a machine "AI". The user should be able to play a game against the machine and
the machine should try to win the game. The initial move is always performed by the machine on the center position.

The game should be designed entirely in Javascript, with a SPA as frontend and an API as backend.

The API will recieve the status of a Tic-Tac-Toe game and must return the best next move, trying to win the user.

In our development workflow we strongly encourage elegant solutions to software issues or features as well as testing.

## Requirements of the frontend

- The frontend should be a SPA (e.g Vue, React, Angular…). React and Vue ones are available in the folders (tictactoe-[react/vue])
- There is no restriction on the technology/framework/libraries used.

## Game workflow

- Restart button: Will reset the game to the initial state.
- The machine always start the first movement on the center, the user is always second in turn.
- After each user movement, the machine will perform a movement getting the next position from the API. 
- The game cells must be someway identified.

## Requirements of the API

- The API should be developed in ExpressJS. 
- It must have the endpoint "/movement", which should return the next movement of the machine player. On the request (by POST) you should send the current status of the game. The API should return the best movement possible for the given status.
- The movement logic should be tested.

## Setup

Requirements: NodeJS (LTS)

[https://nodejs.org/dist/v16.15.1/node-v16.15.1.pkg]

### API

```
cd api
npm install
npm run start
```

### Front

React/Vue

```
cd [tictactoe-react|tictactoe-vue]
npm install
npm run dev
```
