// створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let input=document.createElement('input');
input.type='number';
input.placeholder='Enter your age';
let button=document.createElement('button');
document.body.append(input,button);
button.style.height='15px';
button.style.width='30px';

button.addEventListener('click',function(){
    if(input.value>=18){
        alert('Welcome!');
    }else{
        alert('Bye!');
    }
});
