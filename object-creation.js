// object literal syntax
let person = {
    fristName: "THe_PM",
    lastNmae:"Sharma"
};

let anotherPerson = new Object();
anotherPerson.fristName ="John";
anotherPerson.lastName ="Doe";
console.log(anotherPerson);


// function constructor
// function Person(){
//     this.fristName = "THe_PM";
//     this.lastNmae = "Sharma";

// }

// let cocowa = new Person();
// console.log(cocowa);

// prototype Inheritance in JS
function Person(fristName, lastName){
    this.fristName = fristName;
    this.lastName = lastName;
}

let cocowa = new Person("THe_PM","Sharma");
console.log(cocowa);

let pmpm = new Person("Nono", "Momo")
console.log(pmpm);

Person.prototype.printName = function(){
    return this.fristName + " " + this.lastName;
}

console.log(cocowa.fristName.toString());
console.log(cocowa.printName());
console.log(pmpm.printName());

// prototypal inheritance in js
 let firstSet = [1,3, 5, 8, 10]
 let secondSet = [2,6,9,12,45,30,27]

 console.log(firstSet, secondSet);

 Array.prototype.evenNumber = function(){
    return this.filter(function(item){
        return item % 2 === 0;
    })
 }


// call by value and call by reference

let a = 2;
let b = a;

// Object.create()
let org = {org: "Devsnest"};
let newPersonOrg = Object.create(org, {name: {value: "foooo"}});
console.log(newPersonOrg)
org.location = "New Delhi"
org.name = "foo bar"
console.log(newPersonOrg)
console.log(org)

// Object.hasOwn()
Object.hasOwn(newPersonOrg, "name")

// Object.assign()

let someP = {name : "Gaurav"}
let carP = {car : "SomeCar"}

let monoro = Object.assign({}, someP, carP)
console.log(monoro)

// class to make object
class Shape{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    area(){
        return this.height * this.width;
        
    }
}
let rectangle  = new Shape(10, 20);
console.log(rectangle)

class Square extends Shape{
    constructor(dimention){
        super(dimention, dimention)
    }
}
console.log(new Square(10))
console.log(new Square(10).area())








