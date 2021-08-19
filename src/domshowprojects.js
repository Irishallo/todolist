import { allProjects } from "./projects";

export const showProjects = () => {
  const projectsContainer = document.createElement('div');
  projectsContainer.setAttribute('id', 'projectscontainer');
  const DivToDo = document.getElementById('tododiv');
  const addNewProject = document.createElement('h2');
  addNewProject.setAttribute('id', 'addnewproject');
  addNewProject.innerText = '+ New Project';
  projectsContainer.appendChild(addNewProject);

  allProjects.forEach(getProjectName);
    function getProjectName(_project, index) {
      for (const property in allProjects[index]) {
        const projectOption = document.createElement('h2');
        projectOption.innerText = `${property}`;
        projectsContainer.appendChild(projectOption);
      }
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
        // window[newProjectTitle] = [];
        // const newProjectObject = {newProjectTitle: window[newProjectTitle] = []};
        
        // allProjects.push(newProjectObject);
      })
    })
}