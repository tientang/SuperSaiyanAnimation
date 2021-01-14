class Goku {
    constructor(game) {
        Object.assign(this, {game});

        this.spritesheet = ASSET_MANAGER.getAsset("./dbz.png");

        this.animations = [];
        
                                                          // x, y, width, height, frameCount, frameDuration, spacing, reverse, loop
        //this.animations.push(new Animator(this.spritesheet, 60, 125, 45, 75, 6, 1, 3.25, false, true));
        this.animations.push(new Animator(this.spritesheet, 57, 422, 50, 60, 5, 1, 3.5, false, true));
    };

    update() {

    };

    draw(ctx) {
        this.animations[0].drawFrame(this.game.clockTick, ctx, 150, 150, 5);
    };
}
