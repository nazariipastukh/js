// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array = ['Nazarii', 'Stepanovych', 'Pastukh', 2002, 28, 11, 20, 8, true, false];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let firstBook = {
    title: 'Harry Potter',
    pageCount: 550,
    genre: 'fantasy'
}
let secondBook = {
    title: 'Forest Gump',
    pageCount: 240,
    genre: 'non-fiction'
}
let thirdBook = {
    title: 'All Quiet on the Western Front',
    pageCount: 990,
    genre: 'novel'
}
console.log(firstBook, secondBook, thirdBook)

// ------------------in array----------------------//

// let books =[
//     {title: 'Harry Potter',
//     pageCount: 550,
//     genre: 'fantasy'
//     },
//     {title: 'Forest Gump',
//     pageCount: 240,
//     genre: 'non-fiction'
//     },
//     {title: 'All Quiet on the Western Front',
//     pageCount: 990,
//     genre: 'novel'
//     }
// ]
// console.log(books)

// ------------------------------------------------//

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let firstBook1 = {
    title: 'Harry Potter',
    pageCount: 550,
    genre: 'fantasy',
    authors : [name='J. K. Rowling', age=57]
}
let secondBook1 = {
    title: 'Forest Gump',
    pageCount: 240,
    genre: 'non-fiction',
    authors : [name='Winston Groom', age=77]
}
let thirdBook1 = {
    title: 'All Quiet on the Western Front',
    pageCount: 990,
    genre: 'novel',
    authors : [name='Erich Paul Remark', age='1998-1970(72)']
}
console.log(firstBook1, secondBook1, thirdBook1);

// ------------------in array----------------------//

// let books1=[
//     {title: 'Harry Potter',
//      pageCount: 550,
//      genre: 'fantasy',
//      authors : [name='J. K. Rowling', age=57]
//     },
//     {title: 'Forest Gump',
//      pageCount: 240,
//      genre: 'non-fiction',
//      authors : [name='Winston Groom', age=77]
//     },
//     {title: 'All Quiet on the Western Front',
//      pageCount: 990,
//      genre: 'novel',
//      authors : [name='Erich Paul Remark', age='1998-1970(72)']
//     }
// ]
// console.log(books1);

// ------------------------------------------------//

// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users=[
    {name:'Ivan',
    userName: 'userName1',
    password: 'password1'
    },
    {name:'Oleg',
    userName: 'userName2',
    password: 'password2'
    },
    {name:'Petro',
    userName: 'userName3',
    password: 'password3'
    },
    {name:'Ivanka',
    userName: 'userName4',
    password: 'password4'
    },
    {name:'Katya',
    userName: 'userName5',
    password: 'password5'
    },
    {name:'Sasha',
    userName: 'userName6',
    password: 'password6'
    },
    {name:'Vika',
    userName: 'userName7',
    password: 'password7'
    },
    {name:'Nazar',
    userName: 'userName8',
    password: 'password8'
    },
    {name:'Vlad',
    userName: 'userName9',
    password: 'password9'
    },
    {name:'Serhii',
    userName: 'userName10',
    password: 'password10'
    }
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
