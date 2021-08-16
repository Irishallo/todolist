import { allProjects } from "./projects";

export const showProjects = () => {
  const projectsContainer = document.createElement('div');
  projectsContainer.setAttribute('id', 'projectscontainer');
  const DivToDo = document.getElementById('tododiv');
  const addNewProject = document.createElement('h2');
  addNewProject.setAttribute('id', 'addnewproject');
  addNewProject.innerText = '+ New Project';
  projectsContainer.appendChild(addNewProject);

  for (const property in allProjects) {
      const projectOption = document.createElement('h2');
      projectOption.innerText = `${property}`;
      projectsContainer.appendChild(projectOption);
    }

    DivToDo.appendChild(projectsContainer);
}