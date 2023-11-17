import './style.css'

const btnDog = document.querySelector('#btnDog');
const btnCat = document.querySelector('#btnCat');
const btnSurprise = document.querySelector('#btnSurprise');
const image = document.querySelector('#image');

const BASE_URL_DOG = 'https://dog.ceo/api/breeds/image/random';
const BASE_URL_CAT = 'https://api.thecatapi.com/v1/images/search';

btnDog.addEventListener('click', () => {
  fetch(BASE_URL_DOG)
    .then((response) => response.json())
    .then((data) => {
      image.src = data.message;
    })
});

btnCat.addEventListener('click', () => {
  fetch(BASE_URL_CAT)
    .then((response) => response.json())
    .then(([data]) => {
      image.src = data.url;
    })
});

btnSurprise.addEventListener('click', () => {
  Promise.any([
    fetch(BASE_URL_CAT),
    fetch(BASE_URL_DOG),
  ])
    .then((response) => response.json())
    .then((data) => {
      const petURL = data.message || data[0].url;

      image.src = petURL;
    });
    
});
