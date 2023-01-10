function printText(){
    console.log("hello");
}
printText.areYouAnObject = true;


var a = 2;
let person = {
    firstName: "THE PM",
    lastName: "Sharma",
    getName:function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(this.a);
console.log(person.getName());

//  Special method
function greetPerson(greeting){
    console.log(greeting, this.getName());
}
// greetPerson()

// bind
// creates a new copy of the function that we calling bind on
// let greetMe = greetPerson.bind(person);
// console.log(greetMe());

// call 
// this doesn't creat a copy
// greetPerson.call(person,"Nameste");



// arguments
// function sum(x,y){
//     console.log(arguments)
//     return x+y
// }
// sum(2,3)

function sum(x,y){
    let total = 0;
    for(let index = 0; index < arguments.length; index++){
        total += arguments[index];
    }
    return total;
}
console.log(sum(2,3,4,5));

// apply
greetPerson.apply(person, ["Hello,"]);

// function borrowing

let doctor = {
    firstName: "John",
    lastName: "Doe"
    
}

console.log(person.getName.call(doctor))

// function currying
function logData(date, date){
    console.log(date, date);
}

// logData(new Date(), "this is date to be logged")

let logNow = logData.bind(null, new Date());
logNow("this is another info to be logged")

// function add(fristNum){
//     return function (secondNum){
//         console.log(fristNum + secondNum) ;
//         return fristNum + secondNum ;
//     }
// }

// add(5)(6)
// add(15)(4)
// add(7)(9)

function add(firstNum, secondNum){
    return firstNum + secondNum
}

let add_5_with = add.bind(null, 5);
console.log(add_5_with(2))
console.log(add_5_with(8))

// default value

function printSomeText(text = "Devsnest"){
    console.log(text);
} 
printSomeText("mentor");
