frontend-nanodegree-arcade-game
===============================
# Udacity-FEND Memory Game Project

## Table of Contents

* [Project Summary](#project-summary)
* [How the Game works](#how-the-game-works)
* [To play](#to-play)


## Project Summary
The Classic Arcade Game Project requires object-oriented JavaScript skills. Task was to  create interactive objects including players and enemies with provided visual assets and a game loop engine

## How the Game works
This game you has a Player and Enemies (Bugs).
The goal of the player is to reach the water, without colliding into any one of the enemies.
The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene.

Initially, the success counter is 0. The game starts when the keyboard keys: up, down, left &, right is pressed so that the player moves and reaches its goal without colliding into any one of the enemies.

The player's position resets back to start position in the following two cases:
1. Once a the player collides with an enemy, the game is reset and the player moves back to the start square.
Also, the success counter resets to 0, when the player collides with an enemy.
2. Once the player reaches the water the game is won.
  And, the success counter increments by 1.

## To play

Go to [repository link](https://github.com/geetakri/fend-project-arcade-game.git). Either clone or download the repository to your local computer and open the index.html file to your browser.
