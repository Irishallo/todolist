const showProjects = () => {
    const projectsInput = document.createElement('select');
    projectsInput.setAttribute('id', 'projectsin');
    for (const property in allProjects) {
        const selectOption = document.createElement('option');
        selectOption.setAttribute('value', `${property}`);
        selectOption.innerText = `${property}`;
        projectsInput.appendChild(selectOption);
      }
}