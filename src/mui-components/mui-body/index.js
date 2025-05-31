import { getPartMap as i } from "../mui-utils/part-map/index.js";
class r extends HTMLElement {
  static get observedAttributes() {
    return ["size", "weight", "variant"];
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" });
    const e = this.getAttribute("size") || "medium", t = this.getAttribute("weight") || "regular", o = this.getAttribute("variant") || "default";
    this.setAttribute("size", e), this.setAttribute("variant", o), this.setAttribute("weight", t);
  }
  async connectedCallback() {
    await this.waitForPartMap();
    let t = (
      /*html*/
      `
    <style>
      :host { display: block; }

      :host p {
        color: var(--text-color);
        margin: var(--space-000);
        display: block;
        width: 100%;
      }

      :host([size="x-small"]) p {
        font-size: var(--text-font-size-xs);
        line-height: var(--text-line-height-xs);
      }

      :host([size="small"]) p {
        font-size: var(--text-font-size-s); 
        line-height: var(--text-line-height-s);
      }

      :host([size="medium"]) p {
        font-size: var(--text-font-size-m);
        line-height: var(--text-line-height-m);
      }

      :host([size="large"]) p {
        font-size: var(--text-font-size-l); 
        line-height: var(--text-line-height-l);
      }

      :host([weight="regular"]) p { font-weight: var(--font-weight-regular); }
      :host([weight="medium"]) p { font-weight: var(--font-weight-medium); }
      :host([weight="bold"]) p { font-weight: var(--font-weight-bold); }

      /* Variant */
      :host([variant="default"]) p {
        color: var(--text-color);
      }
      :host([variant="success"]) p {
        color: var(--text-color-success);
      }
      :host([variant="warning"]) p {
        color: var(--text-color-warning);
      }
      :host([variant="error"]) p {
        color: var(--text-color-error);
      }

    </style>
    
    <p part="${i("spacing", "layout", "visual")}"><slot></slot></p>

    `
    );
    this.shadowRoot && (this.shadowRoot.innerHTML = t);
  }
  waitForPartMap() {
    return new Promise((e) => {
      if (typeof i == "function") return e();
      const t = () => {
        typeof i == "function" ? e() : requestAnimationFrame(t);
      };
      t();
    });
  }
}
customElements.define("mui-body", r);
