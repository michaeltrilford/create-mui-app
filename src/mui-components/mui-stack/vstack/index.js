import { getPartMap as a } from "../../mui-utils/part-map/index.js";
class e extends HTMLElement {
  static get observedAttributes() {
    return ["space", "alignX", "alignY"];
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.space = "var(--space-500)", this.alignX = "normal", this.alignY = "normal", this.styles = /*css*/
    `
      :host {
        display: block;
      }
      slot {
        display: grid;
        gap: var(--space);
        justify-items: var(--alignX);
        align-items: var(--alignY);
      }
    `;
  }
  async connectedCallback() {
    if (!this.shadowRoot) return;
    await this.waitForPartMap();
    const t = a("spacing", "layout", "visual");
    this.shadowRoot.innerHTML = /*html*/
    `
      <style>${this.styles}</style>
      <slot 
        part="${t}" 
        style="
          --space: ${this.getAttribute("space") || this.space};
          --alignX: ${this.getAttribute("alignX") || this.alignX};
          --alignY: ${this.getAttribute("alignY") || this.alignY};
        ">
      </slot>
    `;
  }
  attributeChangedCallback(t, s) {
    if (!this.shadowRoot) return;
    const i = this.shadowRoot.querySelector("slot");
    i && (t === "space" && i.style.setProperty("--space", s || this.space), t === "alignX" && i.style.setProperty("--alignX", s || this.alignX), t === "alignY" && i.style.setProperty("--alignY", s || this.alignY));
  }
  waitForPartMap() {
    return new Promise((t) => {
      if (typeof a == "function") return t();
      const s = () => {
        typeof a == "function" ? t() : requestAnimationFrame(s);
      };
      s();
    });
  }
}
customElements.define("mui-v-stack", e);
