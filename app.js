let addTaskButton = document.getElementById('add-button');
let currentId = '';
let currentTasks = [];
let doneTasks = [];
let j = 0;

// If localStorage not empty, it runs through the list and adds all items to toDo list.
let storedTasks = '';
let storedTasksArr = [];
if (localStorage.currentTasks != undefined) {
    storedTasks = localStorage.currentTasks;
    storedTasksArr = storedTasks.split(',');
    for (let i = 0; i < storedTasksArr.length; i++) {
        let storedItem = document.createElement('li');
        let doneButton = document.createElement('button');
        let newTask = document.createElement('p');
        storedItem.appendChild(newTask);
        storedItem.setAttribute('id', 'item' + i);
        newTask.innerHTML = storedTasksArr[i];
        storedItem.appendChild(doneButton);
        doneButton.setAttribute('class', 'done-button');
        doneButton.setAttribute('id', 'done-button' + i);
        doneButton.innerHTML = 'Done';
        document.getElementById('todo').appendChild(storedItem);
        currentTasks.push(storedTasksArr[i]);
    }
}

// Adds a task to the localStorage.
const addTask = () => {

    let inputData = document.getElementById('todo-input').value;
    currentTasks.push(inputData);
    localStorage.setItem('currentTasks', currentTasks);
}

addTaskButton.addEventListener('click', addTask);

// Function that moves a selected task from toDo to doneList and removes it from localStorage
const moveTask = (event) => {
    let doneTaskButton = event.target;
    doneTaskButton.style.display = 'none';
    let doneTaskText = doneTaskButton.parentElement.childNodes[0].textContent;
    
    document.getElementById('done').appendChild(doneTaskButton.parentElement);

    localStorage.setItem('currentTasks', currentTasks.splice(localStorage.currentTasks.search(doneTaskText), doneTaskText.length), );
    console.log('Location:', localStorage.currentTasks.search(doneTaskText))
    console.log('Location:', localStorage.currentTasks.search(doneTaskText))
}
// Adds eventlisteners to all items with 'done-button' class. 
let doneButtons = document.querySelectorAll('.done-button');
for (let k = 0; k < doneButtons.length; k++) {
    doneButtons[k].addEventListener('click', moveTask);
}
