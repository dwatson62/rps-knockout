Rock Paper Scissors KnockoutJS
=======================

[![Code Climate](https://codeclimate.com/github/dwatson62/rps-knockout/badges/gpa.svg)](https://codeclimate.com/github/dwatson62/rps-knockout) [![Build Status](https://travis-ci.org/dwatson62/rps-knockout.svg?branch=master)](https://travis-ci.org/dwatson62/rps-knockout)

![Screenshot](https://github.com/dwatson62/rps-knockout/blob/master/screenshot.png)

## Synopsis

This is my implementation of Rock Paper Scissors Lizard Spock using Knockout JS. The user can play against the computer using a graphical user interface in a best of five format. The computer chooses at random by default, but by switching tactical mode on the computer will choose the move that won or drew from the previous round. I have used a simple Express server to serve the game.

This was my first introduction to using the Knockout framework, so I needed to pick it up quickly. I have had some practice at using Angular and this experience was very useful for this project. However I still have much more to learn about Knockout and look forward to using it more in the future, and would like to read more about the pros and cons of it over Angular.

I have made sure to design this program to be extendable with minimal work. For example, if the user would like to increase or decrease the number of weapons available in the game, they merely need to update the gameRules object in src/rps.js and the rest of the program and the view will update automatically. Additionally, if the number of rounds changed from being best of 5, the user would only have to change the variable value on line 13 in src/rps.js.

I particularly struggled with testing the Knockout ViewModel, as the game relies upon a random number generator to determine the computers move. In other tests I was able to use a Spy to control this, but I was not able to do so within for the ViewModel so my tests are not as comprehensive as I would like. However, the backend Game object I was able to test quite rigorously.

## Program Layout

- One View ``` views/index.ejs ```
- One Model ``` src/rps.js ```
- One ViewModel ``` src/application.js ```
- CSS styling ``` public/stylesheets/style.css ``` (along with bootstrap grid layout)
- Two test files in ``` spec ```

## Technologies Used

- Javascript
- Knockout JS, Express, Node
- Karma, Jasmine

## Installation

From the command line:

- ``` git clone https://github.com/dwatson62/rps-knockout ```
- ``` cd rps-knockout ```
- ``` npm start ``` (this will download all npm and bower packages, and launch the server)
- Visit [http://localhost:3000](http://localhost:3000)

#### Tests

For unit tests:

- ``` npm test ```
