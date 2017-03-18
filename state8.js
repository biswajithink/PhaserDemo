var text, sentence;

/*WebFontConfig = {
  google: {
    families: ['Raleway']
  }
};*/

demo.state8 = function(){};
demo.state8.prototype = {
    //it's use for preload images & it called one time.
    preload: function(){
        //game.load.script('webfont', '//fonts.googleapis.com/css?family=Raleway" rel="stylesheet')
    }, 
    // it's use for settings the initial value of everything in game state.
    create: function(){
        game.stage.backgroundColor = '#a3a375';
        //console.log('state8');
        addChangeStateEventListeners();
        
        text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.';
        
        game.add.text(100, 100, 'Hello World !', {fontSize:'32px', fill:'#fff'}); // position x, y & hard text
        
        // (position.x, position.y, width where the text is printed, variable whose printed out, font-size, time to show one by one charecter, fill color of text)
        this.spellOutText(100, 300, 1000, text, 30, 40, '#ccc');
    }, 
    // it's update the frame of the game. 60times of a game.
    //update: function(){} 
    
    // (position.x, position.y, width to display, variable to display, font-size, speed to show in page, fill to color, font is optional)
    spellOutText: function(x, y, width, text, fontSize, speed, fill, font){
        
        // (x & y get the spellOutText position value, when loop is starting then text printed in this empty string, {this object for anything for font related})
        sentence = game.add.text(x, y, '', {fontSize: fontSize + 'px', fill: fill, font: font});
        
        // this variable add for show the current line or break the line when text is overflow 
        var currentLine = game.add.text(10, 10, '', {fontSize: fontSize, font: font}); 
        currentLine.alpha = 0; // for hide the current line 
        
        // how show text in page with speed, function for display text charecter
        var loop = game.time.events.loop(speed, addChar); 
        
        // index is how much text is typed in document default is 0 because it will be start always 0index
        var index = 0;
        
        function addChar(){
            
            sentence.text += text[index];
            currentLine.text += text[index];
            
            // when a line greater than total width then it break the line 
            if(currentLine.width > width && text[index] == ' '){
                sentence.text += '\n'; // '\n' is go to next line in js
                currentLine.text = '';
            }
            
            // when the pragraph is complete then stop the loop
            if(index >= text.length - 1){
                game.time.events.remove(loop);
                console.log('stop');
            }
            index++;
        }
    }
};