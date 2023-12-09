/* W05: Programming Tasks */

/* Declare and initialize global variables */
const recipesElement = document.querySelector("#recipes");
let recipeList = [];

/* async displayRecipes Function */
const displayRecipes = (recipes) => {
    recipes.forEach(recipe => {
        //Create an HTML <article> element (createElement).
        const createElement = document.createElement("article");

        //Create an HTML <h3> element and add the recipe's recipeName property to this new element.
        const h3Element = document.createElement("h3");
        h3Element.textContent = `${recipe.name}`; //Use of temple literals

        //Create an HTML <img> element and add the recipe's imageUrl property to the src attribute and the recipe's name property to the alt attribute.
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", recipe.imageURL);
        imgElement.setAttribute("alt", `${recipe.name} image`); //Use of temple literals

        //Create a Link to the Full Recipe
        const a = document.createElement("a");
        a.setAttribute("href", recipe.originalURL);
        a.textContent = `Click to View the Full Recipe!`;

        //Append the <h3> element and the <img> and the <a> element to the <article> element as children. (appendChild)
        createElement.appendChild(h3Element);
        createElement.appendChild(imgElement);
        createElement.appendChild(a);

        //Append the <article> element to the global recipesElement variable
        recipesElement.appendChild(createElement);
    });
};


/* async getRecicpes Function using fetch()*/
//Create another function expression called getRecipes. Make it an async anonymous, arrow function
const getRecipes = async () =>{
    //In the function, declare a const variable named response that awaits the built-in fetch method calling the recipe data, absolute URL.
    const response = await fetch("https://raw.githubusercontent.com/kodecocodes/recipes/master/Recipes.json");
    if (response.ok) {
        recipeList = await response.json();
        displayRecipes(recipeList);
    };
};


/* reset Function */
//Declare a function expression named reset that clears all of the <article> elements from the resumesElement.
const reset = () => {
    while (recipesElement.firstChild) {
        recipesElement.removeChild(recipesElement.firstChild);
    }
}

/* sortBy Function */
const sortBy = (recipes) => {

    reset();

    //Define a variable named filter that obtains the value of the HTML element with the ID of sortBy (The pull-down menu).
    const filter = document.querySelector('#sortBy').value;

    // Use a switch statement that uses the filter value as the selector responding to four cases
    switch (filter) {
        case 'roast':
            // Filter for recipes where the location contains "Roast" as a string
            displayRecipes(recipes.filter(recipe => recipe.name.includes('Roast')));
            break;
        case 'curry':
            // Filter for recipes where the location contains "Curried" as a string
            displayRecipes(recipes.filter(recipe => recipe.name.includes('Curried')));
            break;
        case 'oatmeal':
            // Filter for recipes where the location contains "Oatmeal" as a string
            displayRecipes(recipes.filter(recipe => recipe.name.includes('Oatmeal')));
            break;
        case 'all':
            // No filter. Just use recipes as the argument
            displayRecipes(recipes);
            break;
        //default:
          //  console.log('Invalid filter option');
    }
};


//eventlister

getRecipes();
document.querySelector('#sortBy').addEventListener('change', () => sortBy(recipeList));
