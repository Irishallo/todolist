import { contentDiv, currentProject, projectTitle, toDoDiv } from ".";
import { showToDos } from "./domshowtodos";
import { allProjects, projectFactory } from "./projects";

// general variables
const projectsContainer = document.createElement('div');
projectsContainer.setAttribute('id', 'projectscontainer');

// showing the projects in the project folder + adding new projects
export const showProjects = () => {
  const DivToDo = document.getElementById('tododiv');
  const addNewProject = document.createElement('h2');
  addNewProject.setAttribute('id', 'addnewproject');
  addNewProject.innerText = '+ New Project';
  projectsContainer.appendChild(addNewProject);

  allProjects.forEach(getProjectName);
    function getProjectName(_project, index) {
      const projectOption = document.createElement('h2');
      projectOption.innerText = `${allProjects[index].getTitle}`;
      projectsContainer.appendChild(projectOption);
      projectOption.addEventListener('click', () => {
        const toDoTable = document.getElementById("showtdtab");
        let projectArray = allProjects[index].TheArray;
        if(toDoTable == null) {
          console.log('geen tabel');
        } else {
          DivToDo.removeChild(toDoTable);
          console.log('tabel weghalen');
        }
        showToDos(projectArray);
        projectTitle.innerText = `${allProjects[index].getTitle}`;
      })
    }

    DivToDo.appendChild(projectsContainer);

    addNewProject.addEventListener('click', () => {
      const inputNewProject = document.createElement('input');
      inputNewProject.setAttribute('type', 'text');
      inputNewProject.setAttribute('value', 'new project');
      inputNewProject.setAttribute('id', 'newprojectinput');
      projectsContainer.appendChild(inputNewProject);
      const btnNewProject = document.createElement('button');
      btnNewProject.setAttribute('id', 'newprojectbtn');
      btnNewProject.innerText = 'Go';
      projectsContainer.appendChild(btnNewProject);

      inputNewProject.addEventListener("keyup", function(event) {
        if (event.code === 'Enter') {
         event.preventDefault();
         btnNewProject.click();
        }
      });

      btnNewProject.addEventListener('click', () => {
        const newProjectTitle = inputNewProject.value;
        const newProjectTxt = document.createElement('h2');
        newProjectTxt.innerText = newProjectTitle;
        projectsContainer.appendChild(newProjectTxt);
        projectsContainer.removeChild(inputNewProject);
        projectsContainer.removeChild(btnNewProject);
        window[newProjectTitle] = [];
        
        allProjects.push(projectFactory(newProjectTitle, window[newProjectTitle] = []));

        newProjectTxt.addEventListener('click', () => {
          const toDoTable = document.getElementById("showtdtab");
          let projectArray = allProjects[allProjects.length - 1].TheArray;
          if(toDoTable == null) {
            console.log('geen tabel');
          } else {
            DivToDo.removeChild(toDoTable);
            console.log('tabel weghalen');
          }
          showToDos(projectArray);
          projectTitle.innerText = `${allProjects[allProjects.length - 1].getTitle}`;
        })
      })
    })
}

// clicking the projects button
export const projectEvent = () => {
  const showToDoTable = document.getElementById('showtdtab');
  const formNewToDO = document.getElementById('createtodo');
  if(toDoDiv.contains(projectsContainer)) {
    projectsContainer.innerHTML = "";
      toDoDiv.removeChild(projectsContainer);
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