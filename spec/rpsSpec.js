describe('Engine', function() {

  beforeEach( function() {
    game = new Game();
  });

  cpuChoice = function(input) {
    spyOn(game, 'cpuInput').and.callFake(function() {
      game.cpuWeapon = input;
    });
  };

  describe('Player wins', function() {

    it('Rock beats Scissors', function() {
      game.userInput('Rock');
      cpuChoice('Scissors');
      game.cpuInput();

      expect(game.result()).toEqual('Player Wins!');
    });

    it('Scissors beats Paper', function() {
      game.userInput('Scissors');
      cpuChoice('Paper');
      game.cpuInput();
      expect(game.result()).toEqual('Player Wins!');
    });

    it('Paper beats Rock', function() {
      game.userInput('Paper');
      cpuChoice('Rock');
      game.cpuInput();
      expect(game.result()).toEqual('Player Wins!');
    });

    it('Spock beats Rock', function() {
      game.userInput('Spock');
      cpuChoice('Rock');
      game.cpuInput();
      expect(game.result()).toEqual('Player Wins!');
    });

    it('Lizard beats Paper', function() {
      game.userInput('Lizard');
      cpuChoice('Paper');
      game.cpuInput();
      expect(game.result()).toEqual('Player Wins!');
    });

  });

  describe('Player loses', function() {

    it('Rock beats Scissors', function() {
      cpuChoice('Rock');
      game.userInput('Scissors');
      game.cpuInput();
      expect(game.result()).toEqual('Computer Wins!');
    });

    it('Scissors beats Paper', function() {
      cpuChoice('Scissors');
      game.userInput('Paper');
      game.cpuInput();
      expect(game.result()).toEqual('Computer Wins!');
    });

    it('Paper beats Rock', function() {
      cpuChoice('Paper');
      game.userInput('Rock');
      game.cpuInput();
      expect(game.result()).toEqual('Computer Wins!');
    });

  });

  describe('A draw', function () {

    it('Rock draws with Rock', function() {
      game.userInput('Rock');
      cpuChoice('Rock');
      game.cpuInput();
      expect(game.result()).toEqual('Draw!');
    });

    it('Scissors draws with Scissors', function() {
      game.userInput('Scissors');
      cpuChoice('Scissors');
      game.cpuInput();
      expect(game.result()).toEqual('Draw!');
    });

    it('Paper draws with Paper', function() {
      game.userInput('Paper');
      cpuChoice('Paper');
      game.cpuInput();
      expect(game.result()).toEqual('Draw!');
    });

  });


});
