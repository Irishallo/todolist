import './style.css';
import domToDo from './domnewtodo';

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
    const newToDoForm = document.getElementById('createtodo');
    if(!contentDiv.contains(newToDoForm)) {
        domToDo();
        console.log('form is here');
    } else {
        contentDiv.removeChild(newToDoForm);
        console.log('no form here');
    }
});

