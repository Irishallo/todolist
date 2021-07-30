import './style.css';
import domToDo from './domnewtodo';
import {allProjects, generalProject} from './projects';
import toDoFactory from './newtodo';

const contentDiv = document.getElementById('content');
const navBar = document.createElement('nav');
const toDoDiv = document.createElement('div');
const addToDoBtn = document.createElement('button');
addToDoBtn.innerText = '+';
addToDoBtn.setAttribute('id', 'addtodobtn');

navBar.appendChild(addToDoBtn);

contentDiv.appendChild(navBar);
contentDiv.appendChild(toDoDiv);
const formHere = false;
addToDoBtn.addEventListener('click', () => {
    let newToDoForm = document.getElementById('createtodo');
    if(!contentDiv.contains(newToDoForm)) {
        domToDo();
        formHere = true;
    } else {
        contentDiv.removeChild(newToDoForm);
        formHere = false;
    }
});

if(formHere == true) {
    console.log('form is here');
    const submitBtn = document.getElementById('submitin');
    const titleText = document.getElementById('titlein');
    const descriptionText = document.getElementById('descriptionin');
    const dueDateText = document.getElementById('duedatein');
    const priorityText = document.getElementById('priorityin');
    submitBtn.addEventListener('click' , () => {
        const todo1 = toDoFactory(titleText.innerText, descriptionText.innerText, dueDateText.innerText, priorityText.innerText);
        generalProject.push(todo1);
    })
}

console.log(generalProject);