// phone data load with function

const loadPhones = async (searchFieldValue, dataLimite) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchFieldValue}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data, dataLimite);
};




// display phones with function

const displayPhones = (phones, dataLimite) => {

  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.innerText = "";

  // display only 15 phones

  const showAll = document.getElementById("show-all");
  if (dataLimite && phones.length > 15) {
    phones = phones.slice(0, 15);
    showAll.classList.remove("d-none");
  } else {
    showAll.classList.add("d-none");
  }

  // no-found message

  const noPhoneFound = document.getElementById("no-found-message");
  if (phones.length === 0) {
    noPhoneFound.classList.remove("d-none");
  } else {
    noPhoneFound.classList.add("d-none");
  }

  // display all phones in UI

  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");

    phoneDiv.innerHTML = `
    <div class="card p-2 rounded-3">
        <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary rounded-3" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
        </div>
    </div>
    `;
    phonesContainer.appendChild(phoneDiv);
  });

  // stop loader

  toggleLoader(false);
};




// search phone field with function

document.getElementById("search-btn").addEventListener("click", function () {

  processSearch(15);

});



// show all button with function

document.getElementById("show-all-btn").addEventListener("click", function () {

  processSearch();

});




// load phone details with function

const loadPhoneDetails = async (id) => {

  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhoneDetails(data.data);
}


// displayd phone details with function

const displayPhoneDetails = phone => {

  const phoneDetailsTitle = document.getElementById("phoneDetailModalLabel");
  phoneDetailsTitle.innerText = phone.name;

  const phoneDetails = document.getElementById("phoine-details");
  phoneDetails.style.margin = "0 auto";
  phoneDetails.innerHTML = `
  <img src="${phone.image}">
  <p class="mt-4">${phone.releaseDate ? phone.releaseDate: "No Release Date Found"}</p>
  <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : "No Storage fetures"}</p>
  <p>Others: Bluetooth: ${phone.others ? phone.others.Bluetooth : "No Bluetooth fetures"}</p>
  `;
};


// search field press enter key then show result

document.getElementById('search-field').addEventListener('keypress', function (event) {

  if (event.key === 'Enter') {
    processSearch(15);
  }

});


loadPhones("phone");
