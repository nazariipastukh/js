// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a,b){
    return a*b;
}
console.log(`S = ${area(10,10)}`);

console.log('------------------------------');

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaOfCircle(r){
    return result=Math.PI*r**2;
}
areaOfCircle(2);
console.log(`S = ${result}`);

console.log('------------------------------');

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//Площа повної поверхні Sцил = 2πRH + 2πR2
function areaOfCylinder(h,r){
    return 2*Math.PI*r*h+2*Math.PI*r**2;
}
console.log(`S = ${areaOfCylinder(5,3)}`);

console.log('------------------------------');

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr=['first',2,12345];
function elementOfArray(nameOfArray){
    for (let element of nameOfArray){
        console.log(element);
    }
}
elementOfArray(arr);

console.log('------------------------------')

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP(text){
    document.write(`<div><p>${text}</p></div>`);
}
createP('Hello World');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList(text){
    document.write(`<div><ul>
                      <li>${text}</li>
                      <li>${text}</li>
                      <li>${text}</li>
                    </ul></div>`);
}
createList('Hello World');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUl2(text,li){
    document.write(`<ul>`);
    for (let i=1; i<=li; i++){
        document.write(`<li>${text}</li>`);
        }
    document.write(`</ul>`);
}
createUl2('Hello World',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const newArr=['hello','my','name','is','Nazar','i`m',20];
function createArrUl(nameOfArr){
    document.write(`<ul>`);
    for (let element of nameOfArr){
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`);
}
createArrUl(newArr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let userArr=[
    {id: 23123, name: 'Alex', age: 20},
    {id: 35343, name: 'John', age: 25},
    {id: 35434, name: 'Mike', age: 23}
]
function showUser(nameOfArray){
    for (let elOfArr of nameOfArray){
        document.write(`<div><p>${elOfArr.id}, ${elOfArr.name}, ${elOfArr.age}</p></div>`)
    }
}
showUser(userArr)

// - створити функцію яка повертає найменьше число з масиву



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

const arrOfNumbers=[23, 54, 12, 87, 76, 98, 42, 31, 64, 6];
function sum(arr){
    let sumOfArr=0;
        for (let elementOfArr of arr) {
            sumOfArr = elementOfArr + sumOfArr;
        }
    console.log(sumOfArr)
}
sum(arrOfNumbers)

console.log('------------------------------')

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency){
    if (exchangeCurrency==='USD') {
        let usdExchange = sumUAH / currencyValues[0].value
        console.log(usdExchange);
    }else if(exchangeCurrency==='EUR') {
        let eurExchange = sumUAH / currencyValues[1].value
        console.log(eurExchange);
    }else if(exchangeCurrency==='PLN'){
        let plnExchange= sumUAH/currencyValues[2].value
        console.log(plnExchange);
    }
}
exchange(1000,
    [{currency:'USD',value:40},{currency:'EUR',value:42},{currency:'PLN',value:8.9}],
    'PLN');