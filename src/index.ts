// Mui CSS
import "./mui-styles/mui-tokens.css";
import "./mui-styles/mui-reset.css";
import "./mui-styles/mui-base.css";

// Mui Components (JS Package)
import "./mui-components/mui-icons/sun/index.js";
import "./mui-components/mui-icons/moon/index.js";
import "./mui-components/mui-switch/index.js";
import "./mui-components/mui-container/index.js";
import "./mui-components/mui-heading/index.js";
import "./mui-components/mui-body/index.js";
import "./mui-components/mui-link/index.js";
import "./mui-components/mui-stack/hstack/index.js";
import "./mui-components/mui-stack/vstack/index.js";

// Mui Utils (Required)
import "./mui-components/mui-utils/part-map/index.js";

// Author CSS
import "./author/index.css";

// Assets
import "./logo.js";

// Author Components
import "./author/dark-mode/index.js";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
  <mui-container small>
    <mui-v-stack space="var(--space-600)" alignX="center">
      <create-app-logo color="var(--logo-color)"></create-app-logo>
      <mui-body weight="medium" class="introduction">
        Create fast, accessible, and themeable components with MUI styling,
        without the need for React or other dependencies.
      </mui-body>
      <mui-h-stack space="var(--space-300)">
        <mui-link
          variant="primary"
          href="https://muibook.com"
          target="_blank"
        >
          Mui Docs
        </mui-link>
        <mui-link
          variant="secondary"
          href="https://github.com/michaeltrilford/create-mui-app"
          target="_blank"
        >
          Get Started
        </mui-link>
      </mui-h-stack>
      <mui-h-stack space="var(--space-300)" alignY="center">
        <mui-body weight="bold">Toggle Theme</mui-body>
        <dark-mode-toggle></dark-mode-toggle>
      </mui-h-stack>
    </mui-v-stack>
  </mui-container>
`;
