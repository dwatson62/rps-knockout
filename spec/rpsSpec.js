describe('Engine', function() {

  beforeEach( function() {
    game = new Game;
  });

  it('Knows rock beats scissors', function() {
    game.userInput('Rock');
    spyOn(Math, 'random').and.returnValue(1);
    game.result();
    expect(game.winner).toEqual('Player Wins!');
  });
  it('Knows scissors beats paper', function() {
    game.userInput('Paper');
    spyOn(Math, 'random').and.returnValue(0.1);
    game.result();
    expect(game.winner).toEqual('Computer Wins!');
  });
  it('Knows paper beats rock', function() {
    game.userInput('Paper');
    spyOn(Math, 'random').and.returnValue(1);
    game.result();
    expect(game.winner).toEqual('Player Wins!');
  });
  it('Knows rock and rock is a draw', function() {
    game.userInput('Rock');
    spyOn(Math, 'random').and.returnValue(0.1);
    game.result();
    expect(game.winner).toEqual('Draw!');
  })
});
