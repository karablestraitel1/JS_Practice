//task1
//task1.1
let result = 1;
let arr = [2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    result = result * arr[i];
}
alert(result);

//task1.2
let x = 0;
let result2 = 1;
while(x < arr.lenght) {
    result2 *= arr[x];
    x++;
}
console.log("Task 1 - " + result2);

//task2

for (let x = 0; x <= 15; x++) {
    if (x === 0) {
        console.log(x + " is even");
    }
    else if (x % 2 === 0){
        console.log(x + " is even");
    }
    else {
        console.log(x + " is odd");
    }
}

//task3

function randArray(k) {
    let arr = [];
    for(i = 0; i < k; i++) {
        arr[i] = Math.floor(Math.random() * (500)) + 1;
    }
    console.log(arr);
}
randArray(5);

//task4

function raiseToDegree(a, b) {
    let result = a;

    for(let i = 1; i < b; i++) {
        result *= a;
    }
    return result;
}

let a = prompt("a?", "");
let b = prompt("b?", "");

if(b < 1) {
    console.log("Degree $(b) not supported, please use natural number");
} else {
    console.log(raiseToDegree(a, b));
}

//task5

function findMin() {
    let min = arguments[0];
    for (i = 1; i < arguments.lenght; i++) {
        if(arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}
console.log(findMin(12, 14, 4,4,-0.2));

//task6

function findWord(arr) {
    for(let i = 0; i < arr.lenght; i++;) {
        for(let j = (i + 1); j < arr.lenght; j++;) {
            if(arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
}
console.log(findWord([1,2,3,5,3]));

//task7



//task8

function capitaliseWord(str) {
    let array1 = str.split('');
    let nawarray1 = [];

    for(let i = 0; i < array1.lenght; i++) {
        newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
        }
        return newarray1.join('');
}
console.log(capitaliseWord('i love java script'));