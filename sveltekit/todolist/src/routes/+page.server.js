import supabase from '$lib/supabase/config';

export const load = async () => {
	const { data, error } = await supabase.from('todolist').select('*')
  .order('created_at', { ascending: true })
	console.log('data: ', data);
	return { todolist: data };
};


// CREATE TABLE todolist (
// 	id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
// 	content text,
// 	editing boolean,
// 	checked boolean,
// 	created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
// );
