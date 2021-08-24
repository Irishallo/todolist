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
    const projectsBanner = document.getElementById('projectscontainer');
    if(!contentDiv.contains(newToDoForm)) {
        domToDo();
        formHere = 'yes';
        submitToDo();

        if(projectsBanner == null) {
            console.log("no projecstfolder");
        } else {
            console.log("removing the projectsfolder");
            toDoDiv.removeChild(projectsBanner);
        }
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
        const projectChoice = document.getElementById('projectsin').value;

        allProjects.find(pushToDo);

        function pushToDo(_project, index) {
            if(allProjects[index].getTitle == projectChoice) {
                console.log("we have a match");
                console.log(allProjects[index].getArray);
                allProjects[index].getArray.push(toDoFactory(titleText.value, descriptionText.value, dueDateText.value, priorityText.value));
                console.log(allProjects);
            }
        };

        contentDiv.removeChild(document.getElementById('createtodo'));
        formHere = 'no';
        showToDos();
        } else { return}
    })
}

projectsBtn.addEventListener('click', () => {
    const projectFolder = document.getElementById('projectscontainer');
    const showToDoTable = document.getElementById('showtdtab');
    const formNewToDO = document.getElementById('createtodo');
    if(toDoDiv.contains(projectFolder)) {
        toDoDiv.removeChild(projectFolder);
        console.log("projects folder is there");
        if(!showToDoTable == null){
            showToDoTable.classList.add('showtodotable');
            showToDoTable.classList.remove('showtodotable2');
        }
    } else {
        showProjects();
        console.log("projectfolder is not there");
        console.log(formNewToDO);
        if(!showToDoTable == null){
            showToDoTable.classList.add('showtodotable2');
            showToDoTable.classList.remove('showtodotable');
        } else {
            console.log('no table');
        };

        if(formNewToDO == null) {
            console.log('form no');
            
        } else {
            console.log('yes form');
            contentDiv.removeChild(formNewToDO);
        };
        
    }
}
);



