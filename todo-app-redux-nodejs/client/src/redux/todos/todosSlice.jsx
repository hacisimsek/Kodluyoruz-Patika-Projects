import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		items: [
			{
				id: 1,
				text: 'Learn React',
				completed: false,
			},
			{
				id: 2,
				text: 'Learn Redux',
				completed: false,
			},
			{
				id: 3,
				text: 'Have a life!',
				completed: true,
			},
		],
		setActiveFilter: 'all',
	},
	reducers: {
		addTodo: (state, action) => {
			state.items.push(action.payload);
		},
		removeTodo: (state, action) => {
			console.log('🚀 ~ file: todosSlice.jsx ~ line 29 ~ action', action);
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
		toggleTodo: (state, action) => {
			const { id } = action.payload;
			const todo = state.items.find((item) => item.id === id);
			todo.completed = !todo.completed;
		},
		setActiveFilter: (state, action) => {
			state.activeFilter = action.payload;
		},
		clearCompleted: (state, action) => {
			state.items = state.items.filter((item) => !item.completed);
		},
	},
});

export const selectTodos = (state) => state.todos.items;
export const selectActiveFilter = (state) => state.todos.activeFilter;
export const selectFilterdTodos = (state) => {
	const { items, activeFilter } = state.todos;
	switch (activeFilter) {
		case 'all':
			return items;
		case 'active':
			return items.filter((item) => !item.completed);
		case 'completed':
			return items.filter((item) => item.completed);
		default:
			return items;
	}
};
export const { addTodo, toggleTodo, removeTodo, setActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;
