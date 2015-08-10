describe('Game Application', function() {

  var testModel = new ViewModel();

  beforeEach(function() {
    testModel.newGame();
  });

  it('is defined', function() {
    expect(testModel).toBeDefined();
  });

  it('can return a players weapon choice', function() {
    testModel.selectWeapon('Rock');
    expect(testModel.weapon()).toEqual('Rock');
  });

  it('can return the computers random weapon choice', function() {
    testModel.opponentSelect();
    var weapon = testModel.opponent();
    expect(weapon).toBeDefined();
  });

  xit('can handle a player victory', function() {
    // I was unable to stub computer behaviour
    // I attempted a spy, but this did not work

    spyOn(testModel, 'opponent').and.returnValue('Paper');

    testModel.selectWeapon('Scissors');
    testModel.opponentSelect();
    var result = testModel.result();
    expect(result).toEqual('You Lose!');
  });

  xit('can handle a player defeat', function() {
    // Same as above, but for a player defeat
    spyOn(testModel, 'opponent').and.returnValue('Paper');
    testModel.selectWeapon('Rock');
    testModel.opponentSelect();
    var result = testModel.result();
    expect(result).toEqual('You Lose!');
  });

  it('can begin a new game and reset the scores', function() {
    testModel.selectWeapon('Rock');
    testModel.opponentSelect();
    testModel.result();
    testModel.newGame();
    expect(testModel.playerScore()).toEqual('0/3');
  });

  xit('when a player wins 3 times, the game ends', function() {
    // To test that the game can end, but could not due to stubbing the computer
    testModel.playerScore('3/3');
    testModel.result();
    expect(testModel.gameEnded()).toEqual(true);
  });

});