//task1

let width = prompt("Enter the width:")
let height = prompt("Enter the height:")

function calcRectangArea(width, height) {
    
    if (isNaN(width) || isNaN(height)) {
        throw new Error ('This is not a number');
    }
    let rectArea = width * height;
    console.log(rectArea);
}
try {
    let result = calcReactangArea(); 
    console.log(result);
} catch (exeption) { 
    console.error(exeption);
}
//task2

function checkAge() {
    let newAge = prompt("Enter the age:", ""); 
        if (newAge.length < 1) {
            throw new Error("The field is empty! Please enter your age"); 
        }
        if (isNaN(newAge)) {
            throw new Error("You enter not a number!");
        }
        if (newAge < 14) {
            throw new Error("Your are too young!");
        }
        else {
            console.log("Access allowed!")
        }
        return newAge;
    }

    try {
        let result = checkAge(); 
        console.log(result);
        } 
    catch (exception) { console.log(exception.name); console.log(exception.message);
    }

         
//task3

не знаю як зробити

//task4
//task4.1
function showUser() {
    let id = [7];
    //let id = prompt("Enter your id:")
    if(id < 0) {
        throw new Error("You enter negative id:");
    }
    else {
        console.log("All good");
    }
}
try {
    let result = showUser(); 
    console.log(result);
    } 
catch (exception) { console.log(exception.name); console.log(exception.message);
}

//task4.2

let x = [7, -12, 44, 22];

for (let i = 0; i < x.length; i++) {
     if (x[i] < 0) {
        showUsers(x, i);
    }
}

console.log(x);

function showUsers(array, index) {
    for (let i = index; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    array.pop();
}




