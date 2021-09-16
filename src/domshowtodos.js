import { tableToDo } from ".";

// shows all to do items in a project
export function showToDos (project) {
    //const tableToDo = document.getElementById('showtdtab');

    for (let i = 0; i < project.length; i++) {
        const tableRow = document.createElement('tr');
        const td1 = document.createElement('td');
        const checkToDo = document.createElement('input');
        checkToDo.setAttribute('type', 'checkbox');
        checkToDo.classList.add('checkmark');
        const td2 = document.createElement('td');
        const titleToDo = document.createElement('p');
        titleToDo.classList.add('todotitle');
        titleToDo.innerText = project[i].getTitle;
        const td3 = document.createElement('td');
        const dueDateToDo = document.createElement('p');
        dueDateToDo.innerText = project[i].getDueDate;
        const td5 = document.createElement('td');
        const collapseBtn = document.createElement('button');
        collapseBtn.classList.add('collapsible');
        const tableRow2 = document.createElement('tr');
        tableRow2.classList.add('descriptionrow');
        const td4 = document.createElement('td');
        td4.setAttribute('colspan', '3');
        const descriptionToDo = document.createElement('p');
        descriptionToDo.innerText = project[i].getDescription;
        const emptyTd = document.createElement('td');

        if(project[i].getPriority == 1) {
          tableRow.classList.add('priority1');
          tableRow2.classList.add('priority1');
        } else if(project[i].getPriority == 2) {
          tableRow.classList.add('priority2');
          tableRow2.classList.add('priority2');
        } else if(project[i].getPriority == 3) {
          tableRow.classList.add('priority3');
          tableRow2.classList.add('priority3');
        } else if(project[i].getPriority == 4) {
          tableRow.classList.add('priority4');
          tableRow2.classList.add('priority4');
        } else if(project[i].getPriority == 5) {
          tableRow.classList.add('priority5');
          tableRow2.classList.add('priority5');
        } else {
          tableRow.classList.add('priority1');
          tableRow2.classList.add('priority1');
        }
        
        td1.appendChild(checkToDo);
        td2.appendChild(titleToDo);
        td3.appendChild(dueDateToDo);
        td4.appendChild(descriptionToDo);
        td5.appendChild(collapseBtn);
        tableRow.appendChild(td1);
        tableRow.appendChild(td2);
        tableRow.appendChild(td3);
        tableRow.appendChild(td5);
        tableRow2.appendChild(emptyTd);
        tableRow2.appendChild(td4);
        tableToDo.appendChild(tableRow);
        tableToDo.appendChild(tableRow2);

    } 
      
      let coll = document.getElementsByClassName("collapsible");
      let i;
      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          let content = this.parentNode.parentNode.nextElementSibling;
          if (content.classList.contains("descriptionrowopen") ) {
            content.classList.add("descriptionrow");
            content.classList.remove("descriptionrowopen");
          } else {
            content.classList.add("descriptionrowopen");
            content.classList.remove("descriptionrow");
          }
        });
      }
}

// adds to do to current open to do
export function addToDoToList (project) {
  const tableToDo = document.getElementById('showtdtab');
  const todoTitles = document.getElementsByClassName('todotitle');
  const tableTitlesArray = [];
  if(tableToDo.length > 0) {
    for (let i = 0; i < todoTitles.length; i++) {
      tableTitlesArray.push(todoTitles[i].innerHTML);
    }
    console.log("todoTitles:");
    console.log(todoTitles);
    console.log("todoTitlesArray:");
    console.log(tableTitlesArray); 
  }
   
  for (let i = project.length - 1; i < project.length; i++) {
    if(project[i].getTitle != tableTitlesArray[i]) {
      const tableRow = document.createElement('tr');
      const td1 = document.createElement('td');
      const checkToDo = document.createElement('input');
      checkToDo.setAttribute('type', 'checkbox');
      checkToDo.classList.add('checkmark');
      const td2 = document.createElement('td');
      const titleToDo = document.createElement('p');
      titleToDo.classList.add('todotitle');
      titleToDo.innerText = project[i].getTitle;
      const td3 = document.createElement('td');
      const dueDateToDo = document.createElement('p');
      dueDateToDo.innerText = project[i].getDueDate;
      const td5 = document.createElement('td');
      const collapseBtn = document.createElement('button');
      collapseBtn.classList.add('collapsible');
      const tableRow2 = document.createElement('tr');
      tableRow2.classList.add('descriptionrow');
      const td4 = document.createElement('td');
      td4.setAttribute('colspan', '3');
      const descriptionToDo = document.createElement('p');
      descriptionToDo.innerText = project[i].getDescription;
      const emptyTd = document.createElement('td');

      if(project[i].getPriority == 1) {
        tableRow.classList.add('priority1');
        tableRow2.classList.add('priority1');
      } else if(project[i].getPriority == 2) {
        tableRow.classList.add('priority2');
        tableRow2.classList.add('priority2');
      } else if(project[i].getPriority == 3) {
        tableRow.classList.add('priority3');
        tableRow2.classList.add('priority3');
      } else if(project[i].getPriority == 4) {
        tableRow.classList.add('priority4');
        tableRow2.classList.add('priority4');
      } else if(project[i].getPriority == 5) {
        tableRow.classList.add('priority5');
        tableRow2.classList.add('priority5');
      } else {
        tableRow.classList.add('priority1');
        tableRow2.classList.add('priority1');
      }
      
      td1.appendChild(checkToDo);
      td2.appendChild(titleToDo);
      td3.appendChild(dueDateToDo);
      td4.appendChild(descriptionToDo);
      td5.appendChild(collapseBtn);
      tableRow.appendChild(td1);
      tableRow.appendChild(td2);
      tableRow.appendChild(td3);
      tableRow.appendChild(td5);
      tableRow2.appendChild(emptyTd);
      tableRow2.appendChild(td4);
      tableToDo.appendChild(tableRow);
      tableToDo.appendChild(tableRow2);

     } 
  } 
    
    let coll = document.getElementsByClassName("collapsible");
    let i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.parentNode.parentNode.nextElementSibling;
        if (content.classList.contains("descriptionrowopen") ) {
          content.classList.add("descriptionrow");
          content.classList.remove("descriptionrowopen");
        } else {
          content.classList.add("descriptionrowopen");
          content.classList.remove("descriptionrow");
        }
      });
    }
}