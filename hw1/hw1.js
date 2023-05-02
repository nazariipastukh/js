// Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let a = 'hello'
let b='owu'
let c ='com'
let d = 'ua'
let e=1
let f=10
let g=-999
let h=123
let i= 3.14
let j= 2.7
let k= 16
let l= true
let m= false
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Nazarii'
let middleName='Stepanovych'
let lastName = 'Pastukh'
person=`${firstName} ${middleName} ${lastName}`;
console.log(person);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;

a = 100
b = '100'
c = true
console.log(typeof a, typeof b, typeof c);

// За допомогою 3х різних prompt() отримати 3 слова які являються вашими
// Імям, По-Батькові та роками. та вивести в консоль

let myFirstName=prompt("Введіть Ваше ім'я:");
let myMiddleName=prompt("Введіть Ваше ім'я по батькові:");
let myLastName = prompt("Введіть Ваше прізвище:");
console.log(`${myFirstName} ${myMiddleName} ${myLastName}`);
