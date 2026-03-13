const profileContainer = document.querySelector(".profile-container");

// fetch("https://dummyjson.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("DATA", data);
//     data.users.forEach((user) => {
//       profileContainer.innerHTML += `  <div class="profil">
//         <img src="${user.image}" alt="profile-image" />
//         <div>
//           <h3>${user.firstName} ${user.lastName}</h3>
//           <h3>${user.age}</h3>
//         </div>
//       </div>
//       <ul class="profile-info">
//         <li class="gender">${user.gender}</li>
//         <li class="location">${user.adress}</li>
//         <li class="eye-color">${user.eyeColor}</li>
//         <li class="hair-color">${user.color}</li>
//         <li class="height">${user.height}<span> cm</span></li>
//         <li class="weight">${user.weight}<span>kg</span></li>
//       </ul>
//       <div class="bio">
//         <h2>Bio</h2>
//         <p>Hej mit navn er ${user.firstName} ${user.lastName}, og jeg er ${user.age} år gammel. Jeg bor i ${user.city} og arbejder som ${user.title} for ${user.name}, som ligger i ${user.city}.</p>
//         <a href="chat.html">Skriv en besked</a>
//       </div>`;
//     });
//   });
let fraUrlParameterIDn = 2;
fetch(`https://dummyjson.com/users/${fraUrlParameterIDn}`)
  .then((response) => response.json())
  .then((user) => {
    console.log("DATA", user);
    // data.users.forEach((user) => {
    profileContainer.innerHTML += `  <div class="profil">
        <img src="${user.image}" alt="profile-image" />
        <div>
          <h3>${user.firstName} ${user.lastName}</h3>
          <h3>${user.age}</h3>
        </div>
      </div>
      <ul class="profile-info">
        <li class="gender">${user.gender}</li>
        <li class="location">${user.address.city}</li>
        <li class="eye-color">${user.eyeColor}</li>
        <li class="hair-color">${user.hair.color}</li>
        <li class="height">${user.height}<span>cm</span></li>
        <li class="weight">${user.weight}<span>kg</span></li>
      </ul>
      <div class="bio">
        <h2>Bio</h2>
        <p>Hej mit navn er ${user.firstName} ${user.lastName}, og jeg er ${user.age} år gammel. Jeg bor i ${user.address.city} og arbejder som ${user.company.title} for ${user.company.name}, som ligger i ${user.company.address.city}.</p>
        <a href="chat.html">Skriv en besked</a>
      </div>`;
    // });
  });
