// створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form=document.createElement('form');
let label=document.createElement('label');
let input=document.createElement('input');
let button=document.createElement('button');

label.innerText='Age:';
input.type='number';
input.name='age';
button.innerText='Check';

document.body.appendChild(form);
form.append(label,input,button);

form.addEventListener('submit',function (e){
    e.preventDefault();
    if (this.age.value<18){
        return 'Age is less than 18';
    }else{
        return 'Submitted';
    }
});
