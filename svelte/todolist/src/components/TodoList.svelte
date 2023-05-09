<script>
    let newTask = '';
    let tasks = [];

    function addTask() {
        if (!newTask.trim()) {
            return;
        }

        tasks = [...tasks, { text: newTask, completed: false }];
        newTask = '';
        saveTasks();
    }

    function updateTask(task) {
        saveTasks();
    }

    function removeTask(index) {
        tasks = tasks.filter((_, i) => i !== index);
        saveTasks();
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

    loadTasks();
</script>


<section class="TODO">
    <h1>TODO list на Svelte</h1>
    <form on:submit|preventDefault={addTask}>
        <input type="text" placeholder="New Task" bind:value={newTask} />
        <button class="sbt_button" type="submit">Add</button>
    </form>
    <nav>
        {#each tasks as task, index}
            <li>
                <input type="checkbox" bind:checked={task.completed} on:change={() => updateTask(task)} />
                <span class:completed={task.completed}>{task.text}</span>
                <button class="rem_button" on:click={() => removeTask(index)}>Delete</button>
            </li>
        {/each}
    </nav>
</section>

<style>
    .TODO {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        align-self: center;
        font-size: 20px;
        padding: 10px;
        color: white;
        text-shadow: 2px 3px 4px #0384ff;
        min-height: 100vh;
    }

    input {
        border: 2px solid #443d3d;
        border-radius: 3px;
        padding: 5px;
        background: #645656;
        color: white;
    }

    .sbt_button {
        width: max-content;
        background: #5e856d;
        color: white;
        border: none;
        padding: 5px 9px 9px;
        border-radius: 4px;
        cursor: pointer;
        align-self: end;
        padding-top: 10px;
    }

    .rem_button {
        width: max-content;
        background: #a81b1b;
        color: white;
        border: none;
        padding: 5px 9px 9px;
        border-radius: 4px;
        cursor: pointer;
        align-self: end;
        padding-top: 10px;
    }

    li {
        margin-top: 15px;
        list-style-type: none;
        font-size: 20px;
    }

    .completed {
        text-decoration: line-through;
    }

    span{
        margin-left: 15px;
        margin-right: 15px;
    }

</style>