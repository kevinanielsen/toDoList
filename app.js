let addTaskButton = document.getElementById('add-button');
let i = 0;
const addTask = () => {
    i++;
    let newItem = document.createElement('li');
    let doneButton = document.createElement('button');
    doneButton.innerHTML = 'Done';
    newItem.innerHTML = 'Hej';
    newItem.appendChild(doneButton);
    doneButton.setAttribute('class', 'done-button');
    document.getElementById('todo').appendChild(newItem);
}

const moveTask = () => {
    
}
addTaskButton.addEventListener('click', addTask)
document.getElementsByClassName[i].addEventListener('click', )
