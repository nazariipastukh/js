// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Введіть значення у хвилинах (0-59):');
if (time>=0 && time<=14){
    alert('Перша чверть години');
}else if(time>14 && time<=29){
    alert('Друга чверть години');
}else if(time>29 && time<=44){
    alert('Третя чверть години');
}else if(time>44 && time<=59){
    alert('Четверта чверть години');
}else{
    alert('Введіть правильне значення у хвилинах');
}