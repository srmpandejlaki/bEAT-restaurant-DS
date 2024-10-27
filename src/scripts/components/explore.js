class Explore extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <section class="explore">
          <h2>~ Explore Restaurant ~</h2>
          <div class="list-resto"></div>
        </section>
        `;
  }
}

customElements.define("explore-component", Explore);
