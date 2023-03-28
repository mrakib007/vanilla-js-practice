// Get the saved tasks from local storage
let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Add an event listener to the Add button
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', function () {
  // Get the input value and create a new task object
  const inputField = document.getElementById('todo-input');
  const taskText = inputField.value;
  const newTask = {
    text: taskText,
    done: false,
  };

  // Add the new task to the savedTasks array and save it to local storage
  savedTasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(savedTasks));

  // Add the new task to the table
  addTaskToTable(newTask);

  // Clear the input field
  inputField.value = '';
});

// Function to add a task to the table
function addTaskToTable(task) {
  const tableBody = document.getElementById('todo-table-body');
  const newRow = tableBody.insertRow();

  const taskCell = newRow.insertCell();
  taskCell.textContent = task.text;

  const deleteCell = newRow.insertCell();
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'btn btn-danger';
  deleteButton.addEventListener('click', function () {
    // Remove the task from the savedTasks array and save it to local storage
    const index = savedTasks.indexOf(task);
    savedTasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(savedTasks));

    // Remove the task from the table
    tableBody.removeChild(newRow);
  });
  deleteCell.appendChild(deleteButton);
}

// Add the saved tasks to the table
for (let i = 0; i < savedTasks.length; i++) {
  addTaskToTable(savedTasks[i]);
}