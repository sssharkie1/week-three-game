    var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    var guesses = 6

    var lettersGuessed = []

    var wins = 0

    var losses = 0
      
        //computer picks a letter      
    var computerGuess = options[Math.floor(Math.random() * options.length)];
              console.log("computer guess " + computerGuess);
 
        //user guesses letters only if guesses remain
    document.onkeyup = function(event) {  
            if(guesses >= 1){
              var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
                console.log("user guess " + userGuess);
              lettersGuessed.push(userGuess);
              guesses = guesses -1;
                console.log("number of guesses left " + guesses);
          }
           
        //if no guesses remain, the round is over and alerts user, var losses goes up by one, var lettersGuessed resets to empty, var guesses resets to 6, alerts user to guess another.          
     
        //if user guesses correctly, the round is over, alert tells them they win, var wins goes up by one, var lettersGuessed resets, var guesses resets to 6, alerts user to guess again.
          if(userGuess === computerGuess) { 
              wins++;
              alert("You win!");
              guesses = 6;
              computerGuess = options[Math.floor(Math.random() * options.length)];
                console.log("computer guess " + computerGuess);
                console.log("guesses left " + guesses);
              lettersGuessed = [];
              alert("Good job smarty pants! Guess my next letter!");
          }
          else if(guesses === 0){
            alert("You lose!");
              computerGuess = options[Math.floor(Math.random() * options.length)];
                console.log("computer guess " + computerGuess);
                console.log("guesses left " + guesses);
              lettersGuessed = [];
              alert("Nice try. Let's go again! Guess my next letter!");
              losses++;
              guesses = 6;
          }
   
        //HTML fields to populate during game.
          var html = "<p>Your Guesses so far: " + lettersGuessed +   "</p>" +
          "<p>Guesses Left: " + guesses + "</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>";

          document.querySelector("#stats").innerHTML = html;     
    }  
      

    
