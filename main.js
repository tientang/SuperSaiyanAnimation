var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./dbz.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');
	
	
	var goku = new Goku(gameEngine);
	gameEngine.init(ctx);
	gameEngine.addEntity(goku);
	gameEngine.start();
});
