'use strict';

console.log('Hello World');

let username = prompt('What is your name?').toUpperCase();
alert('Hello ' + username) + '!';

let travel = prompt('Do I like to travel?').toLowerCase();
if (travel === 'yes' || travel === 'y') {
  console.log('Right on! I love to travel');
}
else if (travel === 'no' || travel === 'n') {
  console.log('Sorry, wrong. I love and need to travel.');
}
else {
  console.log('Please answer ' + username + '.');
}
