// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('Введіть значення змінної "x":', 0);
if (x!==0) {
    alert('Вірно');
}else {
    alert('Не вірно');
}

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

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let scheduleArray=[
    monday= ['Study', ' Work'],
    tuesday= ['Study', ' Work', ' Walk'],
    wednesday=['Running', ' Study'],
    thursday=['Work', ' Chill'],
    friday=['Work', ' Study'],
    saturday=['Study',' Walk',' Chill'],
    sunday=['Bike Ride', ' Walk', ' Running']
]
let dayOfWeek=+prompt('Enter the day number (1-7):');
switch (dayOfWeek){
    case 1:
        alert(scheduleArray[0]);
        break;
    case 2:
        alert(scheduleArray[1]);
        break;
    case 3:
        alert(scheduleArray[2]);
        break;
    case 4:
        alert(scheduleArray[3]);
        break;
    case 5:
        alert(scheduleArray[4]);
        break;
    case 6:
        alert(scheduleArray[5]);
        break;
    case 7:
        alert(scheduleArray[6]);
        break;
    default:
        alert('Enter the correct value (1-7)')
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let firstNum= +prompt('Enter first number:');
let secondNum= +prompt('Enter second number:');
if (firstNum>secondNum){
    alert(firstNum);
}else if (firstNum<secondNum){
    alert(secondNum);
}else if (firstNum===secondNum){
    alert('Numbers are equal');
}else{
    alert('Please, enter NUMBERS');
}