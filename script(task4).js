//Задание 1
let person = { 
name: "Зульфия", 
age: 23, 
city: "Москва"};

let hobbies = ["чтение", "путешествия", "рисование"];

let combined = {
    hobbies:hobbies,...person
};

console.log(combined);

person.favoriteFoods = ["пицца", "салат"];

console.log("Person с любимыми блюдами:", person);

delete person.hobbies;
delete person.favoriteFoods;

console.log("Person в первоначальном виде:", person);

//Задание 2
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

for (let key in car) {
    console.log(key);
}

let keys = Object.keys(car);
for (let key of keys) {
    console.log(key);
}

let numbers = [3, 7, 1, 9, 5, 2];

console.log("Перебор с for:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
Object.keys(car).forEach(key => {
    console.log(key);
});

//Задание 3
console.log("Перебор с forEach:");
numbers.forEach(number => {
    console.log(number);
});

console.log("Новый массив с элементами, умноженными на 2:");
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

console.log("Сумма элементов массива:");
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

console.log("Проверка наличия числа 7:");
let hasSeven = numbers.includes(7);
console.log(hasSeven); 

console.log("Массив по возрастанию:");
let sortedNumbers = numbers.slice().sort((a, b) => a - b);
console.log(sortedNumbers);

//Задание 4
let names = ["Саша", "Маша", "Иван", "Петр", "Сергей"];
names.sort();
console.log(names);

//Задание 5
let person = {
    name: "Зульфия",
    sayHello: function() {
        console.log(`Привет, меня зовут ${this.name}`);
    }
};

person.sayHello(); 

let student = {
    name: "Александр"
};

let sayHelloStudent = person.sayHello.bind(student);

sayHelloStudent(); 
  










