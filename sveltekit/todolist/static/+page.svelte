<script>
	import Todo from '$lib/components/Todo.svelte'
	import supabase from '$lib/supabase/config';
	import { todos, textInput } from '$lib/stores/todoListStore';

	export let data;
	const { todolist } = data;
	// $: ({ todolist } = data)

	$todos = todolist;
	
	const addToDo = async () => {
		const todo = {
			content: $textInput,
			editing: false,
			checked: false,
			id: crypto.randomUUID(),
			created_at: new Date().toLocaleDateString()
		};
		
		// await supabase.from('todolist').insert([todolist]);
		await supabase.from('todolist').insert([{ content: $textInput }]);
		
		$todos = [...$todos, todo];

		$textInput = '';
	};
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css" />
</svelte:head>

<div class="todoInput">
	<h2 class="title">ToDo List</h2>
	<p>Enter your ToDo here</p>
	<div class="inputBox">
		<input type="text" bind:value={$textInput} />
		<button class="btnAdd" on:click={addToDo}>Add</button>
	</div>
</div>

{#each $todos as todo, i}
	<Todo {todo} {i} />
{/each}

<style>
	.btnAdd {
		width: 200px;
	}

	.inputBox {
		display: flex;
	}

	.title {
		text-align: center;
	}

	.todoInput {
		margin: 0 auto;
		padding: 20px;
		width: 700px;
	}
</style>
