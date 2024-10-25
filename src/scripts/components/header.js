class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <nav>
        <div class="brand">
          <h1>b<span>EAT</span></h1>
          <img src="./images/grizzly.png" alt="gambar karakter Grizzly" />
        </div>
        <div class="nav-menu" id="nav-menu">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="#" class="linkk link-aktif">Home</a>
            </li>
            <li class="nav-item">
              <a href="#" class="linkk">Favorite</a>
            </li>
            <li class="nav-item">
              <a href="https://github.com/srmpandejlaki" class="linkk">About Us</a>
            </li>
          </ul>
        </div>
        <!-- toggle button -->
        <div class="nav-burger" id="nav-burger">
          <i class="ri-menu-fill"></i>
        </div>
      </nav>
    `;
  }
}

customElements.define("header-component", Header);
