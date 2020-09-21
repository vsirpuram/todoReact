import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
	// Handling onClick event of Delete button
	const deleteHandler = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
	};

	// Handling onClick event of Complete button
	const completeHandler = () => {
		setTodos(
			todos.map((el) => {
				if (el.id === todo.id) {
					return {
						...el,
						completed: !el.completed,
					};
				}
				return el;
			})
		);
	};

	/*
   	// -- Styling the completed text -- //
         const completedStyle = {
            fontStyle: "italic",
            textDecoration: "line-through",
            opacity: "0.5",
         };
   */

	return (
		<div className='todo'>
			<li
				// style={todo.completed ? completedStyle : null} OR
				className={`todo-item ${todo.completed ? "completed" : ""}`}>
				{todo.text}
			</li>
			<button onClick={completeHandler} className='complete-btn'>
				<i className='fa fa-check-circle'></i>
			</button>
			<button onClick={deleteHandler} className='delete-btn'>
				<i className='fa fa-minus-circle'></i>
			</button>
		</div>
	);
};

export default Todo;
