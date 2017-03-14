
demo.state4 = function(){};
demo.state4.prototype = {
    //it's use for preload images & it called one time.
    preload: function(){}, 
    // it's use for settings the initial value of everything in game state.
    create: function(){
        game.stage.backgroundColor = '#4400cc';
        console.log('state4');
        addChangeStateEventListeners();
    }, 
    // it's update the frame of the game. 60times of a game.
    update: function(){} 
};