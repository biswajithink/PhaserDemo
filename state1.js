
demo.state1 = function(){};
demo.state1.prototype = {
    //it's use for preload images & it called one time.
    preload: function(){
        game.load.image('backgroundTwo', 'assets/backgrounds/background2.jpg', 1920, 1000);
    }, 
    // it's use for settings the initial value of everything in game state.        
    create: function(){
        //game.stage.backgroundColor = '#ddd';
        //console.log('state1');
        
    
        // background preview
        var backgroundTwo = game.add.sprite(0, 0, 'backgroundTwo');
        
        
        
        // add(listner(), listnerContext, priority, args)
        /* 1st stage
        game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);
        game.input.keyboard.addKey(Phaser.Keyboard.ZERO).onDown.add(changeState, null, null, 0);
        */
        addChangeStateEventListeners();
    }, 
    // it's update the frame of the game. 60times of a game.
    update: function(){} 
};