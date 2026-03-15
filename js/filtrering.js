const profilGrid = document.getElementById("profilGrid");
const filtrerKnap = document.getElementById("filtrerKnap");

fetch("https://dummyjson.com/users?limit=0")
  .then(res => res.json())
  .then(data => {
    const allebrugere = data.users;

    udfyldDropdown("filter-hårfarve", allebrugere.map(b => b.hair.color));
    udfyldDropdown("filter-øjenfarve", allebrugere.map(b => b.eyeColor));
    udfyldDropdown("filter-køn", allebrugere.map(b => b.gender));
    udfyldDropdown("filter-lokalitet", allebrugere.map(b => b.address.city));
    udfyldDropdown("filter-alder", allebrugere.map(b => b.age));
    udfyldDropdown("filter-højde", allebrugere.map(b => Math.round(b.height)));
    udfyldDropdown("filter-vægt", allebrugere.map(b => Math.round(b.weight)));
    udfyldDropdown("filter-blodtype", allebrugere.map(b => b.bloodGroup));

    visProfilkort(allebrugere.slice(0, 16));

    filtrerKnap.addEventListener("click", () => {
        const hårfarve = document.getElementById("filter-hårfarve").value;
        const øjenfarve = document.getElementById("filter-øjenfarve").value;
        const køn = document.getElementById("filter-køn").value;
        const lokalitet = document.getElementById("filter-lokalitet").value;
        const alder = document.getElementById("filter-alder").value;
        const højde = document.getElementById("filter-højde").value;
        const vægt = document.getElementById("filter-vægt").value;
        const blodtype = document.getElementById("filter-blodtype").value;
  
        const filtreret = allebrugere.filter(b => {
          return (
            (!hårfarve || b.hair.color === hårfarve) &&
            (!øjenfarve || b.eyeColor === øjenfarve) &&
            (!køn || b.gender === køn) &&
            (!lokalitet || b.address.city === lokalitet) &&
            (!alder || b.age === Number(alder)) &&
            (!højde || Math.round(b.height) === Number(højde)) &&
            (!vægt || Math.round(b.weight) === Number(vægt)) &&
            (!blodtype || b.bloodGroup === blodtype)
          );
        });
  
        visProfilkort(filtreret.slice(0, 16));
      });
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

function udfyldDropdown(id, værdier) {
    const select = document.getElementById(id);
    const unikke = [...new Set(værdier)].sort();
  
    unikke.forEach(værdi => {
      const option = document.createElement("option");
      option.value = værdi;
      option.textContent = værdi;
      select.appendChild(option);
    });
  }