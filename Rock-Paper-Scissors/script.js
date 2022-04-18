function rpsGame(yourChoice){
  console.log('your choice:',yourChoice);
  var humanChoice, botChoice;
  
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log('computer choice: ',botChoice);
  
  results = decideWinner(humanChoice, botChoice);
  console.log(results);
  
  message = finalMessage(results);
  console.log(message);
  console.log("frontend:",yourChoice.id,botChoice,message);
  rpsFrontEnd(yourChoice.id, botChoice, message);



}

function randToRpsInt(){
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
  return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
  var rpsDatabase = {
    'rock':     {'scissors': 1,  'rock':0.5,      'paper':0},
    'paper':    {'rock':1 ,      'paper':0.5 ,    'scissors':0},
    'scissors': {'paper':1 ,     'scissors':0.5 , 'rock':0},
  }

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0)
  {
    return {'message': 'You lost!', 'color': 'red'};
  }
  else if (yourScore === 0.5)
  {
    return {'message': 'You tied!', 'color': 'yellow'};
  }
  else 
  {
    return {'message': 'You won!', 'color': 'green'};   
  }
}
function rpsFrontEnd(humanImgChoice, botImgChoice, finalMessage){
  var imagesDatabase = {
    'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissors':document.getElementById('scissors').src,
  }

  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messgaeDiv = document.createElement('div');


  humanDiv.innerHTML = "<h3 style='text-align: center';>You</h3> <img src='" + imagesDatabase[humanImgChoice] + "' height = 150 width=150 style='box-shadow: 0px 10px 50px grey'>";
  messgaeDiv.innerHTML = "<h1 style = 'color:" + finalMessage['color'] + "; font-size: 40px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
  botDiv.innerHTML = "<h3 style='text-align: center;'>Computer</h3><img src='" + imagesDatabase[botImgChoice] + "' height = 150 width=150 style='box-shadow: 0px 10px 50px grey'>";

  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messgaeDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);


}