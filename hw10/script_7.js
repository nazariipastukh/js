// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let form=document.getElementById('block');

form.addEventListener('submit',function(e){
    e.preventDefault();
    let table=document.createElement('table');
    for (let i=0;i<this.row.value;i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < this.number.value; j++) {
            let cell = document.createElement('td');
            cell.innerText = this.content.value;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
});