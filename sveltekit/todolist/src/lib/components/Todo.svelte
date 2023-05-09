<script>
	import { todos } from '$lib/stores/todoListStore';
	import supabase from '$lib/supabase/config';

	export let todo, i;

	const deleteTodo = async (item) => {
		let text = 'Точно удалить?';
		if (confirm(text) == true) {
			$todos = $todos.filter((todo) => todo.id !== item.id);
			await supabase.from('todolist').delete().eq('id', item.id);
		} else {
			return
		}
	};

	const setCheckedTrue = async (id) => {
		await supabase.from('todolist').update({ checked: true }).eq('id', todo.id);
	};

	const setCheckedFalse = async (id) => {
		await supabase.from('todolist').update({ checked: false }).eq('id', todo.id);
	};

	$: if (todo.checked) {
		setCheckedTrue(todo.id);
	}

	$: if (!todo.checked) {
		setCheckedFalse(todo.id);
	}
</script>

<section class="todolist">
		<input type="checkbox" class="checkbox" bind:checked={todo.checked} />
		<h4 class="todoText" style:text-decoration={todo.checked ? 'line-through' : ''}>{todo.content}</h4>
		<button class="rem_button" on:click={() => deleteTodo(todo)}>delete</button>
</section>

<style>
	.todolist {
		margin-top: 25px;
		margin-right: 50px;
		display: -webkit-inline-box;
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

	.todoText {
		margin: 0 auto;
		list-style-type: none;
		font-size: 20px;
	}
</style>
