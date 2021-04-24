var TILE_HEIGHT = 128;
var TILE_WIDTH = 256;
var isos = Crafty.diamondIso.init(TILE_WIDTH,TILE_HEIGHT,20,20);
var current_level = 0;
var MAX_STAIRS = 1;

var levels_size = [5,9,13,17,27,39]; // to move to constants later
var basic_tile_1 = 'object, 2D, DOM, Color, basic_tile_1';
var basic_tile_2 = 'object, 2D, DOM, Color, basic_tile_2';
var tile_leave1 = 'object, 2D, DOM, Color, tile_leaves_1';
var tile_leave2 = 'object, 2D, DOM, Color, tile_leaves_2';
var tile_cracked = 'object, 2D, DOM, Color, tile_cracked_1';
var stairs = 'object, 2D, DOM, Color, stairs';
var stairs_up = 'object, 2D, DOM, Color, stairs_up';
var pillar1 = 'object, 2D, DOM, Color, pillar1';

//Keep 10+ index values for solid objects
var tileMap = {
		1 : basic_tile_1,
		2 : basic_tile_2,
		3 : tile_leave1,
		4 : tile_leave2,
		5 : tile_cracked,
		8 : stairs,
		9 : stairs_up,
		11 : pillar1
}