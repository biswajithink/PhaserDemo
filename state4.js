var i;
demo.state4 = function(){};
demo.state4.prototype = {
    //it's use for preload images & it called one time.
    preload: function(){}, 
    // it's use for settings the initial value of everything in game state.
    create: function(){
        game.stage.backgroundColor = '#4400cc';
        //console.log('state4');
        addChangeStateEventListeners();
        
        a1 = game.add.sprite(50, 100, 'charecterTwo');
        a2 = game.add.sprite(400, 100, 'charecterTwo');
        a3 = game.add.sprite(600, 100, 'charecterTwo');
        a4 = game.add.sprite(800, 100, 'charecterTwo');
        a5 = game.add.sprite(1000, 100, 'charecterTwo');
        a6 = game.add.sprite(1200, 100, 'charecterTwo');
        a1.scale.setTo(0.3, 0.3);
        a2.scale.setTo(0.3, 0.3);
        a3.scale.setTo(0.3, 0.3);
        a4.scale.setTo(0.3, 0.3);
        a5.scale.setTo(0.3, 0.3);
        a6.scale.setTo(0.3, 0.3);
        
        // (keyname).to({position x & y}, time, 'pattern', for auto start tweet true or false, delay, repeat, yo-yo for move to starting position);
        game.add.tween(a1).to({y: 400}, 2000, 'Bounce', true); // https://photonstorm.github.io/phaser-ce/src_tween_TweenManager.js.html (for pattern)
        i = game.add.tween(a2).to({x: 300, y: 100}, 1000, 'Elastic.easeOut', true);
        game.add.tween(a3).from({y: 800, }, 2000, 'Circ.easeIn', true);
        game.add.tween(a4.anchor).to({x: 3, }, 2000, 'Quint.easeInOut', true, 1000, 2, true);
        game.add.tween(a5).to({alpha: 0.3, y: '+400' }, 2000, 'Back.easeOut', true); // y position add 400 with the past position
        game.add.tween(a6.anchor).to({y: -2, }, 2000, 'Quint.easeInOut', true, 1000, false, true).loop(true); // for loop forever
    }, 
    // it's update the frame of the game. 60times of a game.
    update: function(){} 
};