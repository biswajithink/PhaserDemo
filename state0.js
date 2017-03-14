var demo = {}, centerX = 1500/2, centerY = 1000/2, charecterOne, speed = 6;
demo.state0 = function(){};
demo.state0.prototype = {
    //it's use for preload images & it called one time.
    preload: function(){
        // first argument(key for image), second argument (path the images)
        //game.load.image('charecterOne', 'assets/sprites/Jetpack.png');
        
        // SpriteSheet
        game.load.spritesheet('charecterOne', 'assets/spritesheet/charecterOneSpritesheet.png', 700, 700);
        game.load.image('backgroundOne', 'assets/backgrounds/background1.jpg');
    }, 
    // it's use for settings the initial value of everything in game state.
    create: function(){
        //initialize the physics engine
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        game.stage.backgroundColor = '#000';
        console.log('state0');
        
        // add(listner(), listnerContext, priority, args)
        /* 1st stage
        game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);
        game.input.keyboard.addKey(Phaser.Keyboard.ZERO).onDown.add(changeState, null, null, 0);
        */ 
        
        /* 2nd stage
        addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
        addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
        addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
        addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
        addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
        addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
        addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
        addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
        addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
        addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
        */
        // 3rd stage for swiching all state
        addChangeStateEventListeners();
        
        // Movement whole background (x, y, background-width, background-height)
        game.world.setBounds(0, 0, 1920, 1000);
        
        // Responsive the iframe
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        // background preview
        var backgroundOne = game.add.sprite(0, 0, 'backgroundOne');
        
        // image preview (page-width, page-height, key)
        //game.add.sprite(1500/2, 1000/2, 'charecterOne'); // 1st step
        //game.add.sprite(centerX, centerY, 'charecterOne'); // 2nd step
        charecterOne = game.add.sprite(centerX, centerY, 'charecterOne'); // 2nd step
        
        
        
        // to center the image
        /*charecterOne.anchor.x = 0.5;
        charecterOne.anchor.y = 0.5;*/ // 1st step
        charecterOne.anchor.setTo(0.5, 0.5); // 2nd step (x,y)
        
        // image scale size
        charecterOne.scale.setTo(0.7, 0.7);
        
        // to enable physics in image
        game.physics.enable(charecterOne);
        charecterOne.body.collideWorldBounds = true;
        
        // image animation(key of animation, [order of frame])
        charecterOne.animations.add('fly', [0, 1, 2, 3, 4, 5]);
        
        
        // for camera follow
        game.camera.follow(charecterOne);
        
        // Deadzone for camera follow (x, y, rectangle-width, rectangle-height)
        game.camera.deadzone = new Phaser.Rectangle(centerX - 400, 0, 400, 1000);
    }, 
    // it's update the frame of the game. 60times of a game.
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            charecterOne.scale.setTo(0.7, 0.7);
            charecterOne.x += speed;
            // (key of animation, 0-60 for framing, animation loops)
            charecterOne.animations.play('fly', 16, true);
        } else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            charecterOne.scale.setTo(-0.7, 0.7);
            charecterOne.x -= speed;
            charecterOne.animations.play('fly', 16, true);
        }else{
            //charecterOne.animations.stop('fly'); // to stop animation play
            //charecterOne.frame=0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            charecterOne.y -= speed;
            if(charecterOne.y < 308){
                charecterOne.y = 308
            }
        } else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            charecterOne.y += speed;
            if(charecterOne.y > 692){
                charecterOne.y = 692
            }
        }
    } 
};
function changeState(i, stateNum){
    //console.log(i);
    game.state.start('state' + stateNum);
}

// key=press the keyboard key, fn=function that called, args=passed the arguments
function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}
function addChangeStateEventListeners(){    
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}
