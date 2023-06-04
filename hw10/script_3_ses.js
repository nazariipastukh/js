// Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію

const button=document.createElement('button');
document.body.appendChild(button);
button.innerText='Get time';

button.addEventListener('click',function(e){
    const showTime=document.createElement('div');
    showTime.innerText=localStorage.getItem('time');
    document.body.appendChild(showTime);
})




