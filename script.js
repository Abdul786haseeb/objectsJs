// object - object is an group of data which is stored in a series  of name value pairs encapsulated in one Entity...

// 1)- in javascript everything is an object if :-
// Booleans can be objects (if defined with the new keyword),
// Numbers can be objects (if defined with the new keyword),
// Strings can be objects (if defined with the new keyword).

//    properties
// 1) key , value
// i) key:- must be an string.
// ii) value:- value must be declare by number, boolean, string. for an reference datatypes like, functions, arraya and objects..

// Syntax -- object
//    const object_name = {
//    key1: value1,
//    key2: value2
 //   }

 // Here we can access the value of a property by using its key.
 //  1. objectName.key
 //  2. objectName["propertyName"]
 
 // 1.
 let person={ 
    name: "Abdul", 
    age: 24, 
};
// accessing property
console.log(person); // 'Abdul'

// 2.

let person = { 
    name: "Haseeb", 
    age: 24, 
};
// accessing property
console.log(person["name"]); // Haseeb

// Modifying the value of a property
//  To change the value of a property, you use the assignment operator (=)..

let person = {
    firstName: "Shah",
    lastName: "Ahmed",
};
person.firstName = 'Abdul'
console.log(person);
// output:- { firstName: 'Abdul', lastName: 'Ahmed' }

// 3.Adding a new property to an object

// Unlike objects in other programming languages such as Java and C#, you can add a property to an object after object creation.
// person.age = 25;

var person = {
    name: "rohan",
    age: 25,
    gender: "Male",
    displayName: function() {
        console.log("Hello, My name is rohan");
    }
};

//  Deleting a property of an object
delete objectName.propertyName;

//  Checking if a property exists,
// To check if a property exists in an object, you use the in operator:
//  propertyName in objectName

let employee = {
    firstName: 'Afrid',
    lastName: 'mastan',
    employeeId: 1
};

console.log('ssn' in employee);
console.log('employeeId' in employee);

//Output:
//false
//true