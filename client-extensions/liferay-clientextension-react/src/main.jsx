import { render, unmountComponentAtNode } from "react-dom";

class WebComponent extends HTMLElement {
  connectedCallback() {
    render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      this
    );
  }

  disconnectedCallback() {
    unmountComponentAtNode(this);
  }
}

const ELEMENT_NAME = "liferay-clientextension-react";

if (customElements.get(ELEMENT_NAME)) {
  console.log(
    `Skipping registration for <${ELEMENT_NAME}> (already registered)`
  );
} else {
  customElements.define(ELEMENT_NAME, WebComponent);
}
