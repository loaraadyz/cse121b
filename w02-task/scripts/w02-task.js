/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = `Loara Adyz R. Acosta-Villa`;
const currentYear = new Date().getFullYear();
const profilePicture = "images/mypicture.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute ('alt',`Profile Image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = ["Polvoron","Adobo","Longganisa","Avocado","Dinengdeng"];
foodElement.innerHTML = favoriteFoods;

const newFavorite = "Mango Float";
favoriteFoods.push(newFavorite);
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;


