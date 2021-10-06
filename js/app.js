'use strict'

let score = 0;
function startQuiz() {
    alert("Let's get to know who Cedric the Software Developer");
    let answer = 'yes'
    do{
        answer = prompt("Are you ready to get started?");

        if (answer.toLowerCase() == 'no' || answer.toLowerCase() == 'n'){
            alert('Wrong answer - Try again!');
            // console.log("You answered wrong!") //
        }
    } while(answer.toLowerCase() != 'yes' && answer.toLowerCase() != 'y'){
        alert('Correct! now we can move on to the next question');
        // console.log("You answered correctly!") //
        score++;
         question2();
    }
}
function question2() {
    let answer2 = 'no'
    do{
        answer2 = prompt("Is the sky blue, during the night?");

        if (answer2.toLowerCase() == 'yes' || answer2.toLowerCase() == 'y'){
            alert('Wrong answer - Try again!');
            // console.log("You answered wrong!") //
        }
    } while(answer2.toLowerCase() != 'no' && answer2.toLowerCase() != 'n'){
        alert('That is correct!');
        // console.log("You answered correctly!") //
        score++;
        question3();
    }
}
function question3() {
    let answer3 = 'yes'
    do{
        answer3 = prompt("Was Cedric, sick yesterday during class?");

        if (answer3.toLowerCase() == 'no' || answer3.toLowerCase() == 'n'){
            alert('Wrong answer - Try again!');
            // console.log("You answered wrong!") //
        }
    } while(answer3.toLowerCase() != 'yes' && answer3.toLowerCase() != 'y'){
        alert('That is correct!');
       // console.log("You answered correctly!") //
       score++;
       question4();
    }
}
function question4() {
    let answer4 = 'yes'
    do{
        answer4 = prompt("Was Cedric, sick today during class?");

        if (answer4.toLowerCase() == 'no' || answer4.toLowerCase() == 'n'){
            alert('Wrong answer - Try again!');
            // console.log("You answered wrong!") //
        }
    } while(answer4.toLowerCase() != 'yes' && answer4.toLowerCase() != 'y'){
        alert('That is correct!');
       // console.log("You answered correctly!") //
       score++;
        question5();
    }
}
//function question5() {
    let answer5 = 'yes'
    do{
        answer5 = prompt("Is Cedric, a hard worker?");

        if (answer5.toLowerCase() == 'no' || answer5.toLowerCase() == 'n'){
            alert('Wrong answer - Try again!');
            // console.log("You answered wrong!") //
        }
    } while(answer5.toLowerCase() != 'yes' && answer5.toLowerCase() != 'y'){
        alert('That is correct!');
       // console.log("You answered correctly!") //
       score++;
    //    question6();
    }
//function question6() {
let attempts = 1;

for(let i = 4; i >= attempts; i-- ) {

    let correctAnswer = 10;
    let numberGuesser = parseInt(prompt('Guess a number between 1-20'));

    if(numberGuesser === correctAnswer) {
        alert('You are correct.');
        score++;
        //    question7();
        break;
    } else if (numberGuesser < correctAnswer) {
        alert(`Your guess is too low. You have ${(i - 1 )} attempts remaining.`);
    } else if(numberGuesser > correctAnswer) {
        alert(`Your guess is too high. You have ${(i)} attempts remaining.`);
    }  

    if((i) === 1) {
        alert(`The correct answer was ${correctAnswer}.`);
        break;
    }
}
// }
//function question7() {
let answeredCorrectly = false;
let attemptsRemaining = 6;
let favPossessions = ['iphone', 'sony tv', 'macbook m1 air', 'samsung oddessy g9', 'lg soundbar', 'oculus quest 2', 'galaxy fold 3', 'marsback m1 custom keyboard', 'alienware m15 r4', '2016 Lexus ES300h'];
while (attemptsRemaining > 0) {
  let question7 = prompt('What is my favorite thing I own');

  for (let z = 0; z < favPossessions.length; z++) {
    // let favPossessions = ['iPhone', 'Sony TV', 'Macbook M1 Air', 'Samsung Oddessy G9', 'LG Soundbar', 'Oculus Quest 2', 'Galaxy Fold 3', 'Marsback M1 Custom Keyboard', 'Alienware M15 R4', '2016 Lexus ES300h'];
    // console.log(favPossessions[z]);
    if (question7 === favPossessions[z]) {
      alert(`That is correct! My favorite possessions was ${favPossessions[z]}.`);
      alert(`Since you answered correctly, This is a list of all of my favorite possessions ${(favPossessions)}`)
      answeredCorrectly = true;
      score++;
    } 
  }
  attemptsRemaining--;
  if (answeredCorrectly) {
    attemptsRemaining = 0;
    alert(`Your score was ${score}`);
    break;
  }
  if (!answeredCorrectly) {
    alert(`That is incorrect, try again.`);

    
  }
} if (!answeredCorrectly && attemptsRemaining === 0) {
        alert(`That is incorrect, The awnser was ${(favPossessions)}`);
        
}
// }
