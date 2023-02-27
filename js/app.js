// phone data load with function

const loadPhones = async (searchFieldValue) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchFieldValue}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data);
};




// display phones with function

const displayPhones = (phones) => {
  console.log(phones);
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.innerText = '';

  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");

    phoneDiv.innerHTML = `
    <div class="card p-2">
        <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
    `;
    phonesContainer.appendChild(phoneDiv);
  });
};



// search phone field with function

document.getElementById("search-btn").addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const searchFieldValue = searchField.value;
  loadPhones(searchFieldValue);
});




loadPhones();