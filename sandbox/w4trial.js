const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];


//for loop
for (let i=0; i<studentReport.length; i++){
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }   
}


//while loop
let i=0
while (i<studentReport.length){
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

//foreach loop
studentReport.forEach(myFunction);
function myFunction(number){
    if (number<LIMIT){
        console.log(number)
    }   
}

//foreach loop example answer
studentReport.forEach(function (item) {
    if (item < LIMIT) {
      console.log(item);
    }
  });


//for in loop
for (let i in studentReport){
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

const n = 6; //number of days forward
const options = { weekday: 'long'}; 
const today = new Date();
let days= [];
let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);
days.push(todaystring);

// next n days
for (let i = 1; i <= n; i++ ) {
	let nextday = new Date();
	nextday.setDate(today.getDate() + i);
	let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
    days.push(nextdaystring);
}

days.forEach(function (item){
    console.log(item);
})
