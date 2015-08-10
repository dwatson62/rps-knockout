function Game() {
  this.gameRules = {
    'Rock': ['Scissors', 'Lizard'],
    'Paper': ['Rock', 'Spock'],
    'Scissors': ['Paper', 'Lizard'],
    'Lizard': ['Paper', 'Spock'],
    'Spock': ['Scissors', 'Rock']
  };

  this.weapons = Object.keys(this.gameRules);
  this.winningMove = this.weapons[0];
  this.tacticalMode = false;
  this.bestOfRounds = 5;
  this.playerScore = 0;
  this.cpuScore = 0;
}

Game.prototype.toggleTacticalMode = function() {
  if (this.tacticalMode === false) {
    this.tacticalMode = true;
    return 'Off';
  }
  this.tacticalMode = false;
  return 'On';
};

Game.prototype.userInput = function(weapon) {
  this.userWeapon = weapon;
  return weapon;
};

Game.prototype.generate = function() {
  var x = Math.floor((Math.random() * this.weapons.length));
  return x;
};

Game.prototype.cpuInput = function() {
  if (this.tacticalMode === true) {
    this.cpuWeapon = this.winningMove;
  } else {
    var x = this.generate();
    this.cpuWeapon = this.weapons[x];
  }
  return this.cpuWeapon;
};

Game.prototype.result = function() {
  if (this.userWeapon === this.cpuWeapon) {
    this.winningMove = this.userWeapon;
    return 'Draw!';
  }
  var userWeapon = this.gameRules[this.userWeapon];
  for (var i in userWeapon) {
    if (userWeapon[i] === this.cpuWeapon) {
      this.winningMove = this.userWeapon;
      this.playerScore += 1;
      return 'You Win!';
    }
  }
    this.winningMove = this.cpuWeapon;
    this.cpuScore += 1;
    return 'You Lose!';
};

Game.prototype.checkFinalResult = function() {
  var numberNeededToWin = Math.round(this.bestOfRounds / 2)
  if (this.playerScore === numberNeededToWin) {
    return 'Player wins the match!';
  } else if (this.cpuScore === numberNeededToWin) {
    return 'The computer wins the match!';
  }
};

Game.prototype.newGame = function() {
  this.playerScore = 0;
  this.cpuScore = 0;
};
