const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

//Sayfa Yüklendiğinde Menüleri Göster
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuButtons();
});



// Menüleri ekrana bas.
function displayMenuItems(menuItems) {
  let displayMenu = menuItems
    .map((item) => {
      return `
      <div class="menu-items col-lg-6 col-sm-12">
        <img src="${item.img}" alt="${item.title}" class="photo" />
        <div class="menu-info">
          <div class="menu-title">
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </div>
          <div class="menu-text">${item.desc}</div>
        </div>
      </div>`;
    })
    .join("");
  sectionCenter.innerHTML = displayMenu;
}


//Filtreme butonlarını oluştur.
function displayMenuButtons() {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) values.push(item.category);
      return values;
    },
    ["All"]
  );

  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id="${category}">${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = btnContainer.querySelectorAll(".btn-item");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory =
        category === "All"
          ? menu
          : menu.filter((item) => item.category === category);
      displayMenuItems(menuCategory);
    });
  });
}
