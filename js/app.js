'use strict';

let score = 0;
// global variable can be used anywhere in the code. local variables can only be used for their contained function. usually contained in the top like Head in HTML.


//console.log('Hello World');
// console log finally responded with correct messaging. //

function username(){
let username = prompt('What is your name?');
alert('Hello ' + username) + '!';
}
username();

function travel(){
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
}
travel();

// first question after adressing user's name //

function pets(){
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
}
pets();
// second question addressed completed //
// reminder that after let variable is entered, prompt for user will be made to ask user next question. //
// console.log will return with the answer to the string based on the username's response. //

function adventures(){
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
}
adventures();
// third question with new variable declared. same series of results should appear on console log based on response. //

function country(){
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
}
country();
// 

function newPeople(){
let newPeople = prompt('Do I like to meet new people?').toLowerCase();
if (newPeople === 'yes' || newPeople === 'y') {
  score++;
  //console.log('Of course! New poeple mean new perspectives and things to learn from them!');
  alert('Of course! New people mean new perspectives and things to learn from them!');
}
else if (newPeople === 'no' || newPeople === 'n') {
  //console.log('Sorry, not quite right.');
  alert('Sorry, not quite right.');
}
else {
  //console.log('Please answer ' + username + '.');
  alert('Please answer ' + username + '.');
}
}
newPeople();
// all questions and code console.logged out, then changed console.log to alert and retested code.//
// finally successful for Lab 2 with conditional statements.//

// User question to ask user on site will be "Guess which countries I have already visited? Good luck!" //

// side note: word wrap is moving the line of code to the next line. option z.
//adding one to the score. like math add the score before giving the answer.
console.log(score);

// Lines 99 through 109 on are commented out until I can properly make my code work so I don't mess up what I finally understood of my prior code. //

let guesses = 4;
let win = false;

function correctNumber(){
let correctNumber = Math.ceil(Math.random() * 10);
// Math.random is generating random number as answer and math.ceil tells the random number to round up to the nearest whole number. Math.floor rounds down. adding the * (multiplication) and the 10 tells that it will be between 0 and 10.
while (guesses && !win) {
  //start of my while loop and my code reads as:
  // while guesses are available up to 4 and win is NOT true.
  let userGuess = prompt('I\'m thinking of a number.');
  // prompt the user with an escape character to guess a number between 1 and 10.
  guesses--;
  // code will calculate one less guess
  userGuess = parseInt(userGuess);
  // code converts user guesses into a number from a string.
  if (userGuess === correctNumber) {
    // code runs that if user guesses correct number they will be alerted as below with You got this.
    alert('You got it!');
    // code will check and evaluate user's guess to the random number chosen
    win === true;
    guesses = 0;
    // code will add to the score.
    score++;
  }
  else if (userGuess < correctNumber) {
    // if users guess is less then the correct number, the alert will respond with "sorry" and the users guess and "too  low"
    alert('Sorry ' + userGuess + ' too low.');
    alert(`You have ${guesses} guesses remaining.`);
    // then it will alert the user with how many guesses they have remaining to get it correct.
  }
  // this will do the same as the above yet it will alert the user that they guessed too high. spelled out it reads see below.
  else if (userGuess > correctNumber) {
    // otherwise if the user guess is higher then the correct number
    alert('Sorry ' + userGuess + ' too high.');
    // this will alert the user that sorry, their guess is too high.
    alert(`You have ${guesses} guesses remaining.`);
    // this will then alert the user to how many guesses they have left.
  }
  // end of the while loop.
}
}
correctNumber();
// my initial question that I couldn't get to run properly: Code for  for array with answer to "How many countries have I visited?" let FavPlaces = ['Croatia', 'Canada', 'Germany', 'Carribean', 'United States'];

let tries = 6;
// six guesses
let winning = false;

function placesVisited(){
let placesVisited = ['croatia', 'canada', 'germany', 'carribean', 'united states'];
// array of places visited with croatia being index zero, canada being index 1 etc.
while (tries && !winning) {
  // while user has guesses and they are not winning, prompt user
  let userCountry = prompt('What is countries have I visited?').toLowerCase();
  // count down guesses that user gets
  tries--;
  // this will check the user answer versus my places visited array by checking each place indivisually based on the position in the array
  for (let i = 0; i < placesVisited.length; i++) {
    // creating places as a new variable to equate index to placesVisited
    let places = placesVisited[i];
    // this will check the user entry to verify it is one of the indexes listed above
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
// this will alert the user that they have completed the quiz and will provide to them the end score. 
// random notes helpful to retain meaning: curly brackets contain executed code that runs while a statement is true.
// random notes helpful to retain meaning: parentheses contain information.
