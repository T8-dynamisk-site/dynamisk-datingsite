const popularGrid = document.getElementById("popularGrid");

fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((data) => {
    showUsers(data.users.slice(0, 8));
  });

function showUsers(userArray) {
  popularGrid.innerHTML = "";

  userArray.forEach((user) => {
    popularGrid.innerHTML += `
      <a href="profil.html?id=${user.id}" class="user-card">
        <img src="${user.image}" alt="${user.firstName} ${user.lastName}" class="user-card-image">

        <div class="user-card-info">
          <div class="user-card-top">
            <h3>${user.firstName} ${user.lastName}</h3>
            <span>${user.age}</span>
          </div>

         <p class="user-info-row">
  <img src="img/gender.svg" alt="køn" class="icon">
  <span>${user.gender === "female" ? "Kvinde" : "Mand"}</span>
</p>

          <p class="user-info-row">
            <img src="img/location.svg" alt="by" class="icon">
            <span>${user.address.city}</span>
          </p>
        </div>
      </a>
    `;
  });
}
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});
