import { writable } from 'svelte/store';
import supabase from '$lib/supabase/config'

export const todos = writable([]);
export const textInput = writable("");

export const fetchTodos = async () => {}

export const addTodo = async (todo) => {
	console.log('todolist: ', todo);

	await supabase
		.from('todolist')
		.insert([{ 
      content: todo.content,
      editing: todo.editing,
      checked: todo.checked,
      id: todo.id,
      created_at: todo.created_at
    }]);

	todos.update((cur) => [...cur, todo]);	
};
