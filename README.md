# Tic-Tac-Toe

## Description

The game should be designed entirely in Javascript with a Single Page Application as frontend and an API as backend. The target of the software is to be able to play with the API a full game of Tic-Tac-Toe with the initial movement performed by the machine. In our development workflow we strongly encourage elegant solutions to software issues or features. 

## Requirements of the frontend

- The frontend should be a single page application (e.g Vue, React, Angular…) 
- Should be developed entirely in Javascript/HTML/CSS 
- CSS pre-processors can be used (SASS/LESS) 
- There is no restriction on the technology/framework/libraries used

## Game workflow

- Restart button: Will reset the game to the initial state.
- The machine always start the first movement on the center, the user is always second in turn.
- After each user movement, the machine will perform a movement getting the position from the API. 
- The game cells will have an identifier (e.g A, B, C, D, E, F, G, H, I).

## Requirements of the API

- The API should be developed in any NodeJS framework 
- It must have the endpoint "/movement", which should return the next movement of the machine player. On the request (by GET or POST) you should send the current status of the game. The API should return the best movement possible for the current status.