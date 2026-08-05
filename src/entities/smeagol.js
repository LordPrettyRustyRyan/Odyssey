import k from "../kaplayCtx";

export function makeSmeagol(pos) {
  return k.add([
    k.sprite("smeagol", { anim: "run" }),
    k.area({ shape: new k.Rect(k.vec2(-5, 0), 30, 30) }),
    k.scale(4),
    k.anchor("center"),
    k.pos(pos),
    k.offscreen(),
    "enemy",
  ]);
}
