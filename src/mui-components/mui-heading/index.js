class t extends HTMLElement {
  static get observedAttributes() {
    return ["size", "level"];
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    if (!this.shadowRoot) return;
    const e = this.getAttribute("size") || "1", i = `h${this.getAttribute("level") || e}`;
    this.shadowRoot.innerHTML = /*html*/
    `
      <style>
        @import url("./css/mui-reset.css");
        :host { display: block; }

        h1, h2, h3, h4, h5, h6 {
          margin: var(--space-000);
          font-weight: var(--heading-font-weight);
          color: var(--heading-text-color);
        }

        .size-1 { font-size: var(--heading-font-size-100); line-height: var(--heading-line-height-100); }
        .size-2 { font-size: var(--heading-font-size-200); line-height: var(--heading-line-height-200); }
        .size-3 { font-size: var(--heading-font-size-300); line-height: var(--heading-line-height-300); }
        .size-4 { font-size: var(--heading-font-size-400); line-height: var(--heading-line-height-400); }
        .size-5 { font-size: var(--heading-font-size-500); line-height: var(--heading-line-height-500); }
        .size-6 { font-size: var(--heading-font-size-600); line-height: var(--heading-line-height-600); }
      </style>
      <${i} class="size-${e}">
        <slot></slot>
      </${i}>
    `;
  }
}
customElements.define("mui-heading", t);
