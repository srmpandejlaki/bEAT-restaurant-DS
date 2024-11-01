class Footer extends HTMLElement {
  emptyContent() {
    this.innerHTML = '';
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <footer>
    <div class="copyRight">
      <h3>Copyright © 2024 - bEAT</h3>
    </div>
  </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
