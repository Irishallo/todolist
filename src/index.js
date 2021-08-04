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
        const titleText = document.getElementById('titlein');
        const descriptionText = document.getElementById('descriptionin');
        const dueDateText = document.getElementById('datein');
        const priorityText = document.getElementById('priorityin');
        console.log(toDoFactory);
        window['todo' + (generalProject.length + 1)] = toDoFactory(titleText.value, descriptionText.value, dueDateText.value, priorityText.value);
        // eval('const todo' + (generalProject.length + 1) + '=' + toDoFactory(titleText.value, descriptionText.value, dueDateText.value, priorityText.value) + ';')
        // const `todo${generalProject.length+ 1}` = toDoFactory(titleText.value, descriptionText.value, dueDateText.value, priorityText.value);
        console.log((`todo` + (generalProject.length + 1)));
        generalProject.push((`todo` + (generalProject.length + 1)));
        console.log(generalProject);
        } else { return}
    })
}



