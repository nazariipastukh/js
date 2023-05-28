// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

class User{
    constructor(id,name,username,email,address,street,suite,city,zipcode,geo,lat,lng,phone,website,company,nameComp,catchPhrase,bs){
        this.id=id;
        this.name=name;
        this.username=username;
        this.email=email;
        this.address={
            street,suite,city,zipcode,
            geo:{
                lat,lng
            }
        }
        this.phone=phone;
        this.website=website;
        this.company={
            nameComp,catchPhrase,bs
        }
    }
}
console.log(new User(12345,'John Doe','johndoe123','johndoe123@example.com','1 Main Street',
    'Main Street', 'Apt 101','Anytown',12345,'40.7128° N, 74.0060° W',40.7128,
    -74.0060,123-456-7890,'www.johndoe123.com','OpenAI Inc.','OpenAI Inc.',
    "Transforming the future with AI",'Artificial Intelligence solutions'));

console.log('--------------------');

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

class Tag{
    constructor(titleOfArg,action,...attrs){
        this.titleOfArg=titleOfArg;
        this.action=action;
        this.attrs=attrs;
    }
}
class Attr{
    constructor(titleOfAttr,actionOfAttr){
        this.titleOfAttr=titleOfAttr;
        this.actionOfAttr=actionOfAttr;
    }
}
console.log(new Tag('div','Тег використовується, щоб групувати блоки інформації та форматувати її за допомогою CSS',
    new Attr('align','Визначає вирівнювання вмісту всередині елемента.'),
    new Attr('title','Вказує додаткову текстову підказку')));

console.log(new Tag('span','Являє собою універсальний порожній контейнер, який необхідно заповнити будь-яким вмістом',
    new Attr('translate','Повідомляє браузеру переводити вказаний текст в елементі чи ні.'),
    new Attr('contextmenu','Контекстне меню для елемента'),
    new Attr('accesskey','Дозволяє активувати або сфокусуватись на елементі за допомогою заданого сполучення клавіш.')));

// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }


