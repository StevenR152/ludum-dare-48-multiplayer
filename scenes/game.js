Crafty.defineScene("Game", function() {
	var musicIcon = Crafty.e("MusicIcon")
		.attr({x: GAME_MUSIC_BUTTON_XPOS, y: GAME_MUSIC_BUTTON_YPOS, w: GAME_MUSIC_BUTTON_WIDTH, h: GAME_MUSIC_BUTTON_HEIGHT})
		.fixedPosition(GAME_MUSIC_BUTTON_XPOS, GAME_MUSIC_BUTTON_YPOS)
		.initClick(GAME_MUSIC_BUTTON_XPOS, GAME_MUSIC_BUTTON_YPOS, GAME_MUSIC_BUTTON_WIDTH, GAME_MUSIC_BUTTON_HEIGHT)


	// var player = Crafty.e('Player');
	// makeCameraTrackEntity(player, 75);
	// Crafty.viewport.scale(0.4);

	map = Crafty.e("LevelGenerator").generate_levels();
	levelLoader = Crafty.e("LoadLevel");
	levelLoader.loadLevel(current_level, map, true);
	totalSeconds = 0;
	timer = Crafty.e("HudCounter");

	Crafty.e("Background").place(-6000,-6000,12000,12000)

	Crafty.bind('GoDownAFloor', function(e) {
		if (current_level < levels_size.length) {
			current_level += 1;
			levelLoader.loadLevel(current_level, map, true);
			Crafty.trigger("DownFloorMessage");
		}
	});

	Crafty.bind('FoundSarcophagus', function(e) {
		// this is where we put the game end check and any message toast trigger
		Crafty.scene('End');
	});

// TODO if you uncomment this, you'll need to pass the previous level number into the load_level function, and check if we're going up or down levels
// once you determine that you can switch if we look for the up-stairs or down-stairs
	Crafty.bind('GoUpAFloor', function(e) {
		if (current_level > 0) {
			current_level -= 1;
			levelLoader.loadLevel(current_level, map, false);
		}
	});

	//current level label
	Crafty.e("Level")
		.attr({x: GAME_SCREEN_WIDTH * 2.8, y: GAME_SCREEN_HEIGHT * 0.15, w: 400, h: 100})
		.fixedPosition(GAME_SCREEN_WIDTH * 2.8, GAME_SCREEN_HEIGHT * 0.15)
		.text("Level: " + (current_level + 1) + " of " + map.length)


});
