let button=document.createElement('button')
document.body.appendChild(button);
button.innerText='time';
button.addEventListener('click',function(e){
    let dat=document.createElement('div');
    dat.innerText=localStorage.getItem('session');
    document.body.appendChild(dat);
});
