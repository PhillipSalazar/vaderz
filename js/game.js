var Game = {

		preload : function() {
		//	game.load.image("space","assets/corona_dn.png");

		},

		create: function() {

			console.log(chose);
			game.physics.startSystem(Phaser.Physics.ARCADE);
		background = game.add.image(0, 0 , "space");
		background.scale.setTo(1.25,1.25);
		score = 0;
	 //game.stage.backgroundColor = '#0072bc';

	 // The enemy's bullets
	 enemyBullets = game.add.group();
	 enemyBullets.enableBody = true;
	 enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
	 enemyBullets.createMultiple(30, 'green_bullet');
	 enemyBullets.setAll('anchor.x', 0.5);
	 enemyBullets.setAll('anchor.y', 1);
	 enemyBullets.setAll('outOfBoundsKill', true);
	 enemyBullets.setAll('checkWorldBounds', true);


	 lives = game.add.group();

	 if (chose === 1){
	 bullets = game.add.group();
			 bullets.enableBody = true;
			 bullets.physicsBodyType = Phaser.Physics.ARCADE;

	 for (var i = 0; i < 3; i++)
	 {
			 var b = bullets.create(0, 0, 'yellow_bullet');
			 b.name = 'bullet' + i;
			 b.exists = false;
			 b.visible = false;
			 b.checkWorldBounds = true;
			 b.events.onOutOfBounds.add(this.resetBullet, this);
			 b.anchor.setTo(0.5);
			 b.rotation = -1.5;
	 }
} else if (chose === 2){
	bullets = game.add.group();
			bullets.enableBody = true;
			bullets.physicsBodyType = Phaser.Physics.ARCADE;

	for (var i = 0; i < 3; i++)
	{
			var b = bullets.create(0, 0, 'green_bullet');
			b.name = 'bullet' + i;
			b.exists = false;
			b.visible = false;
			b.checkWorldBounds = true;
			b.events.onOutOfBounds.add(this.resetBullet, this);
			b.anchor.setTo(0.5);
			b.rotation = -1.5;
	}
} else if (chose === 3){
	bullets = game.add.group();
			bullets.enableBody = true;
			bullets.physicsBodyType = Phaser.Physics.ARCADE;

	for (var i = 0; i < 3; i++)
	{
			var b = bullets.create(0, 0, 'blue_bullet');
			b.name = 'bullet' + i;
			b.exists = false;
			b.visible = false;
			b.checkWorldBounds = true;
			b.events.onOutOfBounds.add(this.resetBullet, this);
			b.anchor.setTo(0.5);
			b.rotation = -1.5;
	}
}
/*
	bullet = game.add.sprite(game.world.centerX, game.world.centerY/0.60,'bullets');
	this.physics.enable(bullet, Phaser.Physics.ARCADE);
	bullet.anchor.set(0.5);
	bullet.body.rotation = false;
	bullet.rotation = -1.5;
*/
	//ship = game.add.sprite(game.world.centerX, game.world.centerY/0.60 , "turleship");

if (chose === 1){
	ship = game.add.sprite(game.world.centerX, game.world.centerY/0.60 , "lightningship");
	anim = ship.animations.add('spin');
	ship.animations.play('spin', 10, true);
	for (var i = 0; i < 3; i++)
 {
		 var livez = lives.create(game.world.width - 200 + (50 * i), 60, 'lightningship');
		 livez.anchor.setTo(0.5, 0.5);
		 livez.angle = 90;
		 livez.alpha = 0.4;
	 	livez.rotation = 0;
 }

 music = game.add.audio('wheremyship');
 music.play();
}
else if (chose === 2){
	ship = game.add.sprite(game.world.centerX, game.world.centerY/0.60 , "para");
	anim = ship.animations.add('spin');
	ship.animations.play('spin', 10, true);
	for (var i = 0; i < 3; i++)
 {
		 var livez = lives.create(game.world.width - 200 + (50 * i), 60, 'para');
		 livez.anchor.setTo(0.5, 0.5);
		 livez.angle = 90;
		 livez.alpha = 0.4;
		 livez.rotation = 0;
 }
 music = game.add.audio('magicspace');
 music.play();
}
else if (chose === 3 ){
	ship = game.add.sprite(game.world.centerX, game.world.centerY/0.60 , "ufo");
	anim = ship.animations.add('spin');
	ship.animations.play('spin', 10, true);
	for (var i = 0; i < 3; i++)
 {
		 var livez = lives.create(game.world.width - 200 + (50 * i), 60, 'ufo');
		 livez.anchor.setTo(0.5, 0.5);
		 livez.angle = 90;
		 livez.alpha = 0.4;
 }
 music = game.add.audio('fly1');
 music.play();
}
else {
	ship = game.add.sprite(game.world.centerX, game.world.centerY/0.60 , "turleship");
}

		 ship.anchor.setTo(0.5,0.5);
     ship.scale.setTo(2,2);
		 this.physics.enable(ship, Phaser.Physics.ARCADE);
		 ship.enableBody = true;
		 ship.body.collideWorldBounds = true;
		 ship.body.rotation = false;
		 ship.body.setSize(20,20,5,5);

		 exploding_ship = game.add.sprite(ship.x,ship.y, 'explosionShip');
		 exploding_ship.visible = false;
		 exploding_ship.animations.add('explode');
		 exploding_ship.anchor.setTo(0.5,0.5);
		 exploding_ship.scale.setTo(2,2);

		 //  Creates 30 bullets, using the 'bullet' graphic
/*weapon = game.add.weapon(30, 'bullet');

//  The bullet will be automatically killed when it leaves the world bounds
weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

//  The speed at which the bullet is fired
weapon.bulletSpeed = 600;

//  Speed-up the rate of fire, allowing them to shoot 1 bullet every 60ms
weapon.fireRate = 50;
weapon.bulletAngleOffset = -90;

    weapon.trackSprite(ship, 0, 0, true);
*/

enemies = game.add.group();
enemies.enableBody = true;
enemies.physicsBodyType = Phaser.Physics.ARCADE;

for (var i = 0; i < 8; i++) {
	for(var j = 0; j < 6; j++) {
e = enemies.create(100 * i + 100, 75 * j + 50, 'enemy');
//game.physics.arcade.enable(ping);
e.enableBody = true;
e.physicsBodyType = Phaser.Physics.ARCADE;
//e.body.bounce.set(1);
e.anchor.setTo(0.5,0.5);
e.name = 'enemy';
e.body.immovable = true;
e.animations.add('kaboom');
}
}
//e.scale.setTo(0.75,0.75);
var tween = game.add.tween(enemies);
tween.to({ x: 300 }, time_traveled, Phaser.Easing.Linear.None, true, 0, 1000, true);
//tween.onLoop.add(this.moveDown, this);
   tween.onRepeat.add(this.moveDown, this);

	 explosions = game.add.group();
	 explosions.createMultiple(30, 'explosion');
	 explosions.forEach(this.setupInvaders, this);

	 asteroidgroup = game.add.physicsGroup();
	 asteroidgroup.enableBody = true;
	 asteroidgroup.physicsBodyType = Phaser.Physics.ARCADE;

		  cursor = game.input.keyboard.createCursorKeys();
		  shootButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
			var style = { font: "24px Audiowide", fill: "#ff0044", align: "center" };
			score_text = game.add.text(game.world.centerX / 10, game.world.centerY / 10, "score:" + score, style);

			sound_text = game.add.text(game.world.centerX / 0.54, game.world.centerY / 4, "sound: " + flag_text, style );
			sound_text.anchor.setTo(0.5,0.5);
			sound_text.scale.set(0.75,0.75);
			sound_text.inputEnabled = true;
			sound_text.events.onInputDown.add(this.soundz, this);

			game.time.events.loop(Phaser.Timer.SECOND * 2, this.launchAsteroid, this);
   },

		update : function() {
  game.physics.arcade.collide(bullets, enemies, this.hitz, null, this);
	game.physics.arcade.overlap(enemyBullets, ship, this.enemybulletHitz, null, this);
	game.physics.arcade.overlap(asteroidgroup, ship, this.asteroidHitz, null, this);
	game.physics.arcade.collide(bullets,asteroidgroup, this.bulletHitzAsteroid, null, this);
	game.physics.arcade.collide(enemyBullets,asteroidgroup, this.enemybulletHitzAsteroid, null, this);
	game.physics.arcade.collide(asteroidgroup,asteroidgroup, this.asteroidCollide, null, this);

			ship.body.velocity.x = 0;
			ship.rotation = 0;
			if (cursor.left.isDown) {
				ship.body.velocity.x = -250;
				ship.rotation = -0.2;
			} else if (cursor.right.isDown) {
				ship.body.velocity.x = 250;
				ship.rotation = 0.2;
			}
/*
			//bullet.x = ship.x;
			if (shootButton.isDown){
				bullet.body.velocity.y = -150;
			}
			if (bullet.y > game.world.centerY/0.6){
				bullet.x = bullet.x;
			}
*/

			if (shootButton.isDown){
				this.fireBullet();
			}

			if (game.time.now > firingTimer)
		{
				this.enemyFires();
		}

		},

		 fireBullet: function() {

    if (game.time.now > bulletTime)
    {
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            bullet.reset(ship.x, ship.y);
            bullet.body.velocity.y = -300;
            bulletTime = game.time.now + 150;
        }
    }


},

//  Called if the bullet goes out of the screen
 resetBullet: function (bullet) {

    bullet.kill();

},
hitz: function(bullet, enemy) {
  //ball.body.bounce.set(1);
  bullet.kill();
	enemy.kill();
	//  And create an explosion :)
var explosion = explosions.getFirstExists(false);
explosion.scale.setTo(0.50
);
explosion.reset(enemy.body.x, enemy.body.y);
explosion.animations.play('kaboom', 30 , false, true);

  score++;
	score_text.text = "score: " + score;
  //score_counter.text = score;
	if (score === 48){
	var winning_text = game.add.text(game.world.centerX, game.world.centerY/2, "you Beat the Alein invasion!\nClick to replay.", style)
	winning_text.anchor.setTo(0.5,0.5);
	var button = game.add.button(game.world.centerX, game.world.centerY , 'replay', this.restartz, this, 2, 1, 0);
	button.anchor.setTo(0.5,0.5);
	button.scale.setTo(0.25,0.25);
}
  console.log(score);
},

bulletHitzAsteroid : function(bullet,asteroid){
	bullet.kill();
	console.log('bullet kill');
},

moveDown : function() {
	enemies.y += 20;
	//time_traveled += 1000;
	//console.log(time_traveled);
},
setupInvaders : function(invader) {
		invader.anchor.x = 0.5;
    invader.anchor.y = 0.5;
    invader.animations.add('kaboom');

},

enemyFires : function(){

    //  Grab the first bullet we can from the pool
    enemyBullet = enemyBullets.getFirstExists(false);
		enemyBullet.rotation = 1.5;
    livingEnemies.length = 0;

    enemies.forEachAlive(function(enemy){

        // put every living enemy in an array
        livingEnemies.push(enemy);
    });


    if (enemyBullet && livingEnemies.length > 0)
    {

        var random = game.rnd.integerInRange(0,livingEnemies.length-1);

        // randomly select one of them
        var shooter = livingEnemies[random];
        // And fire the bullet from this enemy
        enemyBullet.reset(shooter.body.x, shooter.body.y);

        game.physics.arcade.moveToObject(enemyBullet,ship,120);
        firingTimer = game.time.now + 2000;
    }

},

enemybulletHitz: function(ship,enemyBullet) {
	enemyBullet.kill();

	live = lives.getFirstAlive();

	//var explosionz = explosions.getFirstExists(false);


	exploding_ship.visible = true;
	exploding_ship.reset(ship.x, ship.y);
	exploding_ship.play('explode', 30, false, true);
	//exploding_ship.visible = false;


	if (live)
	{
			live.kill();
	}

	//  And create an explosion :)
	/*var explosion = explosions.getFirstExists(false);
	explosion.reset(player.body.x, player.body.y);
	explosion.play('kaboom', 30, false, true);
*/
	// When the player dies
	if (lives.countLiving() < 1)
	{
			ship.kill();
			enemyBullets.callAll('kill');

			//stateText.text=" GAME OVER \n Click to restart";
			//stateText.visible = true;

			//the "click to restart" handler
			//game.input.onTap.addOnce(this.restartz,this);

			var losing_text = game.add.text(game.world.centerX, game.world.centerY/2, "You die in the Alein invasion!\n Click to retart.", style)
			losing_text.anchor.setTo(0.5,0.5);
			var button = game.add.button(game.world.centerX, game.world.centerY , 'replay', this.restartz, this, 2, 1, 0);
			button.anchor.setTo(0.5,0.5);
			button.scale.setTo(0.25,0.25);


}
		//game.state.restart();
},

