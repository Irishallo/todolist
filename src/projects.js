const generalProject = [];
const allProjects = [];

const projectFactory = (title, array) => {
    const getTitle = title;
    const getArray = array;
    return {getTitle, getArray}
}

const generalPrObject = projectFactory('generalProject', generalProject);

allProjects.push(generalPrObject);

export {
    allProjects,
    generalProject,
    projectFactory
}