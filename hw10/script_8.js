// *** (подібне було вище, але...будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let block=document.createElement('div');
let time=localStorage.getItem('time');
let price=localStorage.getItem('price');
let newTime=Date.now();
localStorage.setItem('time',JSON.stringify(newTime));

if(!time){
    price=100;
}else{
    if(time && (newTime-time>=1000)){
        price=JSON.parse(price)+10;
    }
}

localStorage.setItem('price',price);
block.innerText=price;
document.body.appendChild(block);
