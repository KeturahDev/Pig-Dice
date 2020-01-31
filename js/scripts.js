// back-end //
function Game() {
  this.goalScore = 0;
  this.currentPlayer = 1;
  this.players = [];
}
// proto. for Game constructor //
// conditional checking for value of currentPlayer. If cP is 1, change to 2, and vice-versa. //
Game.prototype.switchPlayer = function(currentPlayer) {
  this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
  return currentPlayer;
}

// Game.prototype.assaignCurrentPlayer = function() {
//   this.currentPlayer = 1;
// }

// proto. to
Game.prototype.addGoalScore = function(goalScore) {
  this.goalScore = goalScore;
}

// Game.prototype.addPlayers() = function(player) {
//   push
// }

function Player() {
  this.name = ""; 
  this.diceRoll = 0;
  this.score = 0;
  this.turnScore = 0;
}
// proto. for player constructor //
Player.prototype.addName = function(name) {
  this.name = name;
}

Player.prototype.addScore = function(score) {
  this.score = score;
}

Player.prototype.winner = function(player, game) {
  if (player.score >= game.goalScore) {
    alert ("YOU WIN");
  } else {
    null;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function diceRoll() {
  var dice = [1, 2, 3, 4, 5, 6];
  
  // variable for providing the length of the array "rolling" //
  var rolling = getRandomInt(dice.length);
  // array accessor //
  var rolledNumber = dice[rolling]
  console.log('rolledNumber', rolledNumber)
  return rolledNumber;
}
// where we implement this function, declare vr turnScore value of 0
function turn(game, player1, player2) {
  if (game.currentPlayer === 1) {  //checks which player is going to receive the score
    var player = player1;
  } else {
    var player = player2;
  }
  var rollDice = diceRoll() //calling the function that retreives dices value, 
  player.diceRoll = rollDice; //and setting it to the current players diceroll property
  if (player.diceRoll !== 1) {           
  player.turnScore += rollDice;      ///assaigns the score
  } else if (rollDice === 1) {
    clearOutputinTurn()
    switchTurns(game,player1, player2);
    player.turnScore = 0;

  }
}

function passTurn(player1, player2, game) {
  var player = turnDecider(game, player1, player2);
  player.score = player.score += player.turnScore;
  player.turnScore = 0; 
  console.log('players turn score after passing',player.turnScore);
  switchTurns(game, player1, player2);
  clearOutput();
  player.winner(player, game);
}
// front-end // ------------------------------------------------------------------------------------


// function displayPlayerTurn(playerName) {
//   $('#output').append("<p class='head'>Rolling for: " + playerName +  "</p>")
// }

function turnDecider(game,player1, player2) {
  if (game.currentPlayer === 1) {  //checks which player is going to receive the score
    var player = player1;
    // player.diceRoll = diceRoll();
    console.log('isplayer1')
  } else {
    var player = player2;
    console.log('isplayer2')
  }
  return player;
}

function clearOutput() {
  $('#turn-score').html('0')
  // $('#total-score').html('0')
  $('#diced').html('0')
}
function clearOutputinTurn() {
  $('#diced').html('0')
}

function switchTurns(game, player1, player2) {
  game.switchPlayer(game.currentPlayer) 
  // console.log('game',game)
  if (game.currentPlayer === 1) {
    $('#head').text(player1.name)

  } else if (game.currentPlayer === 2) {
    $('#head').text(player2.name)
  }
  //changing the name displayed in the output
  //current player holds value of 1
  //when value of currentplayer = 1, display player1.name, if 2 displayer player 2.name
  //player.name = 
  
}
          
// var currentPlayer = currentPlayer;

// var game = new Game(0, 1);
console.log('')
$(document).ready(function() {
  var game = new Game();
  var player1 = new Player(); 
  var player2 = new Player(); 
  $('form#start-game').submit(function(event) {
    event.preventDefault();
    var goalScore = parseInt($("input#score-goal").val());
    game.addGoalScore(goalScore);
    // console.log("score",score);
    // console.log("game-score",game.goalScore);
    console.log(game);
    var name1 = $("#name1").val();
    var name2 = $("#name2").val();
    // accessing objects, not constructors. Hence capitalization differences //
    player1.addName(name1);
    player2.addName(name2);
    game.addGoalScore(goalScore);
    // game.assaignCurrentPlayer();
    // game.goalScore = score;

    console.log('player1 name:',player1.name);
    console.log('player2 name:',player2.name);
    
    $('#head').append(player1.name)
    
    $(".game").show();
    $("#formy").hide();
    
    $("#scoreGoalOutput").text("Reach this score to win: " + game.goalScore);
  })
  
  $('#roll').click(function() {
    // var roll = $("#roll");
    // var rolledNumber = diceRoll(); 
    // player1.diceRoll = rolledNumber
    turn(game, player1, player2);
    console.log(player1)
    console.log(player2)

    var player = turnDecider(game, player1, player2)
    $('#turn-score').html(player.turnScore);
    // must .append (rather than .text) so that not all text in output is replaced by the result //
    $('#diced').html(player.diceRoll)
  })

  $('#pass').click(function() {
    // switchTurns(game,player1,player2);
    passTurn(player1, player2, game);
    var player = turnDecider(game, player1, player2)
    $('#total-score').html(player.score);
    // $('#output').text('pass worked!') 
  })
})