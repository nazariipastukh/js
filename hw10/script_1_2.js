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