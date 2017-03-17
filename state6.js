var volcano;
demo.state6 = function(){};
demo.state6.prototype = {
    //it's use for preload images & it called one time.
    preload: function(){
        game.load.image('volcanoRock', 'assets/sprites/volcanoRock.png');
        game.load.image('redBall', 'assets/sprites/redBall.png');
        game.load.image('yellowBall', 'assets/sprites/yellowBall.png');
        game.load.image('orangeBall', 'assets/sprites/orangeBall.png');
    }, 
    // it's use for settings the initial value of everything in game state.
    create: function(){
        game.stage.backgroundColor = '#178a98';
        //console.log('state6');
        addChangeStateEventListeners();
        
        volcano = game.add.sprite(centerX, 999, 'volcanoRock');
        volcano.scale.setTo(0.8, 0.8);
        volcano.anchor.setTo(0.5, 1);
        
        //location x, location y, maximum no of particles, 
        var emitter = game.add.emitter(1500, 914, 2000);        
        // ([keys of emittet], frame to use but in that case i use array so it 0, no of particles who generate, collide to body element, collide with the world/window)
        emitter.makeParticles(['redBall', 'yellowBall', 'orangeBall'], 0, 5000, false, true);
        
       
        
        emitter.scale.setTo(0.5, 0.5);
        // maxHorizontal speed, maxVertical speed throwout the balls
        emitter.maxParticleSpeed.set(300, -300);
        // minHorizontal speed, minVertical speed throwout the balls
        emitter.minParticleSpeed.set(-300, -100);
        //emitter.gravity = 300; // fall down faster
        
        
         //emitter.start(false, 5000, 20);
        
        // change the time events when the volcano will start
        game.time.events.add(500, function(){
            // (explode the particulars, how times the particle came out, frequent time one to another particle when came out)
            emitter.start(false, 5000, 20);
            // to continue the flow of balls(time, callback fn)
            game.time.events.loop(200, function(){
                if (emitter.on){
                    emitter.on = false;
                }else{
                    emitter.on = true;
                }
            })
        })
        
    }, 
    // it's update the frame of the game. 60times of a game.
    update: function(){} 
};