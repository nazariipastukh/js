// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні
// на кнопку зникав елемент з id="text".

let show=document.createElement('button');
let hide=document.createElement('button');
let text=document.createElement('div');
text.setAttribute('id','text');
show.innerText='Show';
hide.innerText='Hide'
document.body.append(hide,show,text);

hide.addEventListener('click',function(){
    text.style.display='none';
});
show.addEventListener('click',function(){
    text.style.display='block';
});