enemybulletHitzAsteroid : function(enemyBullet, asteroid) {
	enemyBullet.kill();
},

launchAsteroid : function() {
	asteroid = asteroidgroup.create(game.world.randomX, 15, 'asteroid');
	asteroid.physicsBodyType = Phaser.Physics.ARCADE;
	asteroid.enableBody = true;
	asteroid.anchor.setTo(0.5,0.5);
	asteroid.body.setSize(50,50,5,5);
	//game.physics.arcade.enable(asteroid);
	asteroid.body.velocity.y = 200;
	asteroid.checkWorldBounds = true;
	asteroid.events.onOutOfBounds.add(this.asteroidKill, this);
},

asteroidHitz : function(ship,asteroid){
	asteroid.kill();
	//ship.kill();
	live = lives.getFirstAlive();

	//var explosionz = explosions.getFirstExists(false);


	exploding_ship.visible = true;
	exploding_ship.reset(ship.x, ship.y);
	exploding_ship.play('explode', 30, false, true);
	//exploding_ship.visible = false;


	if (live)
	{
			live.kill();
	}

	//  And create an explosion :)
	/*var explosion = explosions.getFirstExists(false);
	explosion.reset(player.body.x, player.body.y);
	explosion.play('kaboom', 30, false, true);
*/
	// When the player dies
	if (lives.countLiving() < 1)
	{
			ship.kill();
			enemyBullets.callAll('kill');

			//stateText.text=" GAME OVER \n Click to restart";
			//stateText.visible = true;

			//the "click to restart" handler
			//game.input.onTap.addOnce(this.restartz,this);

			var losing_text = game.add.text(game.world.centerX, game.world.centerY/2, "You got died by an asteroid!\n Click to retart.", style)
			losing_text.anchor.setTo(0.5,0.5);
			var button = game.add.button(game.world.centerX, game.world.centerY , 'replay', this.restartz, this, 2, 1, 0);
			button.anchor.setTo(0.5,0.5);
			button.scale.setTo(0.25,0.25);


}
},

asteroidKill : function(asteroid){
asteroid.destroy();
console.log('killed');
},

asteroidCollide : function(asteroid,asteroid){
	asteroid.body.bounce.y = 0.5;
},

restartz : function(){
	//game.state.restart();
	music.stop();
	game.state.start('Menu');

},

soundz : function() {
	if (flag === true){
		flag_text = 'true';
		sound_text.text = "sound: " + flag_text;
		music.resume();
	}else if  (flag === false){
		flag_text = 'false';
		sound_text.text = "sound: " + flag_text;
		music.pause();
	}
	flag = !flag;
},

		render : function() {
		//	game.debug.body(ship);
/*
if (asteroid){
			game.debug.body(asteroid);
		}
*/
		}
}
