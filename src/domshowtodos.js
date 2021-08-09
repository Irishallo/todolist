import { generalProject } from "./projects";

export function showToDos () {
    const DivToDo = document.getElementById('tododiv');
    const tableToDo = document.createElement('table');
    for (let i = (generalProject.length - 1); i < generalProject.length; i++) {
        const tablerow = document.createElement('tr');
        const td1 = document.createElement('td');
        const checkToDo = document.createElement('input');
        checkToDo.setAttribute('type', 'checkbox');
        checkToDo.classList.add('checkmark');
        const td2 = document.createElement('td');
        const titleToDo = document.createElement('p');
        titleToDo.classList.add('todotitle');
        titleToDo.innerText = generalProject[i].getTitle;
        const td3 = document.createElement('td');
        const dueDateToDo = document.createElement('p');
        dueDateToDo.innerText = generalProject[i].getDueDate;
        const tableRow2 = document.createElement('tr');
        const td4 = document.createElement('td');
        const descriptionToDo = document.createElement('p');
        descriptionToDo.innerText = generalProject[i].getDescription;
        const emptyTd = document.createElement('td');

        if(generalProject[i].getPriority == 1) {
          tablerow.classList.add('priority1');
        } else if(generalProject[i].getPriority == 2) {
          tablerow.classList.add('priority2');
        } else if(generalProject[i].getPriority == 3) {
          tablerow.classList.add('priority3');
        } else if(generalProject[i].getPriority == 4) {
          tablerow.classList.add('priority4');
        } else if(generalProject[i].getPriority == 5) {
          tablerow.classList.add('priority5');
        } else {
          tablerow.classList.add('priority1');
        }
        
        td1.appendChild(checkToDo);
        td2.appendChild(titleToDo);
        td3.appendChild(dueDateToDo);
        td4.appendChild(descriptionToDo);
        tablerow.appendChild(td1);
        tablerow.appendChild(td2);
        tablerow.appendChild(td3);
        tableRow2.appendChild(emptyTd);
        tableRow2.appendChild(td4);
        tableToDo.appendChild(tablerow);
        tableToDo.appendChild(tableRow2);
      } 
      DivToDo.appendChild(tableToDo);
}