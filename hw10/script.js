// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим
// об'єктом

let form = document.getElementById("firstForm");
let wrap = document.getElementById('wrap');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let nameValue = document.getElementsByName('name')[0].value;
    let surnameValue = document.getElementsByName('surname')[0].value;
    let ageValue = document.getElementsByName('age')[0].value;

    let object = {
        name: nameValue,
        surname: surnameValue,
        age: ageValue
    }

    let result = document.createElement('div');
    result.innerText = JSON.stringify(object);
    wrap.appendChild(result);
});

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1

document.addEventListener('DOMContentLoaded', function (e){
    let block = document.createElement('div');
    block.classList.add('block');
    let value=localStorage.getItem('number');

    if (value){
        let newValue=+value+1;
        block.innerText=newValue.toString();
        localStorage.setItem('number',newValue.toString());
    }else{
        block.innerText='1'
        localStorage.setItem('number','1');
    }
    document.body.appendChild(block);
})

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію



// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні
// на кнопку зникав елемент з id="text".



// *** (подібне було вище, але...будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

