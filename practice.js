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


let arr = [1,2,3,4,5,6,7];
let arr2 =[];
for(i=arr.length-1; i>=0; i--){
    arr2.push(arr[i]);

}

console.log(arr2);