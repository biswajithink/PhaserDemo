var arrow, startPointX, startPointY, endPointX, endPointY, leaveway = 10;
demo.state7 = function(){};
demo.state7.prototype = {
    //it's use for preload images & it called one time.
    preload: function(){
        game.load.image('arrow', 'assets/sprites/arrow.png');
    }, 
    // it's use for settings the initial value of everything in game state.
    create: function(){
        game.stage.backgroundColor = '#bf40bf';
        //console.log('state7');
        addChangeStateEventListeners();
        
        arrow = game.add.sprite(centerX, centerY, 'arrow');
        arrow.anchor.setTo(0.5);
        
        game.input.onDown.add(this.startSwipe); // on click the mouse
        game.input.onUp.add(this.getSwipeDirection); // on click & move-out the mouse of the iframe
    }, 
    // it's update the frame of the game. 60times of a game.
    update: function(){},
    startSwipe: function(){
        //console.log(game.input.x + ' ' + game.input.y); // get the position where the mouse cilckable
        
        startPointX = game.input.x; // position of x
        startPointY = game.input.y; // position of y 
    },
    getSwipeDirection: function(){
        //console.log(game.input.x + ' ' + game.input.y); // location the mouse swipe/clickable right/left or top/bottom
        
        endPointX = game.input.x; // position of x
        endPointY = game.input.y; // position of y
        
        if(Math.abs(endPointY - startPointY) < leaveway && Math.abs(endPointX - startPointX) < leaveway){
            return false;
        }
        
        if(Math.abs(endPointY - startPointY) < Math.abs(endPointX - startPointX)){
            console.log('Horizontal');
            if(endPointX > startPointX){
                swipeDirection = 180;
                changeState(null, 6);
            } else{
                swipeDirection = 0;
                changeState(null, 8);
            }
        }else{
            console.log('Vertical');
            if (endPointY > startPointY){
                swipeDirection = 90;
            } else {
                swipeDirection = 270;
            }
        }
        arrow.angle = swipeDirection;
    }
};