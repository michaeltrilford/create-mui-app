import { getPartMap as a } from "../../mui-utils/part-map/index.js";
class e extends HTMLElement {
  static get observedAttributes() {
    return ["space", "alignY", "alignX"];
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.space = "var(--space-500)", this.alignY = "flex-start", this.alignX = "flex-start", this.styles = /*css*/
    `
      :host {
        display: block;
      }
      slot {
        display: flex;
        gap: var(--space);
        align-items: var(--alignY);
        justify-content: var(--alignX);
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
          --alignY: ${this.getAttribute("alignY") || this.alignY};
          --alignX: ${this.getAttribute("alignX") || this.alignX};
        ">
      </slot>
    `;
  }
  attributeChangedCallback(t, s) {
    if (!this.shadowRoot) return;
    const i = this.shadowRoot.querySelector("slot");
    i && (t === "space" && i.style.setProperty("--space", s || this.space), t === "alignY" && i.style.setProperty("--alignY", s || this.alignY), t === "alignX" && i.style.setProperty("--alignX", s || this.alignX));
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
customElements.define("mui-h-stack", e);
