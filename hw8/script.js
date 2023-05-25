// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id,name,surname,email,phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}
let users=[];

users.push(new User(2, "Jane", "Smith", "jane.smith@example.com", "0987654321"));
users.push(new User(3, "David", "Johnson", "david.johnson@example.com", "9876543210"));
users.push(new User(4, "Sarah", "Williams", "sarah.williams@example.com", "4567890123"));
users.push(new User(5, "Michael", "Brown", "michael.brown@example.com", "7890123456"));
users.push(new User(6, "Emily", "Taylor", "emily.taylor@example.com", "3216549870"));
users.push(new User(1, "John", "Doe", "john.doe@example.com", "1234567890"));
users.push(new User(7, "Christopher", "Davis", "christopher.davis@example.com", "6549870123"));
users.push(new User(8, "Olivia", "Martinez", "olivia.martinez@example.com", "0123456789"));
users.push(new User(10, "Sophia", "Thomas", "sophia.thomas@example.com", "0123456789"));
users.push(new User(9, "Daniel", "Anderson", "daniel.anderson@example.com", "9876543210"));
console.log(users);

console.log('--------------------');

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredId=(arrName)=>console.log(arrName.filter(element=>element.id%2===0));
filteredId(users);

console.log('--------------------');

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortId=(arrName)=>console.log(arrName.sort((a,b)=>a.id-b.id));
sortId([...users]);

console.log('--------------------');

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client{
    constructor(id,name,surname,email,phone,order){
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order=order;
    }
}
let clients=[];

clients.push(new Client(2, "Jane", "Smith", "jane.smith@example.com", "0987654321",['apple','toy']));
clients.push(new Client(3, "David", "Johnson", "david.johnson@example.com", "9876543210",['apple','sweets']));
clients.push(new Client(4, "Sarah", "Williams", "sarah.williams@example.com", "4567890123",['nuts','toy']));
clients.push(new Client(5, "Michael", "Brown", "michael.brown@example.com", "7890123456",['apple','toy','nuts']));
clients.push(new Client(6, "Emily", "Taylor", "emily.taylor@example.com", "3216549870",['cherries','pen','tea']));
clients.push(new Client(1, "John", "Doe", "john.doe@example.com", "1234567890",['apple']));
clients.push(new Client(7, "Christopher", "Davis", "christopher.davis@example.com", "6549870123",['pen','pencil','book','milk']));
clients.push(new Client(8, "Olivia", "Martinez", "olivia.martinez@example.com", "0123456789",['milk']));
clients.push(new Client(10, "Sophia", "Thomas", "sophia.thomas@example.com", "0123456789",['milk','bananas']));
clients.push(new Client(9, "Daniel", "Anderson", "daniel.anderson@example.com", "9876543210",['cereals','cherries']));
console.log(clients);

console.log('--------------------');

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortedClients=(arrName)=>console.log(arrName.sort((a,b)=>a.order.length-b.order.length));
sortedClients([...clients]);

console.log('--------------------');

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна.

function Cars(model,country,year,maxSpeed,engine){
    this.model=model;
    this.country=country;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.engine=engine;
    // додати в об'єкт функції:
    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive=function(){
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}`);
    }
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info=function(){
        console.log
        (`model - ${this.model}, country - ${this.country}, year - ${this.year}, max speed - ${this.maxSpeed}, engine - ${this.engine}`);
    }
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed=function(newSpeed){
        console.log(`new max speed- ${this.maxSpeed+newSpeed}`);
    }
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear=function(newValue){
        console.log(`Year - ${this.year=newValue}`);
    }
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver=function(name,age){
        this.name=name;
        this.age=age;
        console.log(`Driver: ${this.name} ${this.age}`);
    }
}
let car= new Cars('Audi','Germany',2010,250,2.7);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(30);
car.changeYear(2015);
car.addDriver('John',20);

console.log('--------------------');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



console.log('--------------------');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку



console.log('--------------------');