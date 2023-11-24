/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Loara Adyz A. Villa",
    photo: "images/mypicture.png",
    favoriteFoods: ["Polvoron","Adobo","Longganisa","Avocado","Dinengdeng"],
    hobbies: ["Watching Short Video","Dancing","Playing Word Games","Cooking","Read Scriptures"],
    placesLived: [
        {place: "Naguilian, La Union, PH", length: "24 years"},
        {place: "Tigbauan, Iloilo, PH", length: "4 months"},
        {place: "Province of Antique, PH", length: "1 Year"},
        {place: "Banga, Aklan, PH", length: "2 Months"}]
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
    place: "Negros Oriental, PH",
    length: "1 month"}
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("img").setAttribute('src', myProfile.photo);
document.querySelector("img").setAttribute('alt', myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    document.querySelector("#favorite-foods").appendChild(favoriteFood);    
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let myHobby = document.createElement("li");
    myHobby.textContent = hobby;
    document.querySelector("#hobbies").appendChild(myHobby);    
});


/* Places Lived DataList */
document.querySelector("#places-lived").innerHTML = myProfile.placesLived
    .map((place) => `<dt>${place.place}</dt><dd>${place.length}</dd>`)
    .join("");
