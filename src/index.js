import './style.css';
import domToDo from './domnewtodo';
import {allProjects, generalProject} from './projects';
import toDoFactory from './newtodo';

let formHere = 'no';
const contentDiv = document.getElementById('content');
const navBar = document.createElement('nav');
const toDoDiv = document.createElement('div');
const addToDoBtn = document.createElement('button');
addToDoBtn.innerText = '+';
addToDoBtn.setAttribute('id', 'addtodobtn');

navBar.appendChild(addToDoBtn);

contentDiv.appendChild(navBar);
contentDiv.appendChild(toDoDiv);

addToDoBtn.addEventListener('click', () => {
    let newToDoForm = document.getElementById('createtodo');
    if(!contentDiv.contains(newToDoForm)) {
        domToDo();
        formHere = 'yes';
        submitToDo();
    } else {
        contentDiv.removeChild(newToDoForm);
        formHere = 'no';
    }
});

function submitToDo() {
    const submitBtn = document.getElementById('submitin');

    submitBtn.addEventListener('click' , () => {
        if(formHere == 'yes') {
        console.log('form is here');
        const titleText = document.getElementById('titlein');
        const descriptionText = document.getElementById('descriptionin');
        const dueDateText = document.getElementById('duedatein');
        const priorityText = document.getElementById('priorityin');
        const todo1 = toDoFactory(titleText.innerText, descriptionText.innerText, dueDateText.innerText, priorityText.innerText);
        generalProject.push(todo1);
        console.log(generalProject);
        }
    })
}



