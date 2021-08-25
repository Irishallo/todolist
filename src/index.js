import './style.css';
import { toDoEvent } from './domnewtodo';
import { projectEvent} from './domshowprojects';

// general layout and variables

export const contentDiv = document.getElementById('content');

const navBar = document.createElement('nav');

export const toDoDiv = document.createElement('div');
toDoDiv.setAttribute('id', 'tododiv');

const addToDoBtn = document.createElement('button');
addToDoBtn.innerText = '+';
addToDoBtn.setAttribute('id', 'addtodobtn');

export const projectTitle = document.createElement('h1');
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

// eventlisteners

//add to do +

addToDoBtn.addEventListener('click', toDoEvent);

// show projects list

projectsBtn.addEventListener('click', projectEvent);



