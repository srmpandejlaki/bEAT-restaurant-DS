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
        <!-- toggle button -->
        <button class="nav-burger" id="nav-burger">
          <i class="ri-menu-fill"></i>
        </button>
        <div class="nav-menu" id="nav-menu">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="#/home" class="linkk link-aktif">Home</a>
            </li>
            <li class="nav-item">
              <a href="#/favorite" class="linkk">Favorite</a>
            </li>
            <li class="nav-item">
              <a href="https://github.com/srmpandejlaki" class="linkk">About Us</a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define("header-component", Header);
