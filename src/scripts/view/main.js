async function getData() {
  const dataJson = await fetch("/data/DATA.json");
  const data = await dataJson.json();

  return data.restaurants;
}

async function main() {
  // tampil data json
  const restoData = await getData();
  console.log(restoData);
  const restoItem = document.querySelector(".list-resto");

  function createResto({ pictureId, name, description, city, rating }) {
    return `
    <article tabindex="0" class="item-resto">
        <div class="img">
            <img src="${pictureId}" alt="gambar suasana resto" />
        </div>
        <div class="desc">
          <h3>${name}</h3>
          <p>
            ${description}
          </p>
          <h3>City: ${city}</h3>
          <h3>Rating: ${rating}</h3>
        </div>      
      </article>
      `;
  }
  const list = restoData.map((resto) => {
    return createResto(resto);
  });

  restoItem.innerHTML = list.join("");

  // tampil menu
  const hamburgerButtonElement = document.querySelector("#nav-burger");
  const drawerElement = document.querySelector("#nav-menu");

  hamburgerButtonElement.addEventListener("click", (event) => {
    drawerElement.classList.toggle("open");
    event.stopPropagation();
  });
}

export default main;
