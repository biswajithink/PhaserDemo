var barrel, bullets, velocity = 1000, nextFire = 0, fireRate = 200, enemy, bullet, enemyGroup;
demo.state2 = function(){};
demo.state2.prototype = {
    //it's use for preload images & it called one time.
    preload: function(){
        game.load.image('base', 'assets/sprites/cannonBase.png')
        game.load.image('barrel', 'assets/sprites/cannonBarrel.png')
        game.load.image('bullet', 'assets/sprites/bullet.png')
    }, 
    // it's use for settings the initial value of everything in game state.
    create: function(){
        game.stage.backgroundColor = '#80ff80';
        //console.log('state2');
        addChangeStateEventListeners();
        
        var base = game.add.sprite(centerX, centerY, 'base');
        base.anchor.setTo(0.5);
        base.scale.setTo(1);
        
        
        bullets = game.add.group(); // group for use many sprites
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(50, 'bullet'); // number of shoot, key of sprites
        bullets.setAll('checkWorldBounds', true); // every sprites set to checkWorldBounds property then fire more than createMultiple number
        bullets.setAll('outOfBoundsKill', true); // every sprites kill to outOfBoundsKill property
        bullets.setAll('anchor.y', 0.5);
        bullets.setAll('scale.x', 1.25);
        bullets.setAll('scale.y', 1.25);
        
        
        barrel = game.add.sprite(centerX, centerY, 'barrel');
        barrel.anchor.setTo(0.2, 0.5);
        barrel.scale.setTo(1);
        
        enemy = game.add.sprite(100, 300, 'charecterTwo');
        enemy.scale.setTo(0.5, 0.5);        
        game.physics.enable(enemy);
        
        enemyGroup = game.add.group();
        enemyGroup.enableBody = true;
        enemyGroup.physicsBodyType = Phaser.Physics.ARCADE;
        
        // repeate the enemy
        for(var i = 0; i < 3; i++){
            enemyGroup.create(1300, 300 * i + 180, 'charecterTwo')
        }
        enemyGroup.setAll('anchor.x', 0.3);
        enemyGroup.setAll('anchor.y', 0.3);
        enemyGroup.setAll('scale.x', 0.3);
        enemyGroup.setAll('scale.y', 0.3);
    }, 
    // it's update the frame of the game. 60times of a game.
    update: function(){
        // barrel rotation with mouse moving
        barrel.rotation = game.physics.arcade.angleToPointer(barrel);
        // on mouseClick fire() active
        if (game.input.activePointer.isDown){
            this.fire();
        }
        // how to remove a sprites, when one is overright other
        game.physics.arcade.overlap(bullets, enemy, this.hitEnemy); // first 2 args is to overlap the 2 sprites & 3rd is the callback function
        game.physics.arcade.overlap(enemyGroup, bullets, this.hitGroup); // first 2 args is to overlap the 2 sprites & 3rd is the callback function
    },  
    fire: function(){
        if (game.time.now > nextFire){
            nextFire = game.time.now + fireRate; // game.time.now = how many time's the game is running
            console.log('firing');
            bullet = bullets.getFirstDead(); // bullet fire
            bullet.reset(barrel.x, barrel.y); // position of bullet to reset when fired

            game.physics.arcade.moveToPointer(bullet, velocity); // follow the barrel with angleToPointer is moveToPonter, velocity is time to fire
            bullet.rotation = game.physics.arcade.angleToPointer(bullet); // move the pointer of bullet where it fire.
        }        
    },
    hitEnemy: function(){
        console.log("hit");
        enemy.kill();
        bullet.kill();
    },
    hitGroup: function(e){
        bullet.kill();        
        e.kill();        
    }
};