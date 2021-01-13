class Goku {
    constructor(game) {
        Object.assign(this, {game});

        this.spritesheet = ASSET_MANAGER.getAsset("./dbz.png");

        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations() {


        this.animations[0] = new Animator(this.spritesheet, 40, 90, 28, 46, 11, 0.1, 7, false, true);
        //this.animations[1] = new Animator(this.spritesheet, 40, 90, 28, 46, 11, 0.1, 7, false, true);
    };

    update() {

    };

    draw(ctx) {
        this.animations.drawFrame(this.game.clockTick, ctx, 300, 150, 1);
    };
}