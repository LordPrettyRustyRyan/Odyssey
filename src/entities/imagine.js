import k from "../kaplayCtx";

export function makeImagine(pos) {
  const imagine = k.add([
    k.sprite("imagine", { anim: "run" }),
    k.scale(4),
    k.area(),
    k.anchor("center"),
    k.pos(pos),
    k.body({ jumpForce: 1700 }),
    {
      ringCollectUI: null,
      setControls() {
        k.onButtonPress("jump", () => {
          if (this.isGrounded()) {
            this.play("jump"); // this for playing animation
            this.jump();
            k.play("jump", { volume: 0.5 }); // this for playing sound
          }
        });
      },
      setEvents() {
        this.onGround(() => {
          this.play("run"); // also animation
        });
      },
    },
  ]);

  imagine.ringCollectUI = imagine.add([
    k.text("", { font: "mania", size: 24 }),
    k.color(255, 255, 0),
    k.anchor("center"),
    k.pos(30, -10),
  ]);

  return imagine;
}
