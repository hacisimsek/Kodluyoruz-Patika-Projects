import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todos/todosSlice';

const Form = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTodo({ id: nanoid(), text: value, completed: false }));
		setValue('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				className="new-todo"
				placeholder="What needs to be done?"
				autoFocus
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</form>
	);
};
export default Form;
