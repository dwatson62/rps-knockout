describe('Engine', function() {

  beforeEach( function() {
    game = new Game();
  });

  cpuChoice = function(input) {
    spyOn(game, 'cpuInput').and.callFake(function() {
      return input;
    });
  };

  describe('Player wins', function() {

    it('Rock beats Scissors', function() {
      game.userInput('Rock');
      cpuChoice('Scissors');
      game.result();
      expect(game.winner).toEqual('Player Wins!');
    });

    it('Scissors beats Paper', function() {
      game.userInput('Scissors');
      cpuChoice('Paper');
      game.result();
      expect(game.winner).toEqual('Player Wins!');
    });

    it('Paper beats Rock', function() {
      game.userInput('Paper');
      cpuChoice('Rock');
      game.result();
      expect(game.winner).toEqual('Player Wins!');
    });

  });

  describe('Player loses', function() {

    it('Rock beats Scissors', function() {
      cpuChoice('Rock');
      game.userInput('Scissors');
      game.result();
      expect(game.winner).toEqual('Computer Wins!');
    });

    it('Scissors beats Paper', function() {
      cpuChoice('Scissors');
      game.userInput('Paper');
      game.result();
      expect(game.winner).toEqual('Computer Wins!');
    });

    it('Paper beats Rock', function() {
      cpuChoice('Paper');
      game.userInput('Rock');
      game.result();
      expect(game.winner).toEqual('Computer Wins!');
    });

  });

  describe('A draw', function () {

    it('Rock draws with Rock', function() {
      game.userInput('Rock');
      cpuChoice('Rock');
      game.result();
      expect(game.winner).toEqual('Draw!');
    });

    it('Scissors draws with Scissors', function() {
      game.userInput('Scissors');
      cpuChoice('Scissors');
      game.result();
      expect(game.winner).toEqual('Draw!');
    });

    it('Paper draws with Paper', function() {
      game.userInput('Paper');
      cpuChoice('Paper');
      game.result();
      expect(game.winner).toEqual('Draw!');
    });

  });


});
