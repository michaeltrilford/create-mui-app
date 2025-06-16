// Mui CSS (PACKAGE)
import "@muibook/components/css/mui-base.css";
import "@muibook/components/css/mui-reset.css";

// Author CSS (LOCAL)
import "./mui-styles/mui-tokens.css";
import "./author/index.css";

// Mui Components (PACKAGE)
import "@muibook/components/mui-container";
import "@muibook/components/mui-body";
import "@muibook/components/mui-link";
import "@muibook/components/mui-stack/hstack";
import "@muibook/components/mui-stack/vstack";

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
