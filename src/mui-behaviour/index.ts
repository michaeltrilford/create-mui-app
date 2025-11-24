export function initDrawer(shadowRoot: Document | ShadowRoot | HTMLElement) {
  // Wait for mui-drawer to be defined
  customElements.whenDefined("mui-drawer").then(() => {
    // Open drawer buttons
    shadowRoot.querySelectorAll("mui-button[data-drawer]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-drawer");
        const drawer = shadowRoot.querySelector(`mui-drawer[data-drawer="${target}"]`);
        if (drawer) drawer.setAttribute("open", "");
      });
    });

    // Close buttons inside each drawer
    shadowRoot.querySelectorAll("mui-drawer[data-drawer]").forEach((drawer) => {
      drawer.querySelectorAll("mui-button[data-close]").forEach((btn) => {
        btn.addEventListener("click", () => drawer.removeAttribute("open"));
      });
    });

    // Toggle drawer buttons
    shadowRoot.querySelectorAll("mui-button[data-drawer-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-drawer-toggle");
        const drawer = shadowRoot.querySelector(`mui-drawer[data-drawer-toggle="${target}"]`);
        if (!drawer) return;

        if (drawer.hasAttribute("open")) {
          drawer.removeAttribute("open");
        } else {
          drawer.setAttribute("open", "");
        }
      });
    });
  });
}

export function initDialog(shadowRoot: Document | ShadowRoot | HTMLElement) {
  // Wait for mui-dialog to be defined
  customElements.whenDefined("mui-dialog").then(() => {
    // Open dialog buttons
    shadowRoot.querySelectorAll("mui-button[data-dialog]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-dialog");
        const dialog = shadowRoot.querySelector(`mui-dialog[data-dialog="${target}"]`);
        if (dialog) dialog.setAttribute("open", "");
      });
    });

    // Close buttons inside each dialog
    shadowRoot.querySelectorAll("mui-dialog[data-dialog]").forEach((dialog) => {
      dialog.querySelectorAll("mui-button[data-close]").forEach((btn) => {
        btn.addEventListener("click", () => dialog.removeAttribute("open"));
      });
    });
  });
}
