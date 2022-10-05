var name;                          //player name
var max = 10;                      //max range
var min = 1;                       //minimum range
var rNum;                          //random number
var isPlaying = true;              //game loop
//var history = [];                  //guess history
var tries;                         //ammount of current tries
var previousTries;                 //ammount of previous tries
var guess;                         //guess

play(); // This is your main function that runs when the page loads


function play(){
    rNum = Math.floor((Math.random() * max) + min);                                //sets initial random number
    tries = 0;                                                                     //sets initial number of tries
    name = prompt("What is your name?");                                           //sets the players name
    var history = [];

    while(isPlaying){                                                              //this is the game loop, it will run until isPlaying is set to false
        tries++;                                                                   //increments tries because this is the first guess
        let guess = prompt("Guess a number between " + min + " and " + max + ":");     //Asks the player for a guess
        history.push(guess);                                                       //adds the guess to the guess history
            
        if(guess < rNum){                                                          //sends message if guess is to low
            alert("Sorry " + name + " higher");
        }else if(guess > rNum){                                                    //sends message if guess is to high
            alert("Sorry " + name + " lower")
        }else if(guess == rNum){                                                   //executes if guess is correct
            if(previousTries === undefined){
                alert("Good job " + name + " that is correct! You guessed in " + tries + " tries!" + "\nHere are your guesses: " + history);
            }else if(tries < previousTries){
                alert("Good job " + name + " that is correct! You beat your previous attempt by " + (previousTries - tries) + " tries!" + "\nHere are your guesses: " + history);
            }else if(tries > previousTries){
                alert("Good job " + name + " that is correct! You did better last attempt by " + (tries - previousTries) + " tries!" + "\nHere are your guesses: " + history);
            }else if(tries == previousTries){
                alert("Good job " + name + " that is correct! You tied your previous attempt with " + tries + " tries!" + "\nHere are your guesses: " + history);
            }
            playAgain(history);                  //will ask player if they want to play again and resets all the values
            history = [];
        }else {
            alert("Error!")               //if something goes wrong
        }
    }
    



    
}

function playAgain(history){
    let replay = prompt(name + " do you want to play again?");                 //asks if you want to replay
    if(replay == "yes" || replay == "Yes"){
        previousTries = tries;                                                 //sets current tries to previousTries
        rNum = Math.floor((Math.random() * max) + min);                        //resets random number
        //history = [];                                                          //resets history
        tries = 0;                                                             //resets tries
        return true;
    }else {
        isPlaying = false;                                                    //stops the game loop
        alert("Thank you for playing my game " + name +"!");                  //goodbye message
        return false;
    }
}
