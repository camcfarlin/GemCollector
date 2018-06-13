// Set Variables
// gemOne - gemFour  (random numbers to be set 1-10)
// winningNumber (random number 30-150)
// runningNumber (users score added per the buttons)
// Document Ready - Assign winningNumber and 4 gem numbers
var gem1 = Math.floor(Math.random()*10+1);
var gem2 = Math.floor(Math.random()*10+1);
var gem3 = Math.floor(Math.random()*10+1);
var gem4 = Math.floor(Math.random()*10+1);

var winningNumber = Math.floor(Math.random()*131+29);
console.log(winningNumber);
var runningNumber = 0;
var wins = 0;
var loses = 0;

function reset(){
    winningNumber = Math.floor(Math.random()*131+29);
    $('#randomNumber').text(winningNumber);
    gem1 = Math.floor(Math.random()*10+1);
    gem2 = Math.floor(Math.random()*10+1);
    gem3 = Math.floor(Math.random()*10+1);
    gem4 = Math.floor(Math.random()*10+1);
    runningNumber = 0;
   $('#finalTotal').text(runningNumber);
    } 

// push var to doc
$('#randomNumber').text(winningNumber)
$('#numberWins').text(wins);
$('#numberLosses').text(loses);

// onclick - add assigned interger to runningNumber
$('#gemOne').on ('click', function(){
   runningNumber += gem1;
    console.log("NewrunningNumber = " +runningNumber);
    $('#finalTotal').text(runningNumber); 
    // winScore & loseScore - if/else statment 
    // if runningNumber === winningNumber set win  - tally win
        if (runningNumber === winningNumber){
            alert ( 'You Win!' );
            wins++; 
            $('#numberWins').text(wins);
            reset();
        }
    // if over stop and start again - tally lost
        else if (runningNumber > winningNumber){
            alert ("You lose!");
            loses++;
            $('#numberLosses').text(loses);
            reset()
        }   
  })  

  $('#gemTwo').on ('click', function(){
    runningNumber += gem2;
     console.log("NewrunningNumber = " +runningNumber);
     $('#finalTotal').text(runningNumber); 
     // winScore & loseScore - if/else statment 
     // if runningNumber === winningNumber set win  - tally win
         if (runningNumber === winningNumber){
            alert ( 'You Win!' );
             wins++; 
             $('#numberWins').text(wins);
             reset();
         }
     // if over stop and start again - tally lost
         else if (runningNumber > winningNumber){
             alert ("You lose!");
             loses++;
             $('#numberLosses').text(loses);
             reset()
         }   
   }) 

   $('#gemThree').on ('click', function(){
    runningNumber += gem3;
     console.log("NewrunningNumber = " +runningNumber);
     $('#finalTotal').text(runningNumber); 
     // winScore & loseScore - if/else statment 
     // if runningNumber === winningNumber set win  - tally win
         if (runningNumber === winningNumber){
            alert ( 'You Win!' );
             wins++; 
             $('#numberWins').text(wins);
             reset();
         }
     // if over stop and start again - tally lost
         else if (runningNumber > winningNumber){
             alert ("You lose!");
             loses++;
             $('#numberLosses').text(loses);
             reset()
         }   
   }) 

   $('#gemFour').on ('click', function(){
    runningNumber += gem4;
     console.log("NewrunningNumber = " +runningNumber);
     $('#finalTotal').text(runningNumber); 
     // winScore & loseScore - if/else statment 
     // if runningNumber === winningNumber set win  - tally win
         if (runningNumber === winningNumber){
            alert ( 'You Win!' );
             wins++; 
             $('#numberWins').text(wins);
             reset();
         }
     // if over stop and start again - tally lost
         else if (runningNumber > winningNumber){
             alert ("You lose!");
             loses++;
             $('#numberLosses').text(loses);
             reset()
         }   
   }) 
// else runningNumber > winningNumber set lose - tally lose

// reset game - reassign numbers and reiterate game again


//    })  

var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}