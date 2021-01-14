class Goku {
    constructor(game) {
        Object.assign(this, {game});

        this.spritesheet = ASSET_MANAGER.getAsset("./dbz.png");

        this.animations = [];
        
        this.animations.push(new Animator(this.spritesheet, 60, 130, 38, 60, 11, 15, 5, false, true));
    };

    update() {

    };

    draw(ctx) {
        this.animations[0].drawFrame(this.game.clockTick, ctx, 150, 150, 5);
    };
}
