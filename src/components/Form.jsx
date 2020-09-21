import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
	// Handling onChange event of INPUT
	const inputTexthandler = (e) => {
		// console.log(e.target.value);
		setInputText(e.target.value);
	};

	// Handling onClick event of ADD button
	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{
				text: inputText,
				completed: false,
				id: Math.floor(Math.random() * 1000),
			},
		]);
		setInputText("");
	};

	return (
		<React.Fragment>
			<form className='form-container'>
				<input
					className='todo-input'
					type='text'
					placeholder='Enter task'
					onChange={inputTexthandler}
					value={inputText}
				/>
				<button onClick={submitTodoHandler} className='todo-btn'>
					<i className='fa fa-plus-circle' aria-hidden='true'></i>
				</button>
			</form>
		</React.Fragment>
	);
};

export default Form;
