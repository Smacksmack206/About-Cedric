'use strict';

console.log()
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
        question2();
    }
}
function question2() {
    let answer = 'no'
    do{
        answer = prompt("Is the sky blue, during the night?");

        if (answer.toLowerCase() == 'yes' || answer.toLowerCase() == 'y'){
            alert('Wrong answer - Try again!');
            // console.log("You answered wrong!") //
        }
    } while(answer.toLowerCase() != 'no' && answer.toLowerCase() != 'n'){
        alert('That is correct!');
        // console.log("You answered correctly!") //
        question3();
    }
}
function question3() {
    let answer = 'yes'
    do{
        answer = prompt("Was Cedric, sick yesterday during class?");

        if (answer.toLowerCase() == 'no' || answer.toLowerCase() == 'n'){
            alert('Wrong answer - Try again!');
            // console.log("You answered wrong!") //
        }
    } while(answer.toLowerCase() != 'yes' && answer.toLowerCase() != 'y'){
        alert('That is correct!');
       // console.log("You answered correctly!") //
        question4();
    }
}
function question4() {
    let answer = 'yes'
    do{
        answer = prompt("Was Cedric, sick today during class?");

        if (answer.toLowerCase() == 'no' || answer.toLowerCase() == 'n'){
            alert('Wrong answer - Try again!');
            // console.log("You answered wrong!") //
        }
    } while(answer.toLowerCase() != 'yes' && answer.toLowerCase() != 'y'){
        alert('That is correct!');
       // console.log("You answered correctly!") //
        question5();
    }
}
function question5() {
       let userName = prompt('What is your name?');
       alert('You passed the initial quiz on Cedric - Congrats ' + userName + ' welcome to the site!');
       alert('This is your final message ' + userName + ' I hope you enjoy the site')
    }
