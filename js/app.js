'use strict';

console.log("Pleeease don't deactivate me!");

let correctAnswers = 0;
let visitorName = getName();

greeting();
quizBio1();
quizBio2();
quizBio3();
quizBio4();
quizBio5();
quizBioFinale();
quizNumber();
quizNumberFinale();
quizFavoriteLetters();
quizFavoriteLettersFinale();

function getName() {
  let visitorName = prompt('What is your name').toLowerCase();

  while (visitorName === '') {
    visitorName = prompt('Oh please...What is your name?');
  }

  if (visitorName === 'nick' || visitorName === 'nicholas') {
    alert(`That's my name! Here's 2 free points. Goodluck`);
    correctAnswers = 2;
  }
  return visitorName;
}

function greeting() {
  alert(`Greetings ${visitorName}! Let's play a game!`);
}

function quizBio1() {
  alert(
    'Please enter your responses in "Yes" or "No" format. Y or N may also be used'
  );
  let visitorGuessOne = prompt(
    'Is Superman my favorite DC hero?'
  ).toLowerCase();

  if (visitorGuessOne === 'n' || visitorGuessOne === 'no') {
    alert('Correct!');
    ++correctAnswers;
  } else if (visitorGuessOne === 'y' || visitorGuessOne === 'yes') {
    alert('Nope.  Who do you think I am!? Next question');
  } else {
    alert(
      'Please enter your responses in "Yes" or "No" format. Y or N may also be used'
    );
  }
}

function quizBio2() {
  let visitorGuessTwo = prompt('Do I like green eggs and ham?').toLowerCase();

  if (visitorGuessTwo === 'n' || visitorGuessTwo === 'no') {
    alert(
      'Nope. I will eat them in a house.  I will eat them with a mouse.  I will eat them here or there.  I will eat them anywhere!'
    );
  } else if (visitorGuessTwo === 'y' || visitorGuessTwo === 'yes') {
    alert('Correct.');
    ++correctAnswers;
  } else {
    alert(
      'Please enter your responses in "Yes" or "No" format. Y or N may also be used'
    );
  }
}

function quizBio3() {
  let visitorGuessThree = prompt('Is my favorite band Nirvana?').toLowerCase();

  if (visitorGuessThree === 'n' || visitorGuessThree === 'no') {
    alert('Correct.');
    ++correctAnswers;
  } else if (visitorGuessThree === 'y' || visitorGuessThree === 'yes') {
    alert('Nope. There is no you there is only me.');
  } else {
    alert(
      'Please enter your responses in "Yes" or "No" format. Y or N may also be used'
    );
  }
}

function quizBio4() {
  let visitorGuessFour = prompt('Would I go to space?').toLowerCase();

  if (visitorGuessFour === 'n' || visitorGuessFour === 'no') {
    alert('Nope. The Force is not strong with you.');
  } else if (visitorGuessFour === 'y' || visitorGuessFour === 'yes') {
    alert('Correct.');
    ++correctAnswers;
  } else {
    alert(
      'Please enter your responses in "Yes" or "No" format. Y or N may also be used'
    );
  }
}

function quizBio5() {
  let visitorGuessFive = prompt('Can I swim?').toLowerCase();

  if (visitorGuessFive === 'n' || visitorGuessFive === 'no') {
    alert(
      'Nope. Did you think I was just going back and forth with yes or no?'
    );
  } else if (visitorGuessFive === 'y' || visitorGuessFive === 'yes') {
    alert('Correct.');
    ++correctAnswers;
  } else {
    alert(
      'Please enter your responses in "Yes" or "No" format. Y or N may also be used'
    );
  }
}

function quizBioFinale() {
  alert(`${visitorName}, you have gotten ${correctAnswers} points so far.`);
  if (correctAnswers > 3) {
    alert(`You're definitely getting a Christmas card this year!`);
  } else if (correctAnswers === 0) {
    alert('At least you got your name right. :/');
  } else {
    alert("You seem familiar, but I can't quite place you.");
  }
  if (correctAnswers > 5) {
    alert(`Are you my clone?!`);
  }
}

function quizNumber() {
  alert(
    `Ok, let's play a number guessing game. You have 4 guesses.  I'll tell you higher or lower after each incorrect guess.`
  );

  let numbersLevelSelect = 0;
  while (numbersLevelSelect < 1 || numbersLevelSelect > 5) {
    numbersLevelSelect = prompt(
      `Choose your difficulty: 1-I'm too young to die. 2-Hey, not too rough. 3-Hurt me plenty. 4-Ultra-violence. 5-Nightmare.`
    );
  }
  let numbersDifficulty = 5 * numbersLevelSelect;

  let numbersActual = parseInt(Math.random() * 10 * numbersDifficulty);
  console.log(`Hint: ${numbersActual}`);
  let numbersWin = false;

  for (let i = 0; i < 4; i++) {
    let numbersGuess = +prompt(
      `What is you first guess ${visitorName}? Remember, it's a number between 0 and ${
        numbersDifficulty * 10
      }. Goodluck!`
    );
    if (numbersActual === numbersGuess) {
      numbersWin = true;
      correctAnswers = +correctAnswers + +numbersLevelSelect;
      break;
    } else if (numbersGuess < numbersActual) {
      alert(`Too low. Guess again.  ${3 - i} guesses left.`);
    } else if (numbersGuess > numbersActual) {
      alert(`Too high. Guess again.  ${3 - i} guesses left.`);
    }
  }
  if (numbersWin === false) {
    alert(
      `Nice try.  The correct number was ${numbersActual}. Consider lowering the difficulty next time.`
    );
  }

  if (numbersWin === true) {
    alert(
      `By gum...You've done it!  Based on your difficulty you got ${numbersLevelSelect} points!`
    );
  }
}

function quizNumberFinale() {
  alert(`${visitorName}, you have gotten ${correctAnswers} points so far.`);

  alert(`One more game...I mean it this time...`);
}

function quizFavoriteLetters() {
  let favoriteLetters = ['n', 'i', 'c', 'h', 'o', 'l', 'a', 's'];
  let favoriteGuess = 0;
  let favoriteWin = false;

  for (let i = 0; i < 6; i++) {
    favoriteGuess = prompt(
      `What is one of my favorite letters of the alphabet?`
    ).toLowerCase();
    while (
      favoriteGuess.length !== 1 ||
      typeof favoriteGuess !== typeof favoriteLetters[0]
    ) {
      favoriteGuess = prompt(
        `One letter only please. What is one of my favorite letters of the alphabet?`
      ).toLowerCase();
    }

    for (let ii = 0; ii < favoriteLetters.length; ii++) {
      if (favoriteGuess === favoriteLetters[ii]) {
        favoriteWin = true;
      }
    }

    if (favoriteWin === true) {
      alert(
        `You guessed one of my 8 favorite letters ${favoriteLetters}!  Congratulations!`
      );
      correctAnswers++;
      break;
    } else {
      alert(`Nope. Try again. ${5 - i} remaining.`);
    }
  }
}

function quizFavoriteLettersFinale() {
  alert(
    `Thanks for playing ${visitorName}!  Your final score was ${correctAnswers}.  See if you can do better next time! Max score is 13 points.  Feelin' lucky?`
  );
}

console.log(`Created by Nick on 15 Sep 2022`);
