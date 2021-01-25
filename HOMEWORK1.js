//task1

alert ("Роман");

//task2

document.write ("Тижник");

//task3

let a;
let b;
a = 12
b = 42
a=b;
document.write ("a = " + a + " and b = " + b);

//task4

let user = {
		firstName: "Roman",
		age: 25,
		carLicence: true, 
		marriageStatus: undefined,
		amountOfChildren: null
	};

//task5

let isAdult = confirm("Have you reached adulthood?");
console.log (isAdult);

//task6

let firstName = "Roman";
let secondName = "Tyzhnyk";
let studyTeam = true;
let birthYear = 1990;
let marriageStatus;
let criminalRecord = null;
console.log (typeof birthYear);
console.log (typeof studyTeam);
console.log (typeof firstName);
console.log (typeof secondName);
console.log (typeof marriageStatus);
console.log (typeof criminalfRecord);


//task7

let name = prompt ("Your login?");
let email = prompt ("Your email?");
let password = prompt ("Your password?");
let messageName = "Dear user, your login is: "
let messageEmail = ", email is: "
let messagePassword = " and password is: "
alert(messageName + name + messageEmail + email + messagePassword + password);

//task8

let second = 1;
let hour = second * 360;
let day = hour * 24; 
let mounth = day * 31;
alert("Days of mounth: " + mounth + ", hours in day: " + day + ", seconds in hour: " + hour);
