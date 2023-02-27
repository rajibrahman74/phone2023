// common function for spinners or loader

const toggleLoader = (isloading) => {

  const loader = document.getElementById("loader");
  if (isloading) {
    loader.classList.remove("d-none");
  } else {
    loader.classList.add("d-none");
  }
};



// data limite and process searech with common function

const processSearch = (dataLimite) => {

  // start loade
  toggleLoader(true);

  const searchField = document.getElementById("search-field");
  const searchFieldValue = searchField.value;
  loadPhones(searchFieldValue, dataLimite);
};