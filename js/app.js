// phone data load with function

const loadPhones = async () => {
  const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data[0]);
};



// display phones with function

const displayPhones = (phones) => {
  console.log(phones);
  const phoneContainer = document.getElementById("phones-container");

  phones.forEach(phone => {

    
  });
};


loadPhones();