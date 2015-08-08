function ViewModel() {
  var self = this;
  self.weapon = ko.observable('')
  self.opponent = ko.observable('')
  self.result = ko.observable('')

  var game = new Game();

  self.selectWeapon = function(input) {
    var weapon = game.userInput(input);
    self.weapon(weapon);
    self.opponentSelect();
    self.seeResult();
  }

  self.opponentSelect = function() {
    var weapon = game.cpuInput();
    self.opponent(weapon);
  }

  self.seeResult = function() {
    var result = game.result();
    self.result(result);
  }
};

ko.applyBindings(new ViewModel());
