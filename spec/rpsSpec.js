describe('Game', function() {

  beforeEach( function() {
    game = new Game();
  });

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

  describe('Tactical Mode', function() {

    it('is switched off by default', function() {
      expect(game.tacticalMode).toEqual(false);
    });

    it('can be switched on', function() {
      game.toggleTacticalMode();
      expect(game.tacticalMode).toEqual(true);
    });

    it('winning move defaults to first weapon at start of match', function() {
      expect(game.winningMove).toEqual('Rock');
    });

    it('when switched on, computer always selects previous winning move', function() {
      game.userInput('Scissors');
      game.result();
      game.toggleTacticalMode();
      game.userInput('Rock');
      expect(game.cpuInput()).toEqual(game.winningMove);
    });

  });

  cpuChoice = function(input) {
    spyOn(game, 'cpuInput').and.callFake(function() {
      game.cpuWeapon = input;
    });
  };

  describe('After a game', function() {

    it('it stores the previous winning move', function() {
      game.userInput('Paper');
      cpuChoice('Scissors');
      game.cpuInput();
      game.result();
      expect(game.winningMove).toEqual('Scissors');
    });

    it('updates player score if they win', function() {
      game.userInput('Rock');
      cpuChoice('Scissors');
      game.cpuInput();
      game.result();
      expect(game.playerScore).toEqual(1);
    });

    it('updates computer score if the player loses', function() {
      game.userInput('Paper');
      cpuChoice('Scissors');
      game.cpuInput();
      game.result();
      expect(game.cpuScore).toEqual(1);
    });

    it('scores stay the same in a draw', function() {
      game.userInput('Paper');
      cpuChoice('Paper');
      game.cpuInput();
      game.result();
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

  describe('When the match ends', function() {

    var numberNeededToWin;

    beforeEach(function() {
      numberNeededToWin = Math.round(game.bestOfRounds / 2);
    });

    it('player sees a victory message if they win', function() {
      cpuChoice('Scissors');
      game.userInput('Rock');
      game.cpuInput();
      for (x = 1; x <= numberNeededToWin; x ++) {
        game.result();
      }
      expect(game.checkFinalResult()).toEqual('Player wins the match!');
    });

    it('player sees a defeat message if they lose', function() {
      cpuChoice('Scissors');
      game.userInput('Paper');
      game.cpuInput();
      for (x = 1; x <= numberNeededToWin; x ++) {
        game.result();
      }
      expect(game.checkFinalResult()).toEqual('The computer wins the match!');
    });

  });


});
