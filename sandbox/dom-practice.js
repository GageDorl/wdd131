let tasks = [];

function renderTasks(tasks){
    const taskList = document.getElementById('todoList');
    taskList.innerHTML = '';
    for(let task of tasks){
        const taskElement = document.createElement('li');
        if(task.completed){
            taskElement.classList.add('strike');
        }

        const taskDetail = document.createElement('p');
        taskDetail.innerText = task.detail;
        taskElement.append(taskDetail);
        const taskActions = document.createElement('div');
        taskActions.innerHTML =`
        <span data-function='delete'>❎</span>
        <span data-function='complete'>✅</span>`;
        taskElement.append(taskActions);
        taskList.append(taskElement);
    }
}

function newTask(){
    let newTask = document.getElementById('todo');

    tasks.push({
        detail: newTask.value,
        completed: false
    });

    newTask.value = '';
    renderTasks(tasks);
}

document.getElementById('submitTask').addEventListener('click', newTask);

function removeTask(taskElement){
    tasks = tasks.filter(
        (task) => task.detail != taskElement.querySelector('p').innerText
    );
    taskElement.remove();
}

function completeTask(taskElement){
    const taskIndex = tasks.findIndex(
        (task) => task.detail == taskElement.childNodes[0].innerText
    );
    tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
    taskElement.classList.toggle('strike');
}

function manageTasks(event){
    const parent = event.target.closest('li');
    if(event.target.dataset.function == 'delete'){
        removeTask(parent);
    }
    else if(event.target.dataset.function == 'complete'){
        completeTask(parent);
    }
}

document.getElementById('todoList').addEventListener('click', manageTasks);

renderTasks(tasks);