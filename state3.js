var sound;
demo.state3 = function(){};
demo.state3.prototype = {
    //it's use for preload images & it called one time.
    preload: function(){
        game.load.image('button1', 'assets/sprites/button1.png');
        game.load.image('button2', 'assets/sprites/button2.png');
        game.load.image('button3', 'assets/sprites/button3.png');
        game.load.audio('sword', 'assets/sounds/sword.mp3');
    }, 
    // it's use for settings the initial value of everything in game state.
    create: function(){
        
        sound = game.add.audio('sword');
        sound.addMarker('low', 0.15, 0.5);
        sound.addMarker('high', 1, 1.5);
        
        game.stage.backgroundColor = '#e600f8';
        //console.log('state3');
        addChangeStateEventListeners();
        // ( x.position, y.position, key.name, callback function )
        var b1 = game.add.button(100, 100, 'button1', function(){
            changeState(null, 1); // 1st arg null & 2nd arg is which state to gone
        });
        b1.scale.setTo(3, 3);
        
        var b2 = game.add.button(400, 400, 'button2', function(){
            changeState(null, 2); // 1st arg null & 2nd arg is which state to gone
        });
         b2.scale.setTo(3, 3);
        
        var b3 = game.add.button(700, 700, 'button3')
        b3.scale.setTo(3, 3);
        
        b1.onInputDown.add(this.tint, b1);
        b2.onInputDown.add(this.tint, b2);
        b3.onInputDown.add(this.tint, b3);
        
        b1.onInputUp.add(this.unTint, b1);
        b2.onInputUp.add(this.unTint, b2);
        b3.onInputUp.add(this.unTint, b3);
    },
    tint: function(){
        this.tint = 0xbbbbbb; // hex color chang when button tap
        sound.play('low');
    },
    unTint: function(){
        this.tint = 0xffffff; // hex color chang when button tap
        sound.play('high');
    },
    // it's update the frame of the game. 60times of a game.
    update: function(){} 
};