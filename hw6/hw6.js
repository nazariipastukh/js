// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let strLength=(...elements)=>{
    let strLength=[];
    elements.forEach(element=>strLength.push(element.length));
    return console.log(strLength);
}
strLength('hello world', 'lorem ipsum', 'javascript is cool');

console.log(`--------------------`);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let strUpper=(...elements)=>{
    let upperStr=[];
    elements.forEach(element=>upperStr.push(element.toUpperCase()));
    return console.log(upperStr);
}
strUpper('hello world', 'lorem ipsum', 'javascript is cool');

console.log(`--------------------`);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let strLow=(...elements)=>{
    let lowStr=[];
    elements.forEach(element=>lowStr.push(element.toLowerCase()));
    return console.log(lowStr);
}
strLow('HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL');

console.log(`--------------------`);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str=' dirty string   ';
console.log(str.trim());

console.log(`--------------------`);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str1 = 'Ревуть воли як ясла повні';

let stringToArray=(str)=>console.log(str.split(' '));
stringToArray(str1);

console.log(`--------------------`);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr=[10,8,-7,55,987,-1011,0,1050,0];

let map=(arr)=>console.log(arr.map(element=>element.toString()));
map(arr);

console.log(`--------------------`);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let sortNums=(nums,direction)=>{
    if (direction==='descending'){
        return console.log(nums.sort((a,b)=>b-a));
    }else if(direction==='ascending'){
        return console.log(nums.sort((a,b)=>a-b));
    }else{
        return console.log('error');
    }
}
sortNums([1,4,55,2,111,4,2,556,0],'ascending');

console.log(`--------------------`);

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

let sorted=(arrName)=>console.log(arrName.sort((a,b)=>b.monthDuration-a.monthDuration));
sorted(coursesAndDurationArray);

console.log(`--------------------`);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filtered=(arrName)=>console.log(arrName.filter(element=>element.monthDuration>5));
filtered(coursesAndDurationArray);

console.log(`--------------------`);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let mapped=(arrName)=>arrName.map((value,index)=>console.log({id:index+1, ...value}));
mapped(coursesAndDurationArray);

console.log(`--------------------`);

//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];
// - знайти піковий туз

let spadeAce=(arrName)=>console.log(arrName.find(element=>element.cardSuit==='spade' && element.value==='ace'));
spadeAce(cards);

console.log(`--------------------`);

// - всі шістки

let six=(arrName)=>console.log(arrName.filter(element=>element.value==='6'));
six(cards);

console.log(`--------------------`);

// - всі червоні карти

let red=(arrName)=>console.log(arrName.filter(element=>element.color==='red'));
red(cards);

console.log(`--------------------`);

// - всі буби

let diamond=(arrName)=>console.log(arrName.filter(element=>element.cardSuit==='diamond'));
diamond(cards);

console.log(`--------------------`);

// - всі трефи від 9 та більше

let all=(arrName)=>
    console.log(arrName.filter(element=>element.cardSuit==='clubs' && (element.value>='9' || element.value>=9)));
all(cards);

console.log(`--------------------`);

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let allCards=(arrName)=>arrName.reduce((acc,current)=>{
    switch (current.cardSuit) {
        case 'spade':
            acc.spades.push(current);
            break;
        case 'diamond':
            acc.diamond.push(current);
            break;
        case 'heart':
            acc.heart.push(current);
            break;
        case 'clubs':
            acc.clubs.push(current);
    }
    return acc;
},{spades:[], diamond:[], heart:[], clubs:[]});
console.log(allCards(cards));

console.log(`--------------------`);

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
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
// --написати пошук всіх об'єктів, в який в modules є sass

let sass=(arrName)=>console.log(arrName.filter(element=> element.modules.includes('sass')));
sass(coursesArray);

console.log(`--------------------`);

// --написати пошук всіх об'єктів, в який в modules є docker

let docker=(arrName)=>console.log(arrName.filter(element=>element.modules.includes('docker')));
docker(coursesArray);

console.log(`--------------------`);