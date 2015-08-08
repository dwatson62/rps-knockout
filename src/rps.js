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
  if (x == 1) { this.cpuWeapon = 'Rock'; }
  else if(x == 2) { this.cpuWeapon = 'Scissors'; }
  else if(x == 3) { this.cpuWeapon = 'Paper'; }
  return this.cpuWeapon;

};

Game.prototype.result = function() {
  var userWeapon = this.userWeapon;
  var cpuWeapon = this.cpuWeapon;
  if (this.gameRules[userWeapon] === cpuWeapon) { return 'Player Wins!'; }
  else if (userWeapon === cpuWeapon) { return 'Draw!'; }
  else { return 'Computer Wins!'; }
};
