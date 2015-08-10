function ViewModel() {
  var self = this;
  var game = new Game();
  var numberNeedToWin = '/' + Math.round(game.bestOfRounds / 2);

  self.tacticalMode = ko.observable('On');
  self.weapon = ko.observable('');
  self.opponent = ko.observable('');
  self.result = ko.observable('');
  self.playerScore = ko.observable(game.playerScore + numberNeedToWin);
  self.cpuScore = ko.observable(game.cpuScore + numberNeedToWin);
  self.gameEnded = ko.observable(false);
  self.weaponButtons = ko.observable(Object.keys(game.gameRules));

  self.newGame = function() {
    game.newGame();
    self.updateScores();
    self.weapon('');
    self.opponent('');
    self.result('');
    self.gameEnded(false);
  };

  self.updateScores = function() {
    self.playerScore(game.playerScore + numberNeedToWin);
    self.cpuScore(game.cpuScore + numberNeedToWin);
  };

  self.toggleTacticalMode = function() {
    self.tacticalMode(game.toggleTacticalMode());
  };

  self.selectWeapon = function(input) {
    game.userInput(input);
    self.weapon(input);
    self.opponentSelect();
  };

  self.opponentSelect = function() {
    var weapon = game.cpuInput();
    self.opponent(weapon);
    self.seeResult();
  };

  self.seeResult = function() {
    var result = game.result();
    self.result(result);
    self.updateScores();
    self.checkFinalResult();
  };

  self.checkFinalResult = function() {
    var result = game.checkFinalResult();
    if (result !== null) {
      self.result(result);
      self.gameEnded(true);
    }
  };

}

ko.applyBindings(new ViewModel());

