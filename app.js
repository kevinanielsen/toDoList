let addTaskButton = document.getElementById('add-button');
let i = 0;
let currentId = '';

const addTask = () => {
    i++;
    let newItem = document.createElement('li');
    let doneButton = document.createElement('button');
    doneButton.innerHTML = 'Done';
    newItem.innerHTML = 'Hej';
    newItem.appendChild(doneButton);
    doneButton.setAttribute('id', 'done-button' + i);
    document.getElementById('todo').appendChild(newItem);
    doneButton.addEventListener('click', moveTask);
}

const moveTask = (event) => {
    event.target.style.display = 'none';
    document.getElementById('done').appendChild(event.target.parentElement);
}
addTaskButton.addEventListener('click', addTask)

