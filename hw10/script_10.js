// *** (подібне було вище, але...будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let block=document.createElement('div');

let content=localStorage.getItem('time');
price=localStorage.getItem('price');
let timeNow=JSON.stringify(Date.now());
localStorage.setItem('time',timeNow);

if (!price){
    price = 100;
}
if(content &&(timeNow-content>=1000)){
    price=JSON.parse(price)+10;
}

localStorage.setItem('price',price);
block.innerText=JSON.stringify(price);
document.body.appendChild(block);

