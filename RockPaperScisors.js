

function botChoice() {
    const rps = ['rock', 'paper', 'scisor'];
    const random = Math.floor(Math.random() * rps.length);
    const computerChoice = rps[random];

    return computerChoice;
}

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};


function play(playerChoice) {

    const computerChoice = botChoice();
    let result = '';

    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            result = 'Tie';
            score.ties += 1;
        }
        else if (computerChoice === 'paper') {
            result = 'You win';
            score.wins += 1;
        }
        else if (computerChoice === 'scisor') {
            result = 'You loose';
            score.losses += 1;
        }
    }

    else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            result = 'You win';
            score.wins += 1;
        }
        else if (computerChoice === 'paper') {
            result = 'Tie';
            score.ties += 1;
        }
        else if (computerChoice === 'scisor') {
            result = 'You loose';
            score.losses += 1;
        }
    }

    else if (playerChoice === 'scisor') {
        if (computerChoice === 'rock') {
            result = 'You loose';
            score.losses += 1;
        }
        else if (computerChoice === 'paper') {
            result = 'You win';
            score.wins += 1;

        }
        else if (computerChoice === 'scisor') {
            result = 'Tie';
            score.ties += 1;
        }
    }

    document.querySelector('.result').innerHTML = `${result}.`;

    document.querySelector('.js-result').innerHTML = `You <img src="${playerChoice}.png" class="previous-move"><img src="${computerChoice}.png" class="previous-move"> Computer`;


    document.getElementById("wins").textContent = score.wins;
    document.getElementById("losses").textContent = score.losses;
    document.getElementById("tie").textContent = score.ties;

    localStorage.setItem('score', JSON.stringify(score));
}


function resetThisScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');

    document.querySelector('.result').innerHTML = `PLAY`

    document.querySelector('.js-result').innerHTML = `You<span class="two-spaces"></span>Computer`;

    document.getElementById("wins").textContent = score.wins;
    document.getElementById("losses").textContent = score.losses;
    document.getElementById("tie").textContent = score.ties;
}


