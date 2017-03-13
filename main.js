var game = new Phaser.Game(600, 400, Phaser.AUTO);

// 'state1' is name or key of state & 'demo.state1' is property of demo object.
game.state.add('state1', demo.state1); 

// then start the state it will be start first
game.state.start('state1');