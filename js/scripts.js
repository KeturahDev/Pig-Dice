// back-end //
function Game(goalScore, currentPlayer) {
  this.goalScore = goalScore;
  this.currentPlayer = currentPlayer;
}
// proto. for Game constructor //
Game.prototype.switchPlayer = function() {
  this.currentPlayer = this.currentPlayer == 1 ? 2 : 1;
  return currentPlayer;
}

Game.prototype.addGoalScore = function(goalScore) {
  this.goalScore = goalScore;
}

function Player(name, score) {
  this.name = name; 
  this.score = score;
}
// proto. for player constructor //
Player.prototype.addName = function(name) {
  this.name = name;
}

function diceRoll() {
  var dice = [1, 2, 3, 4, 5, 6];
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  // variable for providing the length of the array "rolling" //
  var rolling = getRandomInt(dice.length);
  // array accessor //
  var rolledNumber = dice[rolling]
  return rolledNumber;
}
// var game = new Game()

// function turnsSwitched(currentPlayer) {
  
//   function switchTurns(currentPlayer) {
//     console.log(this);
//     this.currentPlayer = this.currentPlayer == 1 ? 2 : 1;
//     return currentPlayer;
//   }

//   switchTurns(currentPlayer)
//   // if (currentPlayer === 1) {

//   // }
//   console.log("currentPlayer =", currentPlayer);
// }
// var currentPlayer = 1;


// front-end // ------------------------------------------------------------------------------------


// function displayPlayerTurn(playerName) {
//   $('#output').append("<p class='head'>Rolling for: " + playerName +  "</p>")
// }



function switchTurns() {
  game.switchPlayer() 
  console.log('game',game)
  if (game.currentPlayer === 1) {
    $('#head').append(player1.name)

  } else if (game.currentPlayer === 2) {
    $('#head').append(player2.name)
  }
  //changing the name displayed in the output
  //current player holds value of 1
  //when value of currentplayer = 1, display player1.name, if 2 displayer player 2.name
  //player.name = 
  
}

var game = new Game(0, 1);
var currentPlayer = game.currentPlayer;
console.log('')
var player1 = new Player(name, 0); 
var player2 = new Player(name, 0); 
$(document).ready(function() {
  
  
  $('form#formy').submit(function(event) {
    event.preventDefault();
    var goalScore = parseInt($("input#score-goal").val());
    // console.log("score",score);
    // console.log("game-score",game.goalScore);
    
    var name1 = $("#name1").val();
    var name2 = $("#name2").val();
    // accessing objects, not constructors. Hence capitalization differences //
    player1.addName(name1);
    player2.addName(name2);
    game.addGoalScore(goalScore);
    // game.goalScore = score;

    console.log('player1 name:',player1.name);
    console.log('player2 name:',player2.name);
    
    $('#head').append(player1.name)
    
    $(".game").show();
    $("#formy").hide();
    
    $("#scoreGoalOutput").text("Reach this score to win: " + game.goalScore);
  })
  
  $('#roll').click(function(event) {
    event.preventDefault();
    // var roll = $("#roll");

    var rolledNumber = diceRoll(); 

    $('#diced').remove();
    // must .append (rather than .text) so that not all text in output is replaced by the result //
    $('#output').append("<p id='diced'>You rolled: " + rolledNumber +  "</p>")
  })
  $('#pass').click(function(event) {
    event.preventDefault();
    switchTurns(currentPlayer);

    // $('#output').text('pass worked!') 
  })
})