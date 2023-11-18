/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    return document.querySelector('#sum').value = add(addNumber1,addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2){
    return number1 - number2;
}

const subtractNumbers = function(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    return document.querySelector('#difference').value = subtract(subtractNumber1,subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const subtotal = document.getElementById("subtotal");
const membership = document.getElementById("member");
const getTotalButton = document.getElementById("getTotal");
const totalSpan = document.getElementById("total");

getTotalButton.addEventListener("click", () => {
  const subtotalValue = parseFloat(subtotal.value);
  const isMember = membership.checked;
  const totalAmount = isMember ? subtotalValue * 0.85 : subtotalValue;
  totalSpan.textContent = `Total: $${totalAmount.toFixed(2)}`;
}); 

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbersArray.filter((num) => num % 2 ===1);
/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbersArray.filter((num) => num % 2 ===0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce(sumFunction);

function sumFunction(total, num){
    return total + num;
}
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(doubleFunction);

function doubleFunction(x){
    return x*2;
}

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(doubleFunction).reduce(sumFunction);