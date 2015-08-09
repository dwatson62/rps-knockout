function Game() {
  this.gameRules = { 'Rock': ['Scissors', 'Lizard'], 'Scissors': ['Paper', 'Lizard'], 'Paper': ['Rock', 'Spock'], 'Lizard': ['Paper', 'Spock'], 'Spock': ['Scissors', 'Rock'] };
  this.weapons = Object.keys(this.gameRules);
  this.winningMove = this.weapons[0];
  this.tacticalMode = false;
}

Game.prototype.toggleTacticalMode = function() {
  if (this.tacticalMode === false) {
    this.tacticalMode = true;
    return;
  }
  this.tacticalMode = false;
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
      return 'Player Wins!';
    }
  }
    this.winningMove = this.cpuWeapon;
    return 'Computer Wins!';
};
