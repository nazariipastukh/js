// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arr1=[1,2,3,4,5,'a','b','c','d','e',false,true];
console.log(arr1);

console.log(`--------------------`);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

const newArr=[];
for (let i=0;i<10;i++) {
    newArr[i] = 'hello';
}
console.log(newArr);

console.log(`--------------------`);
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while

let arr=[2,17,13,6,22,31,45,66,100,-18];
let i =0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}

console.log('-----------------');
// 2. перебрати його циклом for

for (number of arr){
    console.log(number);
}
console.log('-----------------');

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

i=0;
while(i<arr.length){
    if (i%2!==0){
        console.log(arr[i]);
    }
    i++;
}
console.log('-----------------');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (i=0; i<arr.length; i++){
    if (i%2!==0){
        console.log(arr[i]);
    }
}
console.log('-----------------');

// 5. перебрати циклом while та вивести  числа тільки парні  значення

i=0;
while(i<arr.length){
    if (arr[i]%2===0){
       console.log(arr[i]);
    }
    i++;
}
console.log('-----------------');

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (i=0;i<arr.length; i++){
    if (arr[i]%2===0){
        console.log(arr[i]);
    }
}
console.log('-----------------');

// 7. замінити кожне число кратне 3 на слово "okten"

let arrNew=[];
for (i=0; i<arr.length; i++){
    if(arr[i]%3===0){
        arrNew[i]='okten';
    }else {
        arrNew[i]=arr[i];
    }
    console.log(arrNew[i]);
}
console.log('----------------');

// 8. вивести масив в зворотньому порядку.

for (i=arr.length-1; i>=0; i--){
    console.log(arr[i]);
}
console.log('----------------');

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while

i =arr.length-1;
while(i>=0){
    console.log(arr[i]);
    i--;
}

console.log('-----------------');
// 2. перебрати його циклом for

for (i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
}
console.log('-----------------');

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

i=arr.length-1;
while(i>=0){
    if (i%2!==0){
        console.log(arr[i]);
    }
    i--;
}
console.log('-----------------');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (i=arr.length-1; i>=0; i--){
    if (i%2!==0){
        console.log(arr[i]);
    }
}
console.log('-----------------');

// 5. перебрати циклом while та вивести  числа тільки парні  значення

i=arr.length-1;
while(i>=0){
    if (arr[i]%2===0){
        console.log(arr[i]);
    }
    i--;
}
console.log('-----------------');

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (i=arr.length-1;i>=0; i--){
    if (arr[i]%2===0){
        console.log(arr[i]);
    }
}
console.log('-----------------');

// 7. замінити кожне число кратне 3 на слово "okten"

arrNew=[];
for (i=arr.length-1; i>=0; i--){
    if(arr[i]%3===0){
        arrNew[i]='okten';
    }else {
        arrNew[i]=arr[i];
    }
    console.log(arrNew[i]);
}
console.log('-----------------');

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

const numArr=[11,13,15,16,23,34,45,34,12234,3];

for (number of numArr){
    console.log(number);
}
console.log('-----------------');

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

const strArr=["Hello","Good","Yes","No","Maybe","Please","Thank","Sorry","Excuse me","Great"];

for (let element of strArr){
    console.log(element);
}
console.log('-----------------');

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

const array=["Hello",42,true,{ name: "John", age: 30 }, [1, 2, 3],
    null,undefined, function() {console.log("This is a function");},2313143,34234];

for (let element of array){
    console.log(element);
}
console.log('-----------------');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arrayOfElements=[42, "Hello, world!", true, 3.14, "JavaScript", false, 0, true, 2.5, "OpenAI"];

for (let element of arrayOfElements){
    if (typeof(element)==='boolean'){
        console.log(element);
    }
}
console.log('-----------------');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

arrayOfElements=[42, "Hello, world!", true, 3.14, "JavaScript", false, 0, true, 2.5, "OpenAI"];

for (let element of arrayOfElements){
    if (typeof(element)==='number'){
        console.log(element);
    }
}
console.log('-----------------');

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

arrayOfElements=[42, "Hello, world!", true, 3.14, "JavaScript", false, 0, true, 2.5, "OpenAI"];

for (let element of arrayOfElements){
    if (typeof(element)==='string'){
        console.log(element);
    }
}
console.log('-----------------');

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

let emptyArr=[];

for (i=0;i<10;i++){
    if (i%3===0){
        emptyArr[i]=31231;
    }else if (i%2===0){
        emptyArr[i]='Hello';
    }else
        emptyArr[i]=true;
}
for (let element of emptyArr){
    console.log(element);
}
console.log('-----------------');

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (i=0;i<10;i++){
    console.log(i);
    document.write(`<p>${i}</p>`);
}
document.write(`<hr>`);
console.log('-----------------');

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (i=0;i<100;i++){
    console.log(i);
    document.write(`<p>${i}</p>`);
}
document.write(`<hr>`);
console.log('-----------------');

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (i=0; i<200;i+=2){
    console.log(i);
    document.write(`<p>${i}</p>`);
}
document.write(`<hr>`);
console.log('-----------------');

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (i=0; i<100; i++){
    if (i%2===0){
        console.log(i);
        document.write(`<p>${i}</p>`);
    }
}
document.write(`<hr>`)
console.log('-----------------');

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (i=0;i<100;i++){
    if (i%2!==0){
        console.log(i);
        document.write(`<p>${i}</p>`);
    }
}
document.write(`<hr>`);
console.log('-----------------');

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

const books = [
    {
        title: "Book 1",
        pageCount: 200,
        authors: ["Author 1", "Author 2"],
        genres: ["Genre 1", "Genre 2"]
    },
    {
        title: "Book 2",
        pageCount: 350,
        authors: ["Author 3"],
        genres: ["Genre 1", "Genre 3"]
    },
    {
        title: "Book 3",
        pageCount: 150,
        authors: ["Author 4", "Author 5"],
        genres: ["Genre 2"]
    },
];

// -знайти наібльшу книжку.
let temp=0;
let title;
for (let book of books){
        if (book.pageCount>temp){
            temp=book.pageCount;
            title=book.title;
        }
}
console.log(temp,title)
console.log('-----------------');

// - знайти книжку/ки з найбільшою кількістю жанрів
temp=0;
let title1=[];
for (let book of books){
    if (book.genres.length>temp){
        temp=book.genres.length;
        title1=[book.title];
    }else if(temp===book.genres.length){
        title1[title.length]=book.title;
    }
}
for (i=0;i<title1.length;i++){
    console.log(title1[i])
}
console.log('-----------------');

// - знайти книжку/ки з найдовшою назвою



// - знайти книжку/ки які писали 2 автори



// - знайти книжку/ки які писав 1 автор


