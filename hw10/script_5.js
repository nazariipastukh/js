// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні
// на кнопку зникав елемент з id="text".

let button=document.createElement('button');
let button1=document.createElement('button');
let div=document.createElement('div');
div.setAttribute('id','text');
document.body.append(button,button1,div);

button1.addEventListener('click',function(e){
    div.style.display='block';
});
button.addEventListener('click',function(e){
    div.style.display='none';
});

