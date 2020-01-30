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
  this.score = 0;
}
// proto. for player constructor //
Player.prototype.addName = function(name) {
  this.name = name;
}

Player.prototype.addScore = function(score) {
  this.score = score;
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
  return rolledNumber;
}
// where we implement this function, declare vr turnScore value of 0
function turn(rolledNumber) {
  var turnScore = 
  turnscore += rolledNumber
}
// front-end // ------------------------------------------------------------------------------------


// function displayPlayerTurn(playerName) {
//   $('#output').append("<p class='head'>Rolling for: " + playerName +  "</p>")
// }



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
    var rolledNumber = diceRoll(); 
    $('#diced').remove();
    // must .append (rather than .text) so that not all text in output is replaced by the result //
    $('#output').append("<p id='diced'>You rolled: " + rolledNumber +  "</p>")
  })

  $('#pass').click(function() {
    switchTurns(game,player1,player2);

    // $('#output').text('pass worked!') 
  })
})