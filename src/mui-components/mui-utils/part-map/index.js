const t = {
  text: [
    "color",
    "font-family",
    "font-size",
    "font-weight",
    "letter-spacing",
    "line-height",
    "text-transform",
    "text-decoration",
    "text-align"
  ],
  spacing: ["padding", "margin", "gap", "width", "height", "box-sizing"],
  layout: [
    "display",
    "flex",
    "flex-direction",
    "flex-wrap",
    "justify-content",
    "align-items",
    "align-content",
    "align-self",
    "grid-template-columns",
    "grid-template-rows",
    "grid-column",
    "grid-row",
    "place-items",
    "place-content",
    "vertical-align"
  ],
  visual: [
    "background",
    "border",
    "border-radius",
    "box-shadow",
    "opacity",
    "transition",
    "outline",
    "color"
  ]
}, a = Object.values(t).flat();
function n(...e) {
  return e.map((i) => t[i] || []).flat().join(" ");
}
export {
  t as PartTypes,
  a as Parts,
  n as getPartMap
};
