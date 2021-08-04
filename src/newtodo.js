const toDoFactory = (title, description, duedate, priority) => {
    const getTitle = title;
    const getDescription = description;
    const getDueDate = duedate;
    const getPriority = priority;
    let Checked = 'no';
    return {getTitle, getDescription, getDueDate, getPriority, Checked}
}

export default toDoFactory;