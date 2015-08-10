describe('Game', function() {

  beforeEach( function() {
    game = new Game();
  });

  cpuChoice = function(input) {
    spyOn(game, 'cpuInput').and.callFake(function() {
      game.cpuWeapon = input;
    });
  };

  describe('New game', function() {

    it('Player score starts at 0', function() {
      expect(game.playerScore).toEqual(0);
    });

    it('Computer score starts at 0', function() {
      expect(game.playerScore).toEqual(0);
    });

    it('Player score starts at 0', function() {
      expect(game.playerScore).toEqual(0);
    });

    it('Can start a new game and reset scores', function() {
      game.playerScore = 1;
      game.newGame();
      expect(game.playerScore).toEqual(0);
    });

  });

  describe('Player wins', function() {

    it('Rock beats Scissors', function() {
      game.userInput('Rock');
      cpuChoice('Scissors');
      game.cpuInput();
      expect(game.result()).toEqual('You Win!');
    });

    it('Scissors beats Paper', function() {
      game.userInput('Scissors');
      cpuChoice('Paper');
      game.cpuInput();
      expect(game.result()).toEqual('You Win!');
    });

    it('Paper beats Rock', function() {
      game.userInput('Paper');
      cpuChoice('Rock');
      game.cpuInput();
      expect(game.result()).toEqual('You Win!');
    });

    it('Spock beats Rock', function() {
      game.userInput('Spock');
      cpuChoice('Rock');
      game.cpuInput();
      expect(game.result()).toEqual('You Win!');
    });

    it('Lizard beats Paper', function() {
      game.userInput('Lizard');
      cpuChoice('Paper');
      game.cpuInput();
      expect(game.result()).toEqual('You Win!');
    });

  });

  describe('Player loses', function() {

    it('Rock beats Scissors', function() {
      cpuChoice('Rock');
      game.userInput('Scissors');
      game.cpuInput();
      expect(game.result()).toEqual('You Lose!');
    });

    it('Scissors beats Paper', function() {
      cpuChoice('Scissors');
      game.userInput('Paper');
      game.cpuInput();
      expect(game.result()).toEqual('You Lose!');
    });

    it('Paper beats Rock', function() {
      cpuChoice('Paper');
      game.userInput('Rock');
      game.cpuInput();
      expect(game.result()).toEqual('You Lose!');
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

  describe('The match ends when a player wins more than half the games in the set', function() {

    it('if the player wins they see a victory message', function() {
      cpuChoice('Scissors');
      game.userInput('Rock');
      game.cpuInput();
      game.result();
      game.result();
      game.result()
      expect(game.checkFinalResult()).toEqual('Player wins the match!')
    });

    it('if the player loses they see a defeat message', function() {
      cpuChoice('Scissors');
      game.userInput('Paper');
      game.cpuInput();
      game.result();
      game.result();
      game.result()
      expect(game.checkFinalResult()).toEqual('The computer wins the match!')
    });

  });


});
