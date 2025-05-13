function sum1(a, b) { //Сумма чисел (Function Declaration)
    return a + b;
}

const sum2 = function(a, b) { //Сумма чисел (Function Expression)
    return a + b;
};

const sum3 = (a, b) => a + b; //Сумма чисел (Arrow Function)

console.log(sum1(2, 3)); 
console.log(sum2(2, 3));
console.log(sum3(2, 3));

function isEven1(number) { //Проверка четности числа (Function Declaration)
    return number % 2 === 0;
}

const isEven2 = function(number) { //Проверка четности числа (Function Expression)
    return number % 2 === 0;
};

const isEven3 = number => number % 2 === 0; //Проверка четности числа (Arrow Function)

console.log(isEven1(5)); 
console.log(isEven2(2));
console.log(isEven3(4));

function celsiusToFahrenheit1(celsius) { //Эквивалент в градусах Фаренгейта (Function Declaration)
    return celsius * 9/5 + 32;
}

const celsiusToFahrenheit2 = function(celsius) { //Эквивалент в градусах Фаренгейта (Function Expression)
    return celsius * 9/5 + 32;
};

const celsiusToFahrenheit3 = celsius => celsius * 9/5 + 32; //Эквивалент в градусах Фаренгейта (Arrow Function)

console.log(celsiusToFahrenheit1(5)); 
console.log(celsiusToFahrenheit2(2));
console.log(celsiusToFahrenheit3(4));

function toUpperCase1(str) {    // Верхний регистр(Function Declaration)
    return str.toUpperCase();
} 

const toUpperCase2 = function(str) { // Верхний регистр (Function Expression)
    return str.toUpperCase();
};

const toUpperCase3 = str => str.toUpperCase(); // Верхний регистр (Arrow Function)

console.log(toUpperCase1("слово")); 
console.log(toUpperCase2("слово"));
console.log(toUpperCase3("слово"));

function calculate1(a, b, callback) { //calculate (Function Declaration)
    return callback(a, b);
}
 
const calculate2 = function(a, b, callback) { //calculate (Function Expression)
    return callback(a, b);
};

const calculate3 = (a, b, callback) => callback(a, b); //calculate (Arrow Function)

console.log(calculate1(2, 3, (a, b) => a + b));
console.log(calculate2(2, 3, (a, b) => a + b));
console.log(calculate3(2, 3, (a, b) => a + b));

function countDown(n) { //countDown (Function Declaration)
    if (n <= 0) return;
    console.log(n);
    countDown(n - 1);
}

console.log(countDown(7));























