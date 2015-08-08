function Game() {
  this.gameRules = { 'Rock': 'Scissors', 'Scissors': 'Paper', 'Paper': 'Rock' };
}

Game.prototype.userInput = function(weapon) {
  this.userWeapon = weapon;
  return weapon;
};

Game.prototype.generate = function() {
  var x = Math.floor((Math.random() * 3) + 1);
  return x;
};

Game.prototype.cpuInput = function() {
  var x = this.generate();
  if (x == 1) { return 'Rock'; }
  else if(x == 2) { return 'Scissors'; }
  else if(x == 3) { return 'Paper'; }
};

Game.prototype.result = function() {
  var userWeapon = this.userWeapon;
  var cpuWeapon = this.cpuInput();
  if (this.gameRules[userWeapon] === cpuWeapon) { this.winner = 'Player Wins!'; }
  else if (userWeapon === cpuWeapon) { this.winner = 'Draw!'; }
  else { this.winner = 'Computer Wins!'; }
};
