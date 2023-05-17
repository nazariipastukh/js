// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

const calcLowest=(a,b,c)=>{
    let arr=[a,b,c];
    let low=arr[0];
    for (let element of arr){
        if (element<low){
            low=element;
        }
    }
    console.log(low);
}
calcLowest(4,6,44);
console.log('--------------------');

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

const calcHighest=(a,b,c)=>{
    let arr=[a,b,c];
    let high=arr[0];
    for(let element of arr){
        if (element>high){
            high=element;
        }
    }
    console.log(high);
}
(calcHighest(10,20,15));
console.log('--------------------');

// - створити функцію яка повертає найбільше число з масиву

let array=[0,343,45,65,23,1,2,554,656,5];
const calcHighestNum=arrName=>{
    let highest=arrName[0];
    for (let element of arrName){
        if (element>highest){
            highest=element;
        }
    }
    console.log(highest);
}
calcHighestNum(array);
console.log('--------------------');

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

const avg=arrName=>{
    let sum=0;
    for (let element of arrName){
        sum+=element;
    }
    console.log(sum/arrName.length);
}
avg(array);
console.log('--------------------');

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);

function lowHigh(...num){
    let low=num[0];
    let high=num[0];
    for (let element of num){
        if (element<low){
            low=element;
        }
        if (element>high){
            high=element;
        }
    }
    console.log(high);
    return low;
}
let low = lowHigh(2,3,2,1,23,43,23);
console.log(low);
console.log('--------------------');

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let randomArr=[];
const fillArr=arrName=>{
    for (let i=0;i<10;i++){
        arrName[i]=Math.round(Math.random()*100);
    }
    console.log(arrName);
}
fillArr(randomArr);
console.log('--------------------');

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.

let randomArr1=[];
const fillArr1=(arrName,limit)=>{
    for (let i=0;i<10;i++){
        arrName[i]=Math.round(Math.random()*limit);
    }
    console.log(arrName);
}
fillArr1(randomArr1,100);
console.log('--------------------');

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let arr = [1,2,3,4,5];
let reverseArr=[];
const reverse=(arrName,newArr)=>{
    for (let i=arrName.length-1; i>=0;i--){
        newArr[newArr.length]=arrName[i];
    }
    console.log(newArr);
}
reverse(arr,reverseArr);
console.log('--------------------');

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи -
// складає або конкатенує їх між собою.

const newFunc=(...arg)=>{
    if (arg.length===1){
        return console.log(arg);
    }else if (arg.length===2){
        return console.log(arg[0]+arg[1]);
    }
}
newFunc('Hello','World');
console.log('--------------------');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]



// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]



//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]



// Дано натуральное число n. Выведите все числа от 1 до n.



// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.



// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]



// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]