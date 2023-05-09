<script>
	import supabase from '$lib/supabase/config';
	import { todos, textInput } from '$lib/stores/todoListStore';
	import Todo from '$lib/components/Todo.svelte';

	export let data;
	const { todolist } = data;

	$todos = todolist;

	const addToDo = async () => {
		const todo = {
			content: $textInput,
			editing: false,
			checked: false,
			id: crypto.randomUUID(),
			created_at: new Date().toLocaleDateString()
		};
		await supabase.from('todolist').insert([{ content: $textInput }]);

		$todos = [...$todos, todo];

		$textInput = '';
	};
</script>


<section class="TODO">
	<h1>TodoList на ебучем SvelteKit</h1>

	<div>
		<input type="text" placeholder="New Task" bind:value={$textInput} />
		<button class="sbt_button" on:click={addToDo}>Add</button>
	</div>
	<div>
	{#each $todos as todo, i}
		<Todo {todo} {i} />
	{/each}
	</div>
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

</style>
