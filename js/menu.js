
var Menu = {
  preload: function() {
  //  game.load.image("space","assets/corona_dn.png");
    game.load.image("turtleship", "assets/Turtle.png");
    game.load.spritesheet("lightningship", "assets/Lightning.png",32,32,4);
    game.load.spritesheet("ufo", "assets/UFO.png", 32, 32, 4);
    game.load.spritesheet("para", "assets/Paranoid.png", 32, 32, 4);
  },
  create : function() {
    //var background = game.add.sprite(0,0, "space");
    //background.scale.setTo(1.25,1.25);
      background = game.add.image(0, 0, "space");
      background.scale.setTo(1.25,1.25);
      var style = { font: "42px Audiowide", fill: "#ff0044", align: "center" };
      var text = game.add.text(game.world.centerX, game.world.centerY / 3, "Choose your ship!", style);
      text.anchor.setTo(0.5,0.5);

      if (flag === true) {
        flag_text = "true";
      } else if (flag === false){
        flag_text = "false";
      }

     lightningship = game.add.sprite(game.world.centerX / 1.4, game.world.centerY, 'lightningship');
     lightningship.anchor.setTo(0.5,0.5);
     lightningship.scale.setTo(1.5,1.5);
     anim = lightningship.animations.add('spin');
     lightningship.animations.play('spin', 10, true);
     lightningship.inputEnabled = true;
     lightningship.events.onInputDown.add(this.ship1, this);

     para =  game.add.sprite(game.world.centerX, game.world.centerY, 'para');
     para.anchor.setTo(0.5,0.5);
     para.scale.setTo(1.5,1.5);
     anim = para.animations.add('spin');
     para.animations.play('spin', 10, true);
     para.inputEnabled = true;
     para.events.onInputDown.add(this.ship2, this);

     ufo = game.add.sprite(game.world.centerX / 0.8, game.world.centerY, 'ufo');
     ufo.anchor.setTo(0.5,0.5);
     ufo.scale.setTo(1.5,1.5);
     anim = ufo.animations.add('spin');
     ufo.animations.play('spin', 10, true);
     ufo.inputEnabled = true;
     ufo.events.onInputDown.add(this.ship3, this);

     var tutorial = "how to play: \n" +
                    "use  <- ->  keys to move, and spacebar to shoot.";
     var tutorialsText = game.add.text(game.world.centerX , game.world.centerY / 0.6, tutorial, style );
     tutorialsText.anchor.setTo(0.5,0.5);
     tutorialsText.scale.setTo(0.75,0.75);
/*
     sound_text = game.add.text(game.world.centerX / 0.57, game.world.centerY / 10, "sound: " + flag_text, style );
     sound_text.anchor.setTo(0.5,0.5);
     sound_text.scale.set(0.5,0.5);
     sound_text.inputEnabled = true;
     sound_text.events.onInputDown.add(this.soundz, this);
*/
  },

  ship1: function(){
    chose = 1;
    game.state.start("Game");
  },

  ship2 : function() {
    chose = 2;
    game.state.start("Game");
  },

  ship3 : function() {
    chose = 3;
    game.state.start("Game");
  },
/*
  soundz : function() {
    if (flag === true){
      flag_text = 'true';
      sound_text.text = "sound: " + flag_text;
    }else if  (flag === false){
      flag_text = 'false';
      sound_text.text = "sound: " + flag_text;
    }
    flag = !flag;
  },
*/
  update : function(){
  //  background.tilePosition.y -= 1.5;
  }


}
