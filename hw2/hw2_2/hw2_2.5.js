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