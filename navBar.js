const navbar = document.createElement('template');

navbar.innerHTML = `

`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {

    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(navbar.content);
  }
}

customElements.define('nav-bar', Header);