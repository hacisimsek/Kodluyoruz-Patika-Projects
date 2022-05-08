import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo, selectFilterdTodos } from '../redux/todos/todosSlice';

function TodoList() {
	const filterdItems = useSelector(selectFilterdTodos);

	const dispatch = useDispatch();
	const handleToggle = (id) => {
		if (window.confirm('Are you sure you want to remove this item?')) {
			dispatch(removeTodo(id));
		}
	};

	return (
		<ul className="todo-list">
			{filterdItems.map((item) => (
				<li key={item.id} className={item.completed ? ' completed' : ''}>
					<div className="view">
						<input className="toggle" type="checkbox" onChange={() => dispatch(toggleTodo({ id: item.id }))} />
						<label>{item.text}</label>
						<button className="destroy" onClick={() => handleToggle(item.id)}></button>
					</div>
				</li>
			))}
		</ul>
	);
}

export default TodoList;
