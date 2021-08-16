import './style.css';
import domToDo from './domnewtodo';
import {allProjects, generalProject} from './projects';
import toDoFactory from './newtodo';
import { showToDos } from './domshowtodos';
import { showProjects } from './domshowprojects';

console.log(allProjects);
let formHere = 'no';
const contentDiv = document.getElementById('content');
const navBar = document.createElement('nav');
const toDoDiv = document.createElement('div');
toDoDiv.setAttribute('id', 'tododiv');
const addToDoBtn = document.createElement('button');
addToDoBtn.innerText = '+';
addToDoBtn.setAttribute('id', 'addtodobtn');
const projectTitle = document.createElement('h1');
projectTitle.innerText = 'General Project';
projectTitle.setAttribute('id', 'projecttitle');
const projectsBtn = document.createElement('button');
projectsBtn.innerText = 'Projects';
projectsBtn.setAttribute('id', 'projectsbtn');

navBar.appendChild(addToDoBtn);
navBar.appendChild(projectTitle);
navBar.appendChild(projectsBtn);

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
        window['todo' + (generalProject.length + 1)] = toDoFactory(titleText.value, descriptionText.value, dueDateText.value, priorityText.value);
        console.log(window['todo' + (generalProject.length + 1)]);
        generalProject.push(window['todo' + (generalProject.length + 1)]);
        console.log(generalProject);
        contentDiv.removeChild(document.getElementById('createtodo'));
        formHere = 'no';
        showToDos();
        } else { return}
    })
}

projectsBtn.addEventListener('click', () => {
    const projectFolder = document.getElementById('projectscontainer');
    console.log(projectFolder);
    if(toDoDiv.contains(projectFolder)) {
        toDoDiv.removeChild(projectFolder);
        console.log("projects folder is there");
    } else {
        showProjects();
        console.log("projectfolder is not there");
    }
}
);



