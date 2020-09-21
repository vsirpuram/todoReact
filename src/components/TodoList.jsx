import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
	return (
		<div className='todo-container'>
			<ul className='todo-list'>
				{todos.map((todo) => {
					if (todo.text !== "" && todo.text !== " ") {
						return (
							<Todo
								todos={todos}
								setTodos={setTodos}
								key={todo.id}
								todo={todo}
							/>
						);
					}
				})}
			</ul>
		</div>
	);
};

export default TodoList;
