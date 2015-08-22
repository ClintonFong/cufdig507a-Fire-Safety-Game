
var mapHeight   = window.innerHeight; // - 50;
var mapWidth    = window.innerWidth;

var game = new Phaser.Game( mapWidth, mapHeight, Phaser.AUTO, 'cntGame' );

game.state.add( "Boot",         boot );
game.state.add( "Preloader",    preloader );
game.state.add( "TheGame",      theGame );
game.state.add( "GameOver",     gameOver );

game.state.start("Boot");
//game.state.start("TheGame");
//game.state.start("GameOver");