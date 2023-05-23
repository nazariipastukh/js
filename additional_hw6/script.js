// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutArr=[];
let cutString=(str,n)=>{
    for (let i=0; i<str.length; i+=n) {
        cutArr.push(str.substring(i, i+n));
    }
    return console.log(cutArr);
}
cutString('наслаждение',3);
console.log('--------------------');

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let str = 'Каждый охотник желает знать';
let delete_characters=(str,length)=> console.log(str.substring(0,length));
delete_characters(str,7);
console.log('--------------------');

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str1 = "HTML JavaScript PHP";
let insert_dash=(str)=>console.log(str.toUpperCase().replaceAll(' ','-'));
insert_dash(str1);
console.log('--------------------');

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let string='кожен мисливець бажає знати';
let upperCase=(strName)=>console.log(strName.charAt(0).toUpperCase()+strName.substring(1));
upperCase(string);
console.log('--------------------');

// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'



// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)



// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.



// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.



// - є масивlet coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules



// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let count=(str,stringsearch)=>console.log(str.split(stringsearch).length-1);
count("Астрономия это наука о небесных объектах",'о');
console.log('--------------------');

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'



// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        title: 'Book 1',
        pageCount: 200,
        authors: ['Author 1', 'Author 2'],
        genres: ['Genre 1', 'Genre 2']
    },
    {
        title: 'Book 2',
        pageCount: 300,
        authors: ['Author 3'],
        genres: ['Genre 2', 'Genre 3']
    },
    {
        title: 'Book 333333',
        pageCount: 400,
        authors: ['Author 4'],
        genres: ['Genre 1']
    }
];

// -знайти наібльшу книжку.

let largestBook=(arrName)=>{
    let sorted=arrName.sort((a,b)=>(b.pageCount-a.pageCount));
    return console.log(sorted[0]);
}
largestBook(books);
console.log('--------------------');

// - знайти книжку/ки з найбільшою кількістю жанрів

let genres=(bookArray)=>{
    let sortedArr=bookArray.sort((a,b)=>b.genres.length-a.genres.length);
    for (let element of sortedArr){
        if (element.genres.length===sortedArr[0].genres.length){
            console.log(element);
        }
    }
}
genres(books);
console.log('--------------------');

// let genres=(arrName)=>arrName.reduce((acc,current)=>{
//     if (current.genres.length>acc){
//         return current.genres.length;
//     }else{
//         return acc;
//     }
// },0);
// let showBooks=(arrName)=>arrName.filter(element =>element.genres.length===genres(books));
// console.log(showBooks(books));
// console.log('--------------------');

// - знайти книжку/ки з найдовшою назвою

let title=(bookArray)=>{
    let sortedArr=bookArray.sort((a,b)=>b.title.length-a.title.length);
            return console.log(sortedArr[0].title);
}
title(books);
console.log('--------------------');

// - знайти книжку/ки які писали 2 автори

let authors=(bookArray)=>console.log(bookArray.filter(element=>element.authors.length===2));
authors(books);
console.log('--------------------');

// - знайти книжку/ки які писав 1 автор

let authors1=(bookArray)=>console.log(bookArray.filter(element=>element.authors.length===1));
authors1(books);
console.log('--------------------');

// - вісортувати книжки по кількості сторінок по зростанню

let sort=(arrName)=>console.log(arrName.sort((a, b) => b.pageCount - a.pageCount));
sort(books);
