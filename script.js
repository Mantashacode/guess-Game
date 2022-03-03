
// document.querySelector('.message').textContent='🎉Correct Number!';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent= 10;
// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);
let secretNumber= Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

//displaymessage function
const displayMessage =function(message){
  document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
  const guess=Number(document.querySelector('.guess').value);
//    console.log(typeof guess); //everything we take from user is comes as string

//when there is no input
   if(!guess){
   // document.querySelector('.message').textContent='⛔No Number';
   displayMessage('⛔No Number');
   }
   //when user win
   else if(guess === secretNumber){
      // document.querySelector('.message').textContent = '🎉Correct Number!';
      displayMessage('🎉Correct Number!');
       //display secret no
       document.querySelector('.number').textContent=secretNumber;
       //change color
       document.querySelector('body').style.backgroundColor= '#60b347';
       //change width;
       document.querySelector('.number').style.width = '30rem';
       //update heighscore
       if(highscore<score)
       { highscore=score;
       document.querySelector('.highscore').textContent=highscore;
       }
      }
   //when guess is high
   else if(guess !== secretNumber){
    if(score>1)
    {
       document.querySelector('.message').textContent= guess>secretNumber ? '📈To high!':'📉To Low!' ;
       score--; 
       document.querySelector('.score').textContent= score;
       }
    else{
        score--;   
        document.querySelector('.message').textContent= 'You lost the game!💥';
        document.querySelector('.score').textContent= 0;
       }
   }
}); 
 //reset button
 document.querySelector('.again').addEventListener('click',function(){
  score=20;
  secretNumber= Math.trunc(Math.random()*20)+1;
  document.querySelector('.score').textContent=score;
  //document.querySelector('.message').textContent='Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor= '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent='?';
  document.querySelector('.guess').value='';

 });

