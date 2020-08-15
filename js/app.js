var dice,roundScore,activePlayer,scores;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.querySelector('.dice').style.display ='none';

document.querySelector('.btn-roll').addEventListener('click', function(){
    var dice = Math.floor(Math.random()*6)+1;
    var diceDOm = document.querySelector('.dice');
    diceDOm.style.display = 'block';
    diceDOm.src = 'dice-' + dice + '.png';

    if(dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        activePlayer === 0 ? activePlayer = 1 : activeplayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none;'

    }

});





// document.querySelector('#current-' + activePlayer).textContent = dice;
// var x = document.querySelector('#score-0').textContent;
// console.log(x);