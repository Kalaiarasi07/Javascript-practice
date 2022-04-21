var scores, roundScore, activePlayer, gamePlaying ,prevDice;
function funcLoad(){
    alert("RULES:\n 1. Player who reaches score 20 first is the winner.\n 2. If you roll 1 you will loose your current score and die will be handed to your opponent.\n                    GOOD LUCK AT THE GAME!");
}
init();
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        if(prevDice===dice && dice===6)
        {
            nextPlayer();
        }
        prevDice = dice;
        //2. Display the result
            var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
    }    
});
document.querySelector('.btn-hold').addEventListener('click', function()
{
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});
function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
   document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}
//using mouse click event
document.querySelector('.btn-new').addEventListener('click', init);

//using keyboard event

document.addEventListener("keyup", function(event)
{
    if(event.keyCode === 78)
    {
        init();
    }
});
function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
     document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}