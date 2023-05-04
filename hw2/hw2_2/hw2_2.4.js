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