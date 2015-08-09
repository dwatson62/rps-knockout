function Game() {
  this.gameRules = { 'Rock': ['Scissors', 'Lizard'], 'Scissors': ['Paper', 'Lizard'], 'Paper': ['Rock', 'Spock'], 'Lizard': ['Paper', 'Spock'], 'Spock': ['Scissors', 'Rock'] };
  this.weapons = Object.keys(this.gameRules);
}

Game.prototype.userInput = function(weapon) {
  this.userWeapon = weapon;
  return weapon;
};

Game.prototype.generate = function() {
  var x = Math.floor((Math.random() * this.weapons.length));
  return x;
};

Game.prototype.cpuInput = function() {
  var x = this.generate();
  this.cpuWeapon = this.weapons[x];
  return this.cpuWeapon;
};

Game.prototype.result = function() {
  if (this.userWeapon === this.cpuWeapon) { return 'Draw!'; }
  var userWeapon = this.gameRules[this.userWeapon];
  for (var i in userWeapon) {
    if (userWeapon[i] === this.cpuWeapon) { return 'Player Wins!'; }
  }
    return 'Computer Wins!';
};
