// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x = false ;
if (x===NaN || x===undefined || x===false || x===null || x===0 || x===""){
    x = 'default';
}
console.log(x);