/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("div");
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        //Create an HTML <article> element (createElement).
        const createElement = document.createElement("article");

        //Create an HTML <h3> element and add the temple's templeName property to this new element.
        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;

        //Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's location property to the alt attribute.
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", temple.imageUrl);
        imgElement.setAttribute("alt", temple.location);

        //Append the <h3> element and the <img> element to the <article> element as children. (appendChild)
        createElement.appendChild(h3Element);
        createElement.appendChild(imgElement);

        //Append the <article> element to the global templesElement variable declared in Step 2
        templesElement.appendChild(createElement);
    });
};


/* async getTemples Function using fetch()*/
//Create another function expression called getTemples. Make it an async anonymous, arrow function
const getTemples = async () =>{
    //In the function, declare a const variable named response that awaits the built-in fetch method calling the temple data, absolute URL given in Step 2 above.
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    };
};

/* reset Function */
//Declare a function expression named reset that clears all of the <article> elements from the templesElement.
const reset = () => {
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
}
/* sortBy Function */
const sortBy = (temples) => {

    reset();

    //Define a variable named filter that obtains the value of the HTML element with the ID of sortBy (The pull-down menu).
    const filter = document.querySelector('#sortBy').value;

    // Use a switch statement that uses the filter value as the selector responding to four cases
    switch (filter) {
        case 'utah':
            // Filter for temples where the location contains "Utah" as a string
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            // Filter for temples where the location does not contain "Utah" as a string
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            // Filter for temples where the dedicated date is before 1950
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            // No filter. Just use temples as the argument
            displayTemples(temples);
            break;
        //default:
          //  console.log('Invalid filter option');
    }
};


getTemples();

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => sortBy(templeList));

