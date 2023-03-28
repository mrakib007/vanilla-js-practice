const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-button');
const todoTable = document.getElementById('todo-table');

const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

// savedTasks.map((task)=>{
//     addTaskToDom(task);
// })

addBtn.addEventListener('click',function(){
    const taskText = todoInput.value;
    if(taskText !== ''){
    const task = {
        text : taskText,
        id : Date.now(),
    }
    savedTasks.push(task);
}

    localStorage.setItem('tasks',JSON.stringify(savedTasks));
    // addTaskToDom(task);
    todoInput.value = '';
})

// const addTaskToDom = (task) =>{
//     console.log(task)
// }

