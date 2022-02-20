'use strict';

//console.log('Hello World');
// console log finally responded with correct messaging. //

let username = prompt('What is your name?').toUpperCase();
alert('Hello ' + username) + '!';

let travel = prompt('Do I like to travel?').toLowerCase();
if (travel === 'yes' || travel === 'y') {
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
// all questions and code consel.logged out, then changed consel.log to alert and retest4ed code.//
// finally successful for Lab 2 with conditional statements.//
