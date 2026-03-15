const profilGrid = document.getElementById("profilGrid");

fetch("https://dummyjson.com/users?limit=16")
  .then(res => res.json())
  .then(data => {
    visProfilkort(data.users);
  });

function visProfilkort(brugere) {
  profilGrid.innerHTML = "";

  brugere.forEach(bruger => {
    const kort = document.createElement("article");
    kort.classList.add("profil-kort");

    kort.innerHTML = `
      <img src="${bruger.image}" alt="${bruger.firstName}" class="profil-billede">
      <div class="profil-info">
        <p class="profil-navn">${bruger.firstName} ${bruger.lastName} <span class="profil-alder">${bruger.age}</span></p>
        <p>⚧ ${bruger.gender.charAt(0).toUpperCase() + bruger.gender.slice(1)}</p>
        <p>⌂ ${bruger.address.city}</p>
      </div>
    `;

    profilGrid.appendChild(kort);
  });
}