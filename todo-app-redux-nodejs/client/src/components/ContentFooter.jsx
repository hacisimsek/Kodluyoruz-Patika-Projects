import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveFilter, clearCompleted, selectTodos, selectActiveFilter } from '../redux/todos/todosSlice';

function ContentFooter() {
	const items = useSelector(selectTodos);
	const activeFilter = useSelector(selectActiveFilter);
	const dispatch = useDispatch();

	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{items.length} </strong>
				item{items.length > 1 ? 's' : ''} left
			</span>

			<ul className="filters">
				<li>
					<a
						href="#!"
						className={activeFilter === 'all' ? 'selected' : ''}
						onClick={() => dispatch(setActiveFilter('all'))}
					>
						All
					</a>
				</li>
				<li>
					<a
						href="#!"
						className={activeFilter === 'active' ? 'selected' : ''}
						onClick={() => dispatch(setActiveFilter('active'))}
					>
						Active
					</a>
				</li>
				<li>
					<a
						href="#!"
						className={activeFilter === 'completed' ? 'selected' : ''}
						onClick={() => dispatch(setActiveFilter('completed'))}
					>
						Completed
					</a>
				</li>
			</ul>

			<button className="clear-completed" onClick={() => dispatch(clearCompleted())}>
				Clear completed
			</button>
		</footer>
	);
}

export default ContentFooter;
