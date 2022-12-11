let addTaskButton = document.getElementById('add-button');
let currentId = '';
let currentTasks = [];
let doneTasks = [];
let j = 0;

let storedTasks = localStorage.currentTasks;
let storedTasksArr = storedTasks.split(',');

const moveTask = (event) => {
    event.target.style.display = 'none';
    document.getElementById('done').appendChild(event.target.parentElement);
    localStorage.removeItem(currentTasks[event.target.value]);

}

for (let i = 0; i < storedTasksArr.length; i++) {
    let storedItem = document.createElement('li');
    let doneButton = document.createElement('button');
    storedItem.innerHTML = storedTasksArr[i];
    storedItem.appendChild(doneButton);
    doneButton.setAttribute('id', 'done-button' + i);
    doneButton.innerHTML = 'Done';
    document.getElementById('todo').appendChild(storedItem);
    doneButton.addEventListener('click', moveTask);
    currentTasks.push(storedTasksArr[i]);
}

const addTask = () => {
    j++;
    let newItem = document.createElement('li');
    let doneButton = document.createElement('button');
    let inputData = document.getElementById('todo-input').value;
    
    newItem.innerHTML = inputData;
    newItem.appendChild(doneButton);
    doneButton.setAttribute('id', 'done-button' + j);
    document.getElementById('todo').appendChild(newItem);
    doneButton.addEventListener('click', moveTask);
    currentTasks.push(inputData);

    doneButton.innerHTML = 'Done';

    localStorage.setItem('currentTasks', currentTasks);
    console.log(localStorage);
}


addTaskButton.addEventListener('click', addTask);

