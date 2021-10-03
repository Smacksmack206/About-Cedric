'use strict'


// function startQuiz() {
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
    
    }
//}
//function question2() {
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

    }
//}
//function question3() {
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
        
    }
//}
//function question4() {
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
        
    }
//}
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
       
    }

let attempts = 1;



for(let i = 4; i >= attempts; i-- ) {

    let correctAnswer = 10;
    let numberGuesser = parseInt(prompt('Guess a number between 1-20'));
    
    if(numberGuesser === correctAnswer) {
        alert('You are correct.');
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
let attemptsRemaining = 6;
for(let j = 0; j < attemptsRemaining; j++) {
    let question7 = prompt('What is my favorite thing I own');
    let z = 6;
    let favPossessions = ['iPhone', 'Sony TV', 'Macbook M1 Air', 'Samsung Oddessy G9', 'LG Soundbar', 'Oculus Quest 2', 'Galaxy Fold 3', 'Marsback M1 Custom Keyboard', 'Alienware M15 R4', '2016 Lexus ES300h'];
    if(question7 === favPossessions[j]) {
        alert(`That is correct! My favorite possessions was ${favPossessions}`);
        break;
    } else if(question7 != favPossessions[j]) {
alert(`That is incorrect, try again. You have ${(j - 1 )} attempts remaining.`)
    }
    
    }
