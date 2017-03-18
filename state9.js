var ref, hsText = [], hs = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
demo.state9 = function(){};
demo.state9.prototype = {
    //it's use for preload images & it called one time.
    preload: function(){}, 
    // it's use for settings the initial value of everything in game state.
    create: function(){
        game.stage.backgroundColor = '#29293d';
        //console.log('state9');
        addChangeStateEventListeners();
        
        //ref = new Firebase('https://phaserdemo-3d711.firebaseio.com/');
        ref = new Firebase('https://console.firebase.google.com/project/phaserdemo-3d711/database/data');
        
        for (var i = 1; i < 11; i++){
            // (position.x, position.y + (each text break down 90px bottom), printed text + dot, {font style}.middle with write align) 
            game.add.text(500, 20 + (i * 90), i + '. ', {fontSize: '40px', fill: '#585858'}).anchor.setTo(1, 0);
        }
        
        // print to hs array
        for(i = 0; i < 10; i++){
            // when hsText looped it prints the hs array element & (i + 1) because it -1 above for loop
            hsText[i] = game.add.text(500, 20 + ((i + 1) * 90), hs[i], {fontSize: '40px', fill: '#fff'});
        }
        
        /*var updateHSText = this.updateHSText;
        ref.on('value', function(snapshot){
            console.log(this);
            updateHSText(snapshot.val().hs);
        })*/
    }, 
    // it's update the frame of the game. 60times of a game.
    update: function(){}
    /*updateHSText: function(){
        for(var i = 0; 1 < 10; i++){
            hsText[i].text = hs[i];
        }
    }*/
};