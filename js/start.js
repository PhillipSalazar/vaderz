
var button;
	var ship;
var Start = {
  preload: function() {
    game.load.image("space","assets/galaxy-Y.png");
    game.load.image("playbutton", "assets/playbutton.png")

		game.load.image("turleship", "assets/Turtle.png");
		game.load.image("enemy", "assets/enemy.png");
		game.load.spritesheet("lightningship", "assets/Lightning.png",32,32,4);
		game.load.spritesheet("ufo", "assets/UFO.png", 32, 32, 4);
		game.load.spritesheet("para", "assets/Paranoid.png", 32, 32, 4);
		game.load.image("blue_bullet", "assets/blue_bullet.png");
		game.load.image("green_bullet", "assets/green_bullet.png");
		game.load.image("yellow_bullet", "assets/yellow_bullet.png");
		game.load.spritesheet("explosion", "assets/explosionFull.png", 256, 256);
		game.load.image("asteroid","assets/asteroid.png");
		game.load.spritesheet("explosionShip", "assets/explosion.png", 32,32);
		game.load.image("replay","assets/replay.png");
		game.load.audio("wheremyship", "assets/wheremyship.wav");
		game.load.audio("fly1","assets/Fly_1.mp3");
		game.load.audio("magicspace","assets/magicspace.mp3");
  },
  create: function() {
 background = game.add.image(0, 0, "space");
//game.add.sprite(0,0, "space");
background.scale.setTo(1.25,1.25);
    //var style = {font: "55px word_font", fill: "#ff0044"};
    var style = { font: "65px Audiowide", fill: "#ff0044", align: "center" };
    var text = game.add.text(game.world.centerX, game.world.centerY - 200, "Vaders", style);
    text.anchor.set(0.5);

    button = game.add.button(game.world.centerX, game.world.centerY, "playbutton", this.actionOnClick, this, 2, 1, 0);
    button.anchor.set(0.5);
    button.scale.setTo(0.75,0.75);
  },
  update: function() {
	//	background.tilePosition.y -= 1.5;


  },
  actionOnClick: function () {

    game.state.start("Menu");

}

}
