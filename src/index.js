import './style.css';
import domToDo from './domnewtodo';

const contentDiv = document.getElementById('content');

const navBar = document.createElement('nav');

const toDoDiv = document.createElement('div');

contentDiv.appendChild(navBar);

contentDiv.appendChild(toDoDiv);

domToDo();
