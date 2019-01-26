const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if( userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ){
      return userInput;
    } else {
      console.log( 'Not a proper response, please try again' );
    }
  }//End getUserChoice

function getComputerChoice() {
  randomNumber = Math.floor( Math.random() * 3 );
  switch ( randomNumber ){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'Something went wrong!';
  }
  return computerChoice;
}//End getComputerChoice

function determineWinner(userChoice, computerChoice){
  if ( userChoice === computerChoice ){
    return 'The game is a tie!';
  }

  if (userChoice === 'rock') {
  	if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    	return 'You won!';
  }
 }

    if ( userChoice === 'paper' ){
      if ( computerChoice === 'scissors' ){
      return 'The computer won!';
      } else {
      		return 'The user won!';
    	}
   }

    if( userChoice === 'scissors'){
      if( computerChoice === 'rock'){
        return 'The computer won!';
      } else {
        return 'The user won!';
      }
    }
}
//End determinWinner

//console.log(getComputerChoice());
//console.log(getUserChoice('paper'));
console.log(determineWinner('paper', 'scissors'))
console.log(determineWinner('paper', 'paper'))
console.log(determineWinner('paper', 'rock'))

/*
console.log(getUserChoice('rock'));
console.log(getUserChoice('scissors'));
console.log(getUserChoice('knife'));
*/

 /*
  if( userChoice === computerChoice ){
    return 'The game is a tie!';
  } else if( userChoice === 'rock' && computerChoice === 'paper'){
    	return 'The computer won!';
    } else{
      return 'The user won!';
    }
    */
