// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.

let array=[];
for (let i=0; i<50; i++){
    array[array.length]=i*2;
}console.log(array);
console.log('--------------------');

// b. заповнити його 50 непарними числами за допомоги циклу.

array=[];
for (let i=0;i<50;i++){
    array[i]=i*2+1;
}
console.log(array);
console.log('--------------------');

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

array=[];
for (let i=0;i<20; i++){
    array[i]=Math.random()*100;
}
console.log(array);
console.log('--------------------');

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

array=[];
for (let i=0;i<20;i++){
    array[i]=Math.floor(Math.random()*(Math.floor(8)-Math.ceil(732))+Math.ceil(732));
}
console.log(array);
console.log('--------------------');

// 2. Вивести за допомогою console.log кожен третій елемен
let array1=[];
for (let i=0;i<array.length;i++){
    if (i%3===0){
        array1[array1.length]=array[i];
    }
}
console.log(array1);
console.log('--------------------');

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
array1=[];
for (let i=0;i<array.length;i++){
    if (i%3===0 && array[i]%2===0){
        array1[array1.length]=array[i];
    }
}
console.log(array1);
console.log('--------------------');

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
array1=[];
for (let i=0;i<array.length;i++){
    if ((array[i+1])%2===0 ){
        array1[array1.length]=array[i];
    }
}
console.log(array1);
console.log('--------------------');

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let sum=0;
let avg=0;
let arrayOfNum=[100,250,50,168,120,345,188];
for (let i=0;i<arrayOfNum.length;i++){
    sum = sum +arrayOfNum[i];
    avg = sum/arrayOfNum.length;

}
console.log(avg);
console.log('--------------------');

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let newArray=[];
for (let i=0;i<array.length;i++){
    newArray[i]=array[i]*5;
}
console.log(array);
console.log(newArray);
console.log('--------------------');

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let randomArr=['','hello',321,343,'Hi',false,34354542,'fdsdfdsx'];
let newRandomArr=[];
for (let i=0;i<randomArr.length;i++){
    if(typeof(randomArr[i])==='number'){
        newRandomArr[newRandomArr.length]=randomArr[i];
    }
}
console.log(newRandomArr);
console.log('--------------------');

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ]

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arrayEven=[1,2,4,5,6,7,8,9,0,3];
let newArrEv=[];
for (let element of arrayEven){
    if (element%2===0){
        newArrEv[newArrEv.length]=element;
    }
}
console.log(newArrEv);
console.log('--------------------');

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let emptyArr=[];
for (let element of arrayEven){
    emptyArr[emptyArr.length]=element;
}
console.log(emptyArr);
console.log('--------------------');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let strArr=[ 'a', 'b', 'c'];
let x='';
for (let i=0;i<strArr.length;i++){
    x=x+strArr[i];
}
console.log(x);
console.log('--------------------');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

x='';
i=0;
while(i<strArr.length){
    x=x+strArr[i];
    i++;
}
console.log(x);
console.log('--------------------');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

x='';
for (let element of strArr){
    x+=element;
}
console.log(x);