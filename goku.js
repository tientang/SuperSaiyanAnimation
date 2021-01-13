class Goku {
    constructor(game) {
        Object.assign(this, {game});

        this.spritesheet = ASSET_MANAGER.getAsset("./dbz.png");

        this.animations = [];
        
        this.animations.push(new Animator(this.spritesheet, 40, 90, 28, 47, 11, 0.1, 7, false, true));
    };

    update() {

    };

    draw(ctx) {
        this.animations.drawFrame(this.game.clockTick, ctx, 25, 25, 10);
    };
}
