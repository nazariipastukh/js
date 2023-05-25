// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString=(str,n)=>{
    let newStr=[];
    for(let i=0;i<str.length;i+=n){
        newStr.push(str.slice(i,i+n));
    }
    return console.log(newStr);
}
cutString('насолода', 3);

console.log('--------------------');

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters=(str,length)=>console.log(str.substring(0,length));
delete_characters('Кожен мисливець бажає знати',6);

console.log('--------------------');

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str = "HTML JavaScript PHP";
let insert_dash=(str)=>console.log(str.toUpperCase().replaceAll(' ','-'));
insert_dash(str);

console.log('--------------------');

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let upper=(str)=>console.log(str.charAt(0).toUpperCase()+str.substring(1));
upper('hello world');
console.log('--------------------');

// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


console.log('--------------------');

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomGen=(length)=>{
    let random=[];
    for (let i=0;i<length;i++){
        let number=Math.floor(Math.random()*101);
        random.push(number);
    }
    return random;
}
let randomArr= randomGen(10);
console.log(randomArr);

console.log('--------------------');

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

let sortNum=(numbers)=>console.log(numbers.sort((a,b)=>a-b));
sortNum(randomArr);

console.log('--------------------');

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

let sortNum0=(numbers)=>console.log(numbers.filter(element=> element!==0 && element%2===0));
console.log(randomArr);
sortNum0(randomArr);

console.log('--------------------');

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize=(str)=>{
    let words=str.split(' ');
    for (let i=0;i<words.length;i++){
        let word=words[i];
        words[i]=word.charAt(0).toUpperCase()+word.slice(1);
    }
    return words.join(' ');
}
console.log(capitalize('hello my name is nazarii'));

console.log('--------------------');

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



console.log('--------------------');

// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let sort=(arrName)=>console.log(arrName.sort((a,b)=>b.modules.length-a.modules.length));
sort(coursesArray);

console.log('--------------------');

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let count=(str,stringsearch)=>{
    let counter=[];
    for (let i=0;i<str.length;i++){
        counter.push(str.slice(i,i+1));
    }
    let filter=counter.filter(element=>element===stringsearch);
    return console.log(filter.length);
}
count('Астрономія - це наука про небесні тіла', 'о');

console.log('--------------------');

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let str1 = "Сила тяжести приложена к центру масс тела";

let cutString1=(str, n)=>console.log(str.split(' ').slice(0,n).join(' '));
cutString1(str1,3);

console.log('--------------------');

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        title: 'Book 333333',
        pageCount: 400,
        authors: ['Author 4', 'Author 2'],
        genres: ['Genre 1']
    },
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
    }
];

// -знайти наібльшу книжку.

let largest=(bookArr)=>{
    let sortedBooks=bookArr.sort((a,b)=>b.pageCount-a.pageCount);
    console.log(sortedBooks[0]);
}
largest(books);

console.log('--------------------');

// - знайти книжку/ки з найбільшою кількістю жанрів

let genres=(arrName)=>arrName.reduce((acc,current)=>{
    if (current.genres.length > acc){
        acc=current.genres.length;
    }
    return acc;
},0);
let findBook=(arrName,acc)=>console.log(arrName.filter(element=>element.genres.length===acc));
findBook(books,genres(books));

console.log('--------------------');

// - знайти книжку/ки з найдовшою назвою

let title=(arrName)=>arrName.reduce((acc,element)=>{
   if (element.title.length>acc){
       acc=element.title.length;
   }
   return acc;
},0)
let longestTitle=(arrName,acc)=>console.log(arrName.filter(element=>element.title.length===acc));
longestTitle(books,title(books));

console.log('--------------------');

// - знайти книжку/ки які писали 2 автори

let authors=(arrName)=>console.log(arrName.filter(element=>element.authors.length===2));
authors(books);

console.log('--------------------');

// - знайти книжку/ки які писав 1 автор

let author=(arrName)=>console.log(arrName.filter(element=>element.authors.length===1));
author(books);

console.log('--------------------');

// - вісортувати книжки по кількості сторінок по зростанню

let sorted=(arrName)=>console.log(arrName.sort((a,b)=>a.pageCount-b.pageCount));
sorted(books);

console.log('--------------------');
