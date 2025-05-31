class h extends HTMLElement {
  constructor() {
    super(), this._checked = !1, this._checkbox = null, this.attachShadow({ mode: "open" }), this._checked = !1;
  }
  connectedCallback() {
    var t;
    this.render(), this._checkbox = this.shadowRoot.querySelector('input[type="checkbox"]'), this._checked = this.hasAttribute("checked"), this._checkbox && (this._checkbox.checked = this._checked), this._updateIcons(), this._updateDisabledState(), (t = this._checkbox) == null || t.addEventListener("change", () => {
      this._checkbox && (this.checked = this._checkbox.checked, this.dispatchEvent(
        new CustomEvent("change", {
          detail: { checked: this.checked },
          bubbles: !0,
          composed: !0
        })
      ));
    });
  }
  static get observedAttributes() {
    return ["label", "disabled", "checked"];
  }
  attributeChangedCallback(t, e, i) {
    if (t === "checked" && e !== i && (this._checked = i !== null, this._checkbox && (this._checkbox.checked = this._checked, this._updateIcons())), t === "disabled" && e !== i) {
      const s = i !== null;
      this._checkbox && (this._checkbox.disabled = s, this._checkbox.setAttribute("aria-disabled", s.toString())), this._updateDisabledState();
    }
  }
  get checked() {
    return this._checked;
  }
  set checked(t) {
    const e = !!t;
    this._checked !== e && (this._checked = e, e ? this.setAttribute("checked", "") : this.removeAttribute("checked"), this._checkbox && (this._checkbox.checked = this._checked, this._checkbox.setAttribute("aria-checked", this._checked.toString()), this._updateIcons()));
  }
  _updateDisabledState() {
    var e, i, s, c;
    this.hasAttribute("disabled") ? (this.shadowRoot.host.classList.add("disabled"), (e = this._checkbox) == null || e.setAttribute("aria-disabled", "true"), (i = this._checkbox) == null || i.setAttribute("tabindex", "-1")) : (this.shadowRoot.host.classList.remove("disabled"), (s = this._checkbox) == null || s.removeAttribute("aria-disabled"), (c = this._checkbox) == null || c.removeAttribute("tabindex"));
  }
  _updateIcons() {
    const t = this.shadowRoot.querySelector(
      'slot[name="on-icon"]'
    ), e = this.shadowRoot.querySelector(
      'slot[name="off-icon"]'
    );
    t && t.assignedElements().forEach((i) => {
      i.style.display = this._checked ? "inline" : "none";
    }), e && e.assignedElements().forEach((i) => {
      i.style.display = this._checked ? "none" : "inline";
    });
  }
  render() {
    const t = this.getAttribute("label");
    t || console.warn(
      "mui-switch Accessibility warning: Provide a 'label' to ensure the switch is described for assistive technologies."
    ), this.shadowRoot.innerHTML = /*html*/
    `
      <style>
        :host { display: inline-block; }

        .switch {
          position: relative;
          display: inline-block;
          width: var(--switch-width);
          height: var(--switch-height);
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .switch input:focus-visible + .track {
          outline: var(--outline-thick);
        }

        .track {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--switch-track-background);
          transition: background-color var(--speed-200);
          border-radius: var(--switch-height);
        }

        .thumb {
          position: absolute;
          top: var(--switch-offset);
          left: var(--switch-offset);
          width: var(--switch-thumb-size);
          height: var(--switch-thumb-size);
          background-color: var(--switch-thumb-bg);
          transition: transform var(--speed-200);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        input:checked + .track {
          background-color: var(--switch-track-background-checked);
        }

        input:checked + .track .thumb {
          transform: translateX(calc(var(--switch-width) - var(--switch-thumb-size) - (var(--switch-offset) * 2)));
        }

        ::slotted([slot="on-icon"]),
        ::slotted([slot="off-icon"]) {
          width: 16px;
          height: 16px;
          fill: var(--switch-icon);
        }

        :host(.disabled) {
          cursor: not-allowed;
        }

        :host(.disabled) .switch {
          opacity: 0.4;
          pointer-events: none;
        }

      </style>
      <label class="switch">
        <input 
          type="checkbox"
          role="switch"
          aria-checked="${this._checked}"
          ${t ? `aria-label="${t}"` : ""}
        >
        <span class="track">
          <span class="thumb">
            <slot name="on-icon"></slot>
            <slot name="off-icon"></slot>
          </span>
        </span>
      </label>
    `;
  }
}
customElements.define("mui-switch", h);
