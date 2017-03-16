
demo.state4 = function(){};
demo.state4.prototype = {
    //it's use for preload images & it called one time.
    preload: function(){}, 
    // it's use for settings the initial value of everything in game state.
    create: function(){
        game.stage.backgroundColor = '#4400cc';
        //console.log('state4');
        addChangeStateEventListeners();
        
        /*a1 = game.add.sprite(50, 100, 'charecterTwo');
        a2 = game.add.sprite(600, 100, 'charecterTwo');
        a3 = game.add.sprite(1100, 100, 'charecterTwo');
        a1.scale.setTo(0.7, 0.7);
        
        // (keyname).to({position, time, 'pattern', for auto start tweet});
        game.add.tween(a1).to({y: 400}, 2000, 'Linear', true); // https://github.com/photonstorm/phaser-examples/tree/master/examples/tweens (for pattern)
        game.add.tween(a1).to({y: 400}, 2000, 'Linear', true);
        game.add.tween(a1).to({y: 400}, 2000, 'Linear', true);*/
    }, 
    // it's update the frame of the game. 60times of a game.
    update: function(){} 
};