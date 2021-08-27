const generalProject = [];
const allProjects = [];

const projectFactory = (title, array) => {
    const getTitle = title;
    const TheArray = array;
    return {getTitle, TheArray}
}

const generalPrObject = projectFactory('General Project', generalProject);

allProjects.push(generalPrObject);

export {
    allProjects,
    generalProject,
    projectFactory
}