import React, { useState, useEffect } from 'react';
import './TodoList.css';

function TodoList() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    const addTask = (e) => {
        e.preventDefault();
        if (!newTask.trim()) {
            return;
        }
        const newTasks = [...tasks, { text: newTask, completed: false }];
        setTasks(newTasks);
        setNewTask('');
        saveTasks(newTasks);
    };

    const updateTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
        saveTasks(newTasks);
    };

    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
        saveTasks(newTasks);
    };

    const saveTasks = (tasks) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    return (
        <section className="TodoList">
            <h1>TODO list на React</h1>
            <form onSubmit={addTask}>
                <input type="text" placeholder="New Task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                <button className="sbt_button" type="submit">Add</button>
            </form>
            <nav>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input type="checkbox" checked={task.completed} onChange={() => updateTask(index)} />
                        <span className={task.completed ? 'completed' : ''}>{task.text}</span>
                        <button className="rem_button" onClick={() => removeTask(index)}>Delete</button>
                    </li>
                ))}
            </nav>
        </section>
    );
}

export default TodoList;
