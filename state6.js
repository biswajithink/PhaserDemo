
demo.state6 = function(){};
demo.state6.prototype = {
    //it's use for preload images & it called one time.
    preload: function(){}, 
    // it's use for settings the initial value of everything in game state.
    create: function(){
        game.stage.backgroundColor = '#ffd11a';
        console.log('state6');
        addChangeStateEventListeners();
    }, 
    // it's update the frame of the game. 60times of a game.
    update: function(){} 
};