// // common function for spinners or loader

// const toggleLoader = (isloading) => {

//   const loader = document.getElementById("loader");
//   if (isloading) {
//     loader.classList.remove("d-none");
//   } else {
//     loader.classList.add("d-none");
//   }
// };

// // data limite and process searech with common function

// const processSearch = (dataLimite) => {

//   // start loade
//   toggleLoader(true);

//   const searchField = document.getElementById("search-field");
//   const searchFieldValue = searchField.value;
//   loadPhones(searchFieldValue, dataLimite);
// };

const dreamGirl = [
  {
    sokina: {
      name: "bbu",
      height: "5.4",
      family: [{ father: "rock", mother: "shila", sister: "chinki" }],
      age: undefined,
      contactInfo: [
        {
          facebook: {
            link: "https://www.facebook.com/",
            followers: "12545",
            status: "single",
            friendsList: [{ name: "rofik" }, undefined],
          },
        },
        { instagram: "https://www.instagram.com/" },
      ],
    },
  },
];

console.log(dreamGirl[0].sokina.contactInfo[1].instagram);
