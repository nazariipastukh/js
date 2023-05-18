// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

function length(...args){
    array=[];
    args.forEach(element=>array.push(element.length));
    return console.log(array);
}
length('hello world','lorem ipsum','javascript is cool');
console.log(`--------------------`);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

function toUpper(...args){
    array=[];
    args.forEach(element=>array.push(element.toUpperCase()));
    return console.log(array);
}
toUpper('hello world', 'lorem ipsum', 'javascript is cool');
console.log(`--------------------`);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

function toLower(...args){
    array=[];
    args.forEach(element=>array.push(element.toLowerCase()));
    return console.log(array);
}
toLower('HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL');
console.log(`--------------------`);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());
console.log(`--------------------`);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str1 = 'Ревуть воли як ясла повні';
let str1Split=str1.split(' ');
console.log(str1Split);
console.log(`--------------------`);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let array1=[10,8,-7,55,987,-1011,0,1050,0];
let newArr=array1.map(value=>{
    return value.toString();
})
console.log(newArr);
console.log(`--------------------`);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums=[11,3,21];
let sortNums=(nameOfArr,direction)=>{
    if (direction==='ascending'){
        return nums.sort((a,b)=>a-b);
    }else if (direction==='descending'){
        return nums.sort((a,b)=>b-a);
    }
}
console.log(sortNums(nums,'descending'));
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

let sortMonth=nameArr => nameArr.sort((a,b) => b.monthDuration - a.monthDuration);
console.log(sortMonth(coursesAndDurationArray));
console.log(`--------------------`);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filterDuration=nameArr=>nameArr.filter(value=>value.monthDuration>5);
console.log(filterDuration(coursesAndDurationArray));
console.log(`--------------------`);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let newCourses=(arrName)=>arrName.map((value,index)=>{
    return {id:index+1, title:value.title, monthDuration:value.monthDuration};
})
console.log(newCourses(coursesAndDurationArray));
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

let findSpade=(arrName)=>arrName.filter(element=>element.cardSuit==='spade' && element.value==='ace');
console.log(findSpade(cards));
console.log(`--------------------`);
// - всі шістки

let findSix=(arrName)=>arrName.filter(element=>element.value==='6');
console.log(findSix(cards));
console.log(`--------------------`);

// - всі червоні карти

let findRed=(arrName)=>arrName.filter(element=>element.color==='red');
console.log(findRed(cards));
console.log(`--------------------`);

// - всі буби

let findDiamonds=(arrName)=>arrName.filter(element=>element.cardSuit==='diamond');
console.log(findDiamonds(cards));
console.log(`--------------------`);

// - всі трефи від 9 та більше

let findClubs=(arrName)=>arrName.filter(element=>
    element.cardSuit==='clubs' && (element.value>=9 || element.value>='9'));
console.log(findClubs(cards));
console.log(`--------------------`);

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let sort=(arrName)=>arrName.reduce((acc,element)=>{
    switch (element.cardSuit){
        case 'spade':
            acc.spades.push(element);
            break;
        case 'diamond':
            acc.diamonds.push(element);
            break;
        case 'heart':
            acc.hearts.push(element);
            break;
        case 'clubs':
            acc.clubs.push(element);
            break;
    }
    return acc;
},{spades:[],diamonds:[],hearts:[],clubs:[]});
console.log(sort(cards));
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

let findSass=(arrName)=>arrName.filter(element =>element.modules.includes('sass'));
console.log(findSass(coursesArray));
console.log(`--------------------`);

// --написати пошук всіх об'єктів, в який в modules є docker

let findDocker=(arrName)=>arrName.filter(element=>element.modules.includes('docker'));
console.log(findDocker(coursesArray));
console.log(`--------------------`);