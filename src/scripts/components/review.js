class Review extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <article class="review">
        <h2>Review</h2>
        <div class="boxReview">
          <form class="formReview glass">
            <div class="input">
              <label>Nama</label>
              <input
                type="text"
                name="name"
              />
            </div>
            <div class="input">
              <label>Review</label>
              <input
                type="textarea"
                name="review"
              />
            </div>
            <button class="saveBtn">Send</button>
          </form>
        </div>
      </article>
    `;
  }
}

customElements.define('review-component', Review);
