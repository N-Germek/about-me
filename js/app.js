'use strict';

let score = 0;

function username() {
  let username = prompt('What is your name?');
  alert('Hello ' + username) + '!';
}
username();

function travel() {
  let travel = prompt('Do I like to travel?').toLowerCase();
  if (travel === 'yes' || travel === 'y') {
    score++;
    alert('Right on! I love to travel!');
  }
  else if (travel === 'no' || travel === 'n') {
    alert('Sorry, wrong. I love and need to travel.');
  }
  else {
    alert('Please answer ' + username + '.');
  }
}
travel();

function pets() {
  let pets = prompt('Do I have pets?').toLowerCase();
  if (pets === 'yes' || pets === 'y') {
    score++;
    alert('Yes and I love my furbabies!');
  }
  else if (pets === 'no' || pets === 'n') {
    alert('Nope, I have two oddball cats.');
  }
  else {
    alert('Please answer ' + username + '.');
  }
}
pets();

function adventures() {
  let adventures = prompt('Do I like to go on adventures?').toLowerCase();
  if (adventures === 'yes' || adventures === 'y') {
    score++;
    alert('Correct, the more impromptu, the better the adventure!');
  }
  else if (adventures === 'no' || adventures === 'n') {
    alert('Sorry, not quite right.');
  }
  else {
    alert('Well ' + username + ' what is your response?');
  }
}
adventures();

function country() {
  let country = prompt('Have I lived in another country?').toLowerCase();
  if (country === 'yes' || country === 'y') {
    score++;
    alert('You are right! Half of my family still lives outside of the USA.');
  }
  else if (country === 'no' || country === 'n') {
    alert('Aw, unfortunately, that is incorrect.');
  }
  else {
    alert('Please guess with a yes or no ' + username + '.');
  }
}
country();

function newPeople() {
  let newPeople = prompt('Do I like to meet new people?').toLowerCase();
  if (newPeople === 'yes' || newPeople === 'y') {
    score++;
    alert('Of course! New people mean new perspectives and things to learn from them!');
  }
  else if (newPeople === 'no' || newPeople === 'n') {
    alert('Sorry, not quite right.');
  }
  else {
    alert('Please answer ' + username + '.');
  }
}
newPeople();
console.log(score);


let guesses = 4;
let win = false;

function correctNumber() {
  let correctNumber = Math.ceil(Math.random() * 10);
  while (guesses && !win) {
    let userGuess = prompt('I\'m thinking of a number.');
    guesses--;
    userGuess = parseInt(userGuess);
    if (userGuess === correctNumber) {
      alert('You got it!');
      win === true;
      guesses = 0;
      score++;
    }
    else if (userGuess < correctNumber) {
      alert('Sorry ' + userGuess + ' too low.');
      alert(`You have ${guesses} guesses remaining.`);
    }
    else if (userGuess > correctNumber) {
      alert('Sorry ' + userGuess + ' too high.');
      alert(`You have ${guesses} guesses remaining.`);
    }
  }
}
correctNumber();

let tries = 6;
let winning = false;

function placesVisited() {
  let placesVisited = ['croatia', 'canada', 'germany', 'carribean', 'united states'];
  while (tries && !winning) {
    let userCountry = prompt('What is countries have I visited?').toLowerCase();
    tries--;
    for (let i = 0; i < placesVisited.length; i++) {
      let places = placesVisited[i];
      if (userCountry === places) {
        winning === true;
        tries = 0;
        alert('You are right!');
        score++;
      }
    }
  }
}
placesVisited();

alert('Congratulations, you got ' + score + ' correct!');
