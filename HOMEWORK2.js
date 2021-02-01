//task1

let x = 1;
let y = 2;
let res1 = x + "" + y
console.log(res1);
console.log(typeof res1); 

let x = 1;
let y = 2;
let res2 = true + "" + y
console.log(res2);
console.log(typeof res2);

let x = 1;
let y = 2;
let res3 = x < y
console.log(res3);
console.log(typeof res3);

let x = 1;
let y = 2;
let res4 = parseInt("x\y")
console.log(res4); 
console.log(typeof res4);

//task2

let checkNumber = prompt("Enter the number for cheking:")
if (checkNumber % 2 == 0 & checkNumber > 0) {
    console.log("Pair and positive"); 
} else {
    console.log("Dont paired or positive"); //meets the conditions a)
} if (checkNumber % 7 == 0) {
    console.log("Multiple 7");
} else {
    console.log("Dont multiple 7"); //meets the conditions a) and b)
}

//task3

let myArray = [];//task3.1
myArray.push(2);//task3.2
myArray.push("42");//task3.3
myArray.push(true);//task3.4
myArray.push(null);//task3.5
let newItem = prompt ("Enter new item of array:")
myArray.push(newItem);
console.log(myArray);//task3.6
alert(myArray[4]);//task3.7
myArray.shift();
alert(myArray);//task3.8

//task4

let cities = ["Rome", "Lviv", "Warsaw"];
let starCities = cities[0]+ "*" + cities[1] + "*" + cities[2]
console.log(starCities);

//task5

let isAdult = prompt("Are you an adult?");
  if (isAdult >= 18) {
    alert("Congratulations, you are an adult!");
  } else if (isAdult <= 10) {
    alert("Sorry, you are too young.");
  } else {
    alert("You are still underage.");
  }
  
//task6

let x = 1 * prompt("Enter the lenght of A side of the triangle");
let y = 1 * prompt("Enter the lenght of B side of the triangle");
let z = 1 * prompt("Enter the lenght of C side of the triangle");
let p = ((x + y + z) / 2);
let triangleArea = (p * (p - x) * (p - y) * (p - z)) ** (1/2);
if (x + y <= z || y + z <= x || z + x <= y) {
    console.log("Incorrect data");
} else {
    console.log(parseInt(triangleArea * 1000) / 1000); //Area of triangle
}
if ((x ** 2) + (y ** 2) == (z ** 2) || (y ** 2) + (z ** 2) == (x ** 2) || (z ** 2) + (x ** 2) == (y ** 2)) {
    console.log("Triangle is rectangular");
} else {
    console.log("Triangle is not rectangular"); //Checking for rectagular
}

//task7

//task7.1
let x = new Date();
time = x.getHours()
console.log(time);
if (time >= 23 && x < 5) {
    alert("Доброї ночі");
} else if (time >= 5 && time < 11) {
    alert("Доброго ранку")
} else if (time >=11 && time < 17) {
    alert("Доброго дня")
} else if (time >= 17 && time < 23) {
    alert("Доброго вечора")
} else {
    alert("Неправильний час!")
}


//task7.2
let x = new Date();
time = x.getHours()
console.log(time);
if (time >= 23 && time < 5) {
    alert("Доброї ночі");
} else if (time >= 5 && time < 11) {
    alert("Доброго ранку");
} else if (time >= 11 && time < 17) {
    alert("Доброго дня");
} else if (time >= 17 && time < 23) {
    alert("Доброго вечора");
} else {
    alert("Неправильний час!");
}

let x = new Date();
time = x.getHours()
console.log(time);
switch (time) {
  case 0:
    alert( "Доброї ночі" );
    break;
  case 1:
    alert( "Доброї ночі" );
    break;
  case 2:
    alert( "Доброї ночі" );
    break;
  case 3:
    alert( "Доброї ночі" );
    break;
  case 4:
    alert( "Доброї ночі" );
    break;
  case 5:
    alert( "Доброї ночі" );
    break;
  case 6:
    alert( "Доброго ранку" );
    break;
  case 7:
    alert( "Доброго ранку" );
    break;
  case 8:
    alert( "Доброго ранку" );
    break;
  case 9:
    alert( "Доброго ранку" );
    break;
  case 10:
    alert( "Доброго ранку" );
    break;
  case 11:
    alert( "Доброго ранку" );
    break;
  case 12:
    alert( "Доброго дня" );
    break;
  case 13:
    alert( "Доброго дня" );
    break;
  case 14:
    alert( "Доброго дня" );
    break;
  case 15:
    alert( "Доброго дня" );
    break;
  case 16:
    alert( "Доброго дня" );
    break;
  case 17:
    alert( "Доброго дня" );
    break;
  case 18:
    alert( "Доброго вечора" );
    break;
  case 19:
    alert( "Доброго вечора" );
    break;
  case 20:
    alert( "Доброго вечора" );
    break;
  case 21:
    alert( "Доброго вечора" );
    break;
  case 22:
    alert( "Доброго вечора" );
    break;
  case 23:
    alert( "Доброго вечора" );
    break;
  default:
    alert( "Невідома величина" );
}
