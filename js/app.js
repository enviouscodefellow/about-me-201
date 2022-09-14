"use strict";

console.log("Pleeease don't deactivate me!");

let correctAnswers = 0;

let visitorName = prompt("What is your name").toLowerCase();

while (visitorName === "") {
  visitorName = prompt("Oh please...What is your name?");
}

if (visitorName === 'nick' || visitorName === 'nicholas'){
  alert(`That's my name! Here's 2 free points. Goodluck`);
  correctAnswers = 2;
}

alert(`Greetings ${visitorName}! Let's play a game!`);

alert('Please enter your responses in "Yes" or "No" format. Y or N may also be used');

let visitorGuessOne = prompt('Is Superman my favorite DC hero?').toLowerCase();

if (visitorGuessOne === 'n' || visitorGuessOne === 'no') {
  alert('Correct!');
  ++correctAnswers;
} else if (visitorGuessOne === 'y' || visitorGuessOne === 'yes'){
  alert('Nope.  Who do you think I am!? Next question');
} else{
  alert('Please enter your responses in "Yes" or "No" format. Y or N may also be used');
}

let visitorGuessTwo = prompt('Do I like green eggs and ham?').toLowerCase();

if (visitorGuessTwo === 'n' || visitorGuessTwo === 'no') {
  alert('Nope. I will eat them in a house.  I will eat them with a mouse.  I will eat them here or there.  I will eat them anywhere!');
} else if (visitorGuessTwo === 'y' || visitorGuessTwo === 'yes'){
  alert('Correct.');
  ++correctAnswers;
} else {
  alert('Please enter your responses in "Yes" or "No" format. Y or N may also be used');
}

let visitorGuessThree = prompt('Is my favorite band Nirvana?').toLowerCase();

if (visitorGuessThree === 'n' || visitorGuessThree === 'no') {
  alert('Correct.');
  ++correctAnswers;
} else if (visitorGuessThree === 'y' || visitorGuessThree === 'yes'){
  alert('Nope. There is no you there is only me.');
} else {
  alert('Please enter your responses in "Yes" or "No" format. Y or N may also be used');
}

let visitorGuessFour = prompt('Would I go to space?').toLowerCase();

if (visitorGuessFour === 'n' || visitorGuessFour === 'no') {
  alert('Nope. The Force is not strong with you.');
  
} else if (visitorGuessFour === 'y' || visitorGuessFour === 'yes'){
  alert('Correct.');
  ++correctAnswers;
} else {
  alert('Please enter your responses in "Yes" or "No" format. Y or N may also be used');
}

let visitorGuessFive = prompt('Can I swim?').toLowerCase();

if (visitorGuessFive === 'n' || visitorGuessFive === 'no') {
  alert('Nope. Did you think I was just going back and forth with yes or no?');
  
} else if (visitorGuessFive === 'y' || visitorGuessFive === 'yes'){
  alert('Correct.');
  ++correctAnswers;
} else {
  alert('Please enter your responses in "Yes" or "No" format. Y or N may also be used');
}

alert(`${visitorName}, you have answered ${correctAnswers} correctly.`);
if(correctAnswers > 3){
  alert('You\'re definitely getting a Christmas card this year!');
} else if(correctAnswers ===0){
  alert('At least you got your name right. :/');
}else {
  alert('You seem familiar, but I can\'t quite place you.');
}
if(correctAnswers > 5){
  alert(`Are you my clone?!`);
}

alert(`Thanks for playing ${visitorName}!`)