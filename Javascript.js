var firstName = 'Richard';
var lastName = 'Gill';
console.log(firstName + " " + lastName);
function firstNamelastName(firstName, lastName){
	console.log(firstName + " " + lastName);
}
firstNamelastName("Daniel", "Gill");
function lastNameFirstName(firstName, lastName){
console.log(lastName + ", " + firstName);
}
lastNameFirstName("Richard", "Gill");
var firstName = "Richard";
console.log(firstName.length);
var people = ["Jack", "John", "James"];
for (i=0; i<people.length; i++) {
	console.log(people[i]);
}
function noFirstLetter(name){
var noFirst = name.substr(1);
return noFirst;
}
console.log(noFirstLetter("Daniel"));
function noFirstLetterJ(name){
var noFirst = name.substr(1);
if(name.charAt(0) == "J"){
return noFirst;
}
else {
return name
}
};
console.log(noFirstLetterJ("John"));
console.log(noFirstLetterJ("Daniel"));
function noFirstLetterJR(name){
var noFirst = name.substr(1);
var noLastTwo = name.slice(0,-2);
if(name.charAt(0) == "J"){
return noFirst;
}
else if(name.charAt(0) == "R"){
return noLastTwo;
}
else {
return name
}
};
console.log(noFirstLetterJR("John"));
console.log(noFirstLetterJR("Daniel"));
console.log(noFirstLetterJR("Richard"));