import { allProjects} from "./projects";
import { toDoFactory } from "./newtodo";
import { showToDos } from "./domshowtodos";
import { currentProject, toDoDiv } from ".";

const contentDiv = document.getElementById('content');
let formHere = 'no';

// create todo form
const domToDo = () => {
    const toDoForm = document.createElement('form');
    toDoForm.setAttribute('id', 'createtodo');
    const toDoTable = document.createElement('table');
    const titleRow = document.createElement('tr');
    const titleTd1 = document.createElement('td');
    const titleTd2 = document.createElement('td');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'titlein');
    titleLabel.innerText = 'Title';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'titlein');
    titleInput.setAttribute('name', 'titlein');
    titleInput.setAttribute('type', 'text');
    const descriptionRow = document.createElement('tr');
    const descriptionTd1 = document.createElement('td');
    const descriptionTd2 = document.createElement('td');
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'descriptionin');
    descriptionLabel.innerText = 'Description';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('id', 'descriptionin');
    descriptionInput.setAttribute('name', 'descriptionin');
    const dateRow = document.createElement('tr');
    const dateTd1 = document.createElement('td');
    const dateTd2 = document.createElement('td');
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'datein');
    dateLabel.innerText = 'Due Date';
    const dateInput = document.createElement('input');
    dateInput.setAttribute('id', 'datein');
    dateInput.setAttribute('type', 'date');
    const priorityRow = document.createElement('tr');
    const priorityTd1 = document.createElement('td');
    const priorityTd2 = document.createElement('td');
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priorityin');
    priorityLabel.innerText = 'Priority';
    const priorityInput = document.createElement('input');
    priorityInput.setAttribute('id', 'priorityin');
    priorityInput.setAttribute('type', 'number');
    priorityInput.setAttribute('min', '1');
    priorityInput.setAttribute('max', '5');
    priorityInput.setAttribute('value', '1');
    const projectsInput = document.createElement('select');
    projectsInput.setAttribute('id', 'projectsin');
    allProjects.forEach(getProjectName);
    function getProjectName(_project, index) {
      const selectOption = document.createElement('option');
      selectOption.setAttribute('value', `${allProjects[index].getTitle}`);
      selectOption.innerText = `${allProjects[index].getTitle}`;
      projectsInput.appendChild(selectOption);
    }
    
    const submitInput = document.createElement('input');
    submitInput.setAttribute('id', 'submitin');
    submitInput.setAttribute('type', 'button');
    submitInput.setAttribute('value', 'submit');
    
    titleTd1.appendChild(titleLabel);
    titleTd2.appendChild(titleInput);
    titleRow.appendChild(titleTd1);
    titleRow.appendChild(titleTd2);
    descriptionTd1.appendChild(descriptionLabel);
    descriptionTd2.appendChild(descriptionInput);
    descriptionRow.appendChild(descriptionTd1);
    descriptionRow.appendChild(descriptionTd2);
    dateTd1.appendChild(dateLabel);
    dateTd2.appendChild(dateInput);
    dateRow.appendChild(dateTd1);
    dateRow.appendChild(dateTd2);
    priorityTd1.appendChild(priorityLabel);
    priorityTd2.appendChild(priorityInput);
    priorityRow.appendChild(priorityTd1);
    priorityRow.appendChild(priorityTd2);

    toDoTable.appendChild(titleRow);
    toDoTable.appendChild(descriptionRow);
    toDoTable.appendChild(dateRow);
    toDoTable.appendChild(priorityRow);
    toDoForm.appendChild(toDoTable);
    toDoForm.appendChild(projectsInput);
    toDoForm.appendChild(submitInput);
    contentDiv.appendChild(toDoForm);
}

// when to do button is clicked
export const toDoEvent = () => {
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
          projectsBanner.innerHTML = "";
          toDoDiv.removeChild(projectsBanner);
      }
  } else {
      contentDiv.removeChild(newToDoForm);
      formHere = 'no';
  }
}

// submit the new todo
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
              console.log(allProjects[index].TheArray);
              allProjects[index].TheArray.push(toDoFactory(titleText.value, descriptionText.value, dueDateText.value, priorityText.value));
              console.log(allProjects);
          }
      };

      contentDiv.removeChild(document.getElementById('createtodo'));
      formHere = 'no';
      showToDos(currentProject);
      } else { return}
  })
}

export default domToDo;