// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function calc(a,b){
    return a*b;
}
console.log(`S = ${calc(10,10)}`);
console.log(`------------------`);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function calcCircle(r){
    return Math.PI*r**2;
}
console.log(`S = ${calcCircle(10)}`);
console.log(`------------------`);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//Площа повної поверхні Sцил = 2πRH + 2πR2

function calcCyl(h,r){
    return 2*Math.PI*r*h+2*Math.PI*r**2
}
console.log(`S = ${calcCyl(10,20)}`);
console.log(`------------------`);

// - створити функцію яка приймає масив та виводить кожен його елемент

arr=[121,143,4234,4534,'dsf','sfs'];
function arrayLog(arrayName){
    for (let element of arrayName){
        console.log(element);
    }
}
arrayLog(arr);
console.log(`------------------`);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createP(text){
    document.write(`<p>${text}</p>`);
}
createP('Hello');
document.write(`<hr>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createLi(text){
    document.write(
        `<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}
createLi('Hello hello');
document.write(`<hr>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createLiLi(text,li){
    document.write(`<ul>`);
    for (let i=0;i<li;i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createLiLi('HelloHello', 3);
document.write(`<hr>`);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array=[123,123,43,'fdds','fsd','fswqe',false,true];
function createList(arrName){
    document.write(`<ul>`);
    for (let i=0;i<arrName.length;i++){
        document.write(`<li>${arrName[i]}</li>`);
    }
    document.write(`</ul>`);
}
createList(array);
document.write(`<hr>`);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let users=[
    {id:1, name:'Petro', age:18},
    {id:2, name:'Andriy', age:20},
    {id:3, name:'Alex', age:22}
];
function showUser(arrName) {
    for (let element of arrName){
        document.write(`<div><p>${element.id}. ${element.name} - ${element.age}</p></div>`);
    }
}
showUser(users);
document.write(`<hr>`);

// - створити функцію яка повертає найменьше число з масиву

let arrayOfNum=[34,54,232,54,6534,23,1,54,5,23];
function calcMax(arrName){
    let min = arrName[0];
    for (let element of arrName){
        if (element<min){
            min=element;
        }
    }
    return min;
}
console.log(calcMax(arrayOfNum));
console.log(`------------------`);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function calcSum(arrName){
    let x=0;
    for (let element of arrName){
        x+=element;
    }
    return x;
}
console.log(calcSum(arrayOfNum));
console.log(`------------------`);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let newArr=[];
// function swap1(arr,index1,index2){
//     for (let i=0;i<arr.length;i++){
//         if(i===index1){
//             newArr[index2]=arr[i];
//         }else if (i===index2){
//             newArr[index1]=arr[i];
//         }else{
//             newArr[newArr.length]=arr[i];
//         }
//     }
// }
// swap1([11,22,33,44],2,3);
// console.log(newArr);
// console.log(`------------------`);

function swap2(arr,index1,index2) {
    let value1 = arr[index1];
    let value2 = arr[index2];
    arr[index1]=value2;
    arr[index2]=value1;
    return arr;
}
console.log(swap2([11,22,33,44],2,3));
console.log(`------------------`);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (let element of currencyValues){
        if (exchangeCurrency===element.currency){
            return `${sumUAH/element.value} ${exchangeCurrency}`;
        }
    }
}
console.log(exchange(
    10000,
    [{currency:'USD',value:40},{currency:'EUR',value:42}],
    'USD'));
console.log(`------------------`);