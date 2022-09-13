"use strict";

console.log("Pleeease don't deactivate me!");

let correctAnswers = 0;

let visitorName = prompt("What is your name");

while (visitorName === "") {
  visitorName = prompt("Oh please...What is your name?");
}

alert(`Greetings ${visitorName}! Let's play a game!`);

let visitorGuessOne = prompt('Is Superman my favorite DC hero?').toLowerCase();

if (visitorGuessOne === 'n' || visitorGuessOne === 'no') {
  alert('Correct!');
  ++correctAnswers;
} else {
  alert('Nope.  Who do you think I am!? Next question');
}

let visitorGuessTwo = prompt('Do I like green eggs and ham?').toLowerCase();

if (visitorGuessTwo === 'n' || visitorGuessTwo === 'no') {
  alert('Nope. I will eat them in a house.  I will eat them with a mouse.  I will eat them here or there.  I will eat them anywhere!');
} else {
  alert('Correct.');
  ++correctAnswers;
}

let visitorGuessThree = prompt('Is my favorite band Nirvana?').toLowerCase();

if (visitorGuessThree === 'n' || visitorGuessThree === 'no') {
  alert('Correct.');
  ++correctAnswers;
} else {
  alert('Nope. There is no you there is only me.');
}

let visitorGuessFour = prompt('Would I go to space?').toLowerCase();

if (visitorGuessFour === 'n' || visitorGuessFour === 'no') {
  alert('Nope. The Force is not strong with you.');
  
} else {
  alert('Correct.');
  ++correctAnswers;
}

let visitorGuessFive = prompt('Can I swim?').toLowerCase();

if (visitorGuessFive === 'n' || visitorGuessFive === 'no') {
  alert('Nope. Did you think I was just going back and forth with yes or no?');
  
} else {
  alert('Correct.');
  ++correctAnswers;
}

alert(`${visitorName}, you have answered ${correctAnswers} correctly.`);
if(correctAnswers > 3){
  alert('You\'re definitely getting a Christmas card this year!');
} else if(correctAnswers ===0){
  alert('At least you got your name right. :/');
}else {
  alert('You seem familiar, but I can\'t quite place you.');
}