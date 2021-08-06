import { generalProject } from "./projects";

export function showToDos () {
    const DivToDo = document.getElementById('tododiv');
    const tableToDo = document.createElement('table');
    for (let i = 0; i < generalProject.length; i++) {
        const tablerow = document.createElement('tr');
        const td1 = document.createElement('td');
        const checkToDo = document.createElement('input');
        checkToDo.setAttribute('type', 'checkbox');
        checkToDo.classList.add('checkmark');
        const td2 = document.createElement('td');
        const titleToDo = document.createElement('p');
        titleToDo.classList.add('todotitle');
        titleToDo.innerText = generalProject[i].gettitle;
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        td1.appendChild(checkToDo);
        td2.appendChild(titleToDo);
        tablerow.appendChild(td1);
        tablerow.appendChild(td2);
        tableToDo.appendChild(tablerow);
      } 
      DivToDo.appendChild(tableToDo);
}