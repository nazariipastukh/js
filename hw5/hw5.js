// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const calc = (a,b)=>a*b;
console.log(`S = ${calc(10,10)}`);

console.log('--------------------');

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const calcCrc=r=>2*Math.PI*r**2;
console.log(`S = ${calcCrc(10)}`);

console.log('--------------------');

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// Sцил = 2πRH + 2πR2

const calcCyl=(h,r)=>2*Math.PI*r*h+2*Math.PI*r**2;
console.log(`S = ${calcCyl}`);

console.log('--------------------');

// - створити функцію яка приймає масив та виводить кожен його елемент

let array=[232,2132,213,12,434,546,5,'hello'];
const elementOfArr=nameOfArr => {
    for (let element of nameOfArr)
        console.log(element);
}
elementOfArr(array);

console.log('--------------------');

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const createP=text=>{
    document.write(`<p>${text}</p>`);
}
createP('Hello');

document.write(`<hr>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const createUl=text=>{
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}
createUl('Hello');

document.write(`<hr>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const createUl1=(text,li)=>{
    document.write(`<ul>`);
    for (let i=0;i<li;i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createUl1('Hello',3);

document.write(`<hr>`);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr=[1,232,3423,'hello','hi',true,false];
const createList=arrName=>{
    document.write(`<ul>`);
    for (let element of arrName){
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`);
}
createList(arr);

document.write(`<hr>`);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let users=[
    {id:1, name:'Petro', age:18},
    {id:2, name:'Andriy', age:20},
    {id:3, name:'Alex', age:22}
];
const showUser=arrName=>{
    for (let element of arrName){
        document.write(`<div><p>${element.id}. ${element.name} - ${element.age}</p></div>`);
    }
}
showUser(users);

document.write(`<hr>`);

// - створити функцію яка повертає найменьше число з масиву

let numArr=[32,43,45,57,2,75,42,23,34,3];
const calcLow=arrName=>{
    let lowest=arrName[0];
    for (let element of arrName){
        if (element<lowest){
            lowest=element;
        }
    }
    console.log(lowest)
}
calcLow(numArr);

console.log('--------------------');

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

const sum=arrName=>{
    let sumNum=0;
    for (let element of arrName){
        sumNum+=element;
    }
    console.log(sumNum)
}
sum(numArr);

console.log('--------------------');

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap=(arr,index1,index2)=>{
    let value1=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=value1;
    return arr;
}
console.log(swap([11,22,33,44],0,1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange=(sumUAH, currencyValues, exchangeCurrency)=>{
    for (let element of currencyValues)
    if (exchangeCurrency===element.currency){
        return `${sumUAH/element.value} ${exchangeCurrency}`;
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));