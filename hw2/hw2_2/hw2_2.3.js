// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day= +prompt('Введіть номер дня (1-31):');
if (day>=1 && day<11){
    alert('День у першій декаді');
}else if (day>=11 && day<21){
    alert('День у другій декаді');
}else if (day>=21 && day<=31){
    alert('День у третій декаді');
}else{
    alert('Введіть правильний номер дня (1-31)');
}