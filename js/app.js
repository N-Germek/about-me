'use strict';

let score = 0;
// global variable can be used anywhere in the code. local variables can only be used for their contained function. usually contained in the top like Head in HTML.


//console.log('Hello World');
// console log finally responded with correct messaging. //

let username = prompt('What is your name?');
alert('Hello ' + username) + '!';

let travel = prompt('Do I like to travel?').toLowerCase();
if (travel === 'yes' || travel === 'y') {
  score++;
  //console.log('Right on! I love to travel!');
  alert('Right on! I love to travel!');
}
else if (travel === 'no' || travel === 'n') {
  //console.log('Sorry, wrong. I love and need to travel.');
  alert('Sorry, wrong. I love and need to travel.');
}
else {
  //console.log('Please answer ' + username + '.');
  alert('Please answer ' + username + '.');
}

// first question after adressing user's name //

let pets = prompt('Do I have pets?').toLowerCase();
if (pets === 'yes' || pets === 'y') {
  score++;
  //console.log('Yes and I love my furbabies!');
  alert('Yes and I love my furbabies!');
}
else if (pets === 'no' || pets === 'n') {
  //console.log('Nope, I have two oddball cats.');
  alert('Nope, I have two oddball cats.');
}
else {
  //console.log('Please answer ' + username + '.');
  alert('Please answer ' + username + '.');
}

// second question addressed completed //
// reminder that after let variable is entered, prompt for user will be made to ask user next question. //
// console.log will return with the answer to the string based on the username's response. //

let adventures = prompt('Do I like to go on adventures?').toLowerCase();
if (adventures === 'yes' || adventures === 'y') {
  score++;
  //console.log('Correct, the more impromptu, the better the adventure!');
  alert('Correct, the more impromptu, the better the adventure!');
}
else if (adventures === 'no' || adventures === 'n') {
  //console.log('Sorry, not quite right.');
  alert('Sorry, not quite right.');
}
else {
  //console.log('Well ' + username + 'what is your response?');
  alert('Well ' + username + ' what is your response?');
}

// third question with new variable declared. same series of results should appear on console log based on response. //

let country = prompt('Have I lived in another country?').toLowerCase();
if (country === 'yes' || country === 'y') {
  score++;
  //console.log('You are right! Half of my family still lives outside of the USA.');
  alert('You are right! Half of my family still lives outside of the USA.');
}
else if (country === 'no' || country === 'n') {
  //console.log('Aw, unfortunately, that is incorrect.');
  alert('Aw, unfortunately, that is incorrect.');
}
else {
  //console.log('Please guess with a yes or no ' + username + '.');
  alert('Please guess with a yes or no ' + username + '.');
}

// 

let newPeople = prompt('Do I like to meet new people?').toLowerCase();
if (newPeople === 'yes' || newPeople === 'y') {
  score++;
  //console.log('Of course! New poeple mean new perspectives and things to learn from them!');
  alert('Of course! New poeple mean new perspectives and things to learn from them!');
}
else if (newPeople === 'no' || newPeople === 'n') {
  //console.log('Sorry, not quite right.');
  alert('Sorry, not quite right.');
}
else {
  //console.log('Please answer ' + username + '.');
  alert('Please answer ' + username + '.');
}
// all questions and code console.logged out, then changed console.log to alert and retested code.//
// finally successful for Lab 2 with conditional statements.//

// User question to ask user on site will be "Guess which countries I have already visited? Good luck!" //

// side note: word wrap is moving the line of code to the next line. option z.
//adding one to the score. like math add the score before giving the answer.
console.log(score);
alert('Congratulations, you got ' + score + ' correct!');

// Lines 99 through 109 on are commented out until I can properly make my code work so I don't mess up what I finally understood of my prior code. //

let guesses = 4;
let win = false;
let correctNumber = Math.ceil(Math.random() * 10);
// Math.random is generating random number as answer and math.ceil tells the random number to round up to the nearest whole number. Math.floor rounds down. adding the * (multiplication) and the 10 tells that it will be between 0 and 10.
while (guesses && !win) {
  let userGuess = prompt('I\'m thinking of a number between 1 and 10');
  if (userGuess === correctNumber) {
    alert('You got it!');
    win = true;
  }
  else if (userGuess < correctNumber) {
    alert('Sorry ' + userGuess + ' Too low.');
    guesses--;
    alert(`You have ${guesses} guesses remaining.`);
  }
  else if (userGuess > correctNumber) {
    guesses--;
    alert('Sorry ' + userGuess + ' Too high.');
    alert(`You have ${guesses} guesses remaining.`);
  }
}

// Code for  for array with answer to "What countries have I visited?" let FavPlaces = ['Croatia', 'Canada', 'Germany', 'Carribean', 'United States'];
