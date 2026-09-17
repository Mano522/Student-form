console.log("hello javascript");
alert("welcome to javascript");
var name = "samarth";
console.log(name);
let age = 20;
let city = "pune";
let isStudent = false;
console.log(age);
console.log(city);
console.log(isStudent);
age = 27;
console.log(age);
const country = "india";
console.log(country);


//DATATYPES

//string
let college='JIT';
let college1='JIT';
console.log(college);
console.log(college1);

//number
let a=10;
let b=20;
console.log(a);
console.log(b);

// boolean
let isTrue=true;
let isFalse=false;
console.log(isTrue);
console.log(isFalse);

let c = 5.8;
let d = 3.2;
let sum = c + d;
console.log(c + " + " + d + " = " + sum);
console.log(c)
console.log(d)

//undefined
let address;
console.log(address);

//null
let phone=null;
console.log(phone);

//symbol
let uniqueId = Symbol('id');
console.log(uniqueId);

//object
 let student = {
    name: "John",
    age: 20,
    city: "New York"
 };
console.log(student);

// object 
let student1 = {
    name: "sam",
    age: 20,
    course: "MERN STACK"
};
console.log(student1);

//BIG INT 
let bigNumber = 12345678912345678912345678123456789;
console.log(bigNumber);          

//typeof 
console.log(typeof num);
console.log(typeof(college));

//airthmetic operators
let a2=10;
let b2=5;
console.log(a2 + b2);
console.log(a2 - b2);
console.log(a2 * b2);
console.log(a2 / b2);
console.log(a2 % b2);

//comparison operators
let x = 10;
let y = 5;
console.log(x > y);//
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y);//checks value and allows type conversion
console.log(x != y);//checks whether values are different
console.log(x === y);//checks value and datatype
console.log(x !== y);//checks value or datatype difference

//logical operators
console.log(age>=18 && age<=30);//AND operator
let weekendDay = "saturday";
console.log(weekendDay === "saturday" || weekendDay === "sunday");//OR operator

let isLoggedIn = true;
console.log(!isLoggedIn);//NOT operator

//user input 

let clg=prompt("Enter your college name");
console.log(clg);

//string to number
let ticketcost = Number(prompt("enter the ticket fare"));
console.log(ticketcost);
console.log(typeof ticketcost)

//conditional statement 
let marks = 85;
if(marks >= 90){
    console.log("Grade A");
}
else if(marks >= 80){
    console.log("Grade B");
}   
else if(marks >= 70){
    console.log("Grade C");
}
else if(marks >= 60){
    console.log("Grade D");
}
else{
    console.log("Fail");
}

//ternery operator
let w=10;
let result = w>=5?"yes":"no";
console.log(result);

//switch
let day1=2;

switch(day1){
    case 1:console.log("Monday");break;
    case 2:console.log("Tuesday");break;
    case 3:console.log("Wednesday");break;
    default:console.log("Invalid day");
}

for(let i = 0; i < 5; i++){
    console.log(i);
}




//function 

//`1 functiom with noi parameter
function greet(){
    console.log("Hello, welcome to JavaScript!");
}
greet();

//2 function with parameter
function greet2(name){
    console.log("Hello, " + name);
}
greet2("Alice");

//3.function with multiple parameter 
function add(x,y){
    console.log(x+y);
} 

add(10,20); 

//return vs consol.log()
function sum(u,v){
    return u+v;
}
let res=sum(5,10);
console.log(res);

//4.function with default parameter
function greet3(name="Guest"){
    console.log("Hello, " + name);
}
greet3();
greet3("Bob");

//5.function with rest parameter
function sumAll(...numbers){
    let total=0;
    for(let num of numbers){
        total+=num;
    }
    return total;
}
console.log(sumAll(1,2,3,4,5));

//6.function with arrow function
const multiply=(x,y)=>x*y;
console.log(multiply(5,10));    