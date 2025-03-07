// practice object

// create an object
let person = {
    name :"yusuf",
    age: 36,
    isStudent: true,
    country : "BD"
}

//print object
console.log(person);

//print object property
console.log(person.name);

//add object property
person.degree = "Bsc engineer";

//remove object property
delete person.age;
console.log(person);

// add function
person.watch = function(){
    console.log("I am watching TV");
}

console.log(person.watch());

for(let key in person){
    console.log(key + " : " +person[key]);
}