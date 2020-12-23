//We are scoping all the function inside my function game, the main function is game , and inside game we have inner functions
const game = () => {
  let pScore = 0; //player score
  let cScore = 0; //computer score
  //Start the game
  //Function to fade in and out when you press the intro button (fade in from the intro to the main game)
  const startGame = () => {
    const playBtn = document.querySelector(".intro button"); //I obtain the button that has the class intro
    const introScreen = document.querySelector(".intro"); //I obtain the element that has the class intro (the div for the home page)
    const match = document.querySelector(".match"); //I obtain the element thas has the class .match (the div that has the match page)

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut"); //I hide the home page(div) when i click the button. I add my css fadeOut class when we click the button, this class hide the div that has that class
      match.classList.add("fadeIn"); //I show the div that has the match adding the fadeIn class that i have on css
    });
  };

  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button"); //I obtain all the buttons that are inside the div that has the class options (THE PLAYER OPTIONS)
    const playerHand = document.querySelector(".player-hand"); //Obtain the player hand icon
    const computerHand = document.querySelector(".computer-hand"); //Obtain the computer hand icon
    const hand = document.querySelectorAll(".hand img"); //Obtain the hand icon for both the user and computer

    //For eachs hands(the user and computer icon that i have in my const hands) im going to aply an event type animationed, meaning that
    //evertime the animation end is going to execute the callback function
    hand.forEach((hands) => {
      hands.addEventListener("animationend", function () {
        //We use this to refer to each hand(icon)
        this.style.animation = "";
      });
    });

    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"]; //create an array with the computer options that we are going to associate with the ramdon number that we are going to generate

    //Foreach button that we have on 'options', we add an event listener type click to each button
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //WE USE THIS TO REFERENCE THE BUTTON THAT WAS CLICK ON

        //Computer Choise (we generate the computer choise when the user clicks on his option)
        const computerNumber = Math.floor(Math.random() * 3); //Generate ramdon number from 0 to 2 (that way we can associate that result with our array thas has the three values rock[0], paper[1], scissors[2])
        const computerChoice = computerOptions[computerNumber]; //we use the computer number to access to the corresponding element in our array computerOptions

        setTimeout(() => {
          //Calling the compare hands function
          compareHands(this.textContent, computerChoice);

          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        //For the animations
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  //Function to update the scores
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p"); //I obtain the p element that has the class player-score, is here where i want to show the player score
    const computerScore = document.querySelector(".computer-score p "); //The same thing but for the computer score

    playerScore.textContent = pScore; //I change the value of the p element that i saved on playerScore, to the actual score of the player
    computerScore.textContent = cScore; //The same proceess
  };

  //Function to compare the scores and see who is winning
  const compareHands = (playerChoise, computerChoice) => {
    //update text
    const winner = document.querySelector(".winner"); //Obtaining the h2 that has the class winner
    //Checking for a tie
    if (playerChoise === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }

    //Cheking for Rock
    if (playerChoise === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //Checking for Paper
    if (playerChoise === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //Cheking for Scissors
    if (playerChoise === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Call all the inner functions
  startGame();
  playMatch();
};

//Start the game function that has all the inner functions
game();
