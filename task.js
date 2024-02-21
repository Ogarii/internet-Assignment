

const submitButton = document.getElementById('submitButton');
const taskInput = document.getElementById('taskInput');

taskInput.addEventListener('input', function() {
    if (taskInput.value.trim() !== '') {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true; 
    }
});

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const newTask = taskInput.value.trim();

    const listItem = document.createElement('li');
    listItem.textContent = newTask;

    document.getElementById('tasks').appendChild(listItem);

    taskInput.value = '';
    submitButton.disabled = true;
});

function preventDefaultSubmission() {
    return false;
}