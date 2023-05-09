let newTask = '';
let tasks = [];

const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');

function addTask() {
    if (!newTask.trim()) {
        return;
    }

    tasks = [...tasks, { text: newTask, completed: false }];
    newTaskInput.value = '';
    saveTasks();
    renderTasks();
}

function updateTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function removeTask(index) {
    tasks = tasks.filter((_, i) => i !== index);
    saveTasks();
    renderTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
}

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.classList.add('checkbox');
        checkbox.addEventListener('change', () => updateTask(index));
        taskItem.appendChild(checkbox);

        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.classList.toggle('completed', task.completed);
        taskItem.appendChild(taskText);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('rem_button');
        deleteBtn.addEventListener('click', () => removeTask(index));
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
    });
}

loadTasks();
renderTasks();

addTaskBtn.addEventListener('click', () => {
    newTask = newTaskInput.value.trim();
    addTask();
});