// burger menu
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

burgerBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("show");
});

// mest populære brugere
const popularGrid = document.getElementById("popularGrid");

async function loadPopularUsers() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    const users = data.users.slice(0, 8);

    popularGrid.innerHTML = users
      .map((user) => {
        return `
      <a href="profil.html?id=${user.id}" class="user-card">
        <img src="${user.image}" alt="${user.firstName} ${user.lastName}" class="user-card-image">

        <div class="user-card-info">
          <div class="user-card-top">
            <h3>${user.firstName} ${user.lastName}</h3>
            <span>${user.age}</span>
          </div>

          <p class="user-info-row">
            <img src="img/gender.svg" alt="køn" class="icon">
            ${user.gender === "female" ? "Kvinde" : "Mand"}
          </p>

          <p class="user-info-row">
            <img src="img/location.svg" alt="by" class="icon">
            ${user.address.city}
          </p>
        </div>
      </a>
    `;
      })
      .join("");
  } catch (error) {
    popularGrid.innerHTML = `<p>Kunne ikke hente brugere.</p>`;
    console.error("Fejl ved hentning af brugere:", error);
  }
}

loadPopularUsers();
