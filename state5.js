var accel = 200, platform, platformGroup;
demo.state5 = function(){};
demo.state5.prototype = {
    //it's use for preload images & it called one time.
    preload: function(){
        game.load.image('platform', 'assets/sprites/platform.png');
    }, 
    // it's use for settings the initial value of everything in game state.
    create: function(){
        game.stage.backgroundColor = '#00b3b3';
        //console.log('state5');
        addChangeStateEventListeners();
        
        platform = game.add.sprite(200, 800, 'platform');
        platform.scale.setTo(0.3, 0.3);
        platformGroup = game.add.group(); // for multiple platforms
        platformGroup.create(500, 600, 'platform'); // creating a duplicate platform with defference position
        platformGroup.create(800, 400, 'platform'); // creating a duplicate platform with defference position
        platformGroup.create(1100, 200, 'platform'); // creating a duplicate platform with defference position
        platformGroup.setAll('scale.x', 0.3);
        platformGroup.setAll('scale.y', 0.3);
        
        ch1 = game.add.sprite(200, 0, 'charecterTwo');
        ch1.scale.setTo(0.3, 0.3);
        
        game.physics.enable([ch1, platform, platformGroup]); // enble physics to array
        ch1.body.gravity.y = 500; // give it gravity in vertical position
        ch1.body.bounce.y = 0.3; // when ch1 hit the ground it bounce 0.3sec
        ch1.body.drag.x = 50; // press right/left key it stop after distence cover that input.
        ch1.body.collideWorldBounds = true; // collideWorldBounds for fixed in window
        
        platform.body.immovable = true; // for fixed the property
        platformGroup.setAll('body.immovable', true); // fixed the all duplicate platforms
    }, 
    // it's update the frame of the game. 60times of a game.
    update: function(){
        game.physics.arcade.collide(ch1, [platform, platformGroup]); // ch1 collide in two properties when they hit together
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            ch1.body.acceleration.x = -accel; // accel/move to left
        }else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            ch1.body.acceleration.x = accel; // accel/move to right
        }else {
            ch1.body.acceleration.x = 0; // accel/move stop
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            // Defferent velocity to acceleration because acceleration get time to movement but velocity not.
            ch1.body.velocity.y = -300; // for jump away the value
        }
    } 
};