class Goku {
    constructor(game) {
        Object.assign(this, {game});

        this.spritesheet = ASSET_MANAGER.getAsset("./dbz.png");

        this.animations = [];
        
                                                          // x, y, width, height, frameCount, frameDuration, spacing, reverse, loop
        this.animations.push(new Animator(this.spritesheet, 57, 422, 48.875, 75, 5, 0.0865, 3.5, false, true));
    };

    update() {

    };

    draw(ctx) {
        this.animations[0].drawFrame(this.game.clockTick, ctx, 325, 175, 6);
    };
}
