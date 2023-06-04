// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим
// об'єктом

const form=document.getElementById('firstForm');
const wrap=document.getElementById('wrap');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const name=document.getElementById('name').value;
    const surname=document.getElementById('surname').value;
    const age=document.getElementById('age').value;

    const object={
        name:name,
        surname:surname,
        age:age
    }

    const result=document.createElement('div');
    result.innerText=JSON.stringify(object);
    document.body.appendChild(result);
});

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1

let number=localStorage.getItem('number');

if (!number){
    localStorage.setItem('number',JSON.stringify(0));
}else{
    let number1=JSON.parse(localStorage.getItem('number'));
    localStorage.setItem('number',JSON.stringify(number1+1));
}

let numberResult=document.createElement('div');
numberResult.innerText=localStorage.getItem('number');
document.body.appendChild(numberResult);