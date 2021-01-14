class Goku {
    constructor(game) {
        Object.assign(this, {game});

        this.spritesheet = ASSET_MANAGER.getAsset("./dbz.png");

        this.animations = [];
        
        this.animations.push(new Animator(this.spritesheet, 40, 100, 28, 60, 11, 0.1, 7, false, true));
    };

    update() {

    };

    draw(ctx) {
        this.animations[0].drawFrame(this.game.clockTick, ctx, 50, 50, 10);
    };
}
