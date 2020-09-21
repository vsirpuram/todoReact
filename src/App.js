import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
// import uniqueId from "lodash/uniqueId";

const App = () => {
	// const [id] = useState(() => uniqueId(""));

	// Storing the input text from the UI
	const [inputText, setInputText] = useState("");

	// Storing todos received from inputText
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		getFromLocalStorage();
	}, []);

	useEffect(() => {
		saveToLocalStorage();
	}, [todos]);

	// Saving the todos to localStorage
	const saveToLocalStorage = () => {
		return localStorage.setItem("todos", JSON.stringify(todos));
	};

	// Getting the todos from localStorage
	const getFromLocalStorage = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let todoFromLocal = JSON.parse(localStorage.getItem("todos"));
			// console.log(todoFromLocal);
			setTodos(todoFromLocal);
		}
	};

	return (
		<div className='main-container'>
			<header>
				<h1>To-Do List</h1>
			</header>
			<main>
				<Form
					inputText={inputText}
					setInputText={setInputText}
					todos={todos}
					setTodos={setTodos}
				/>
				<TodoList todos={todos} setTodos={setTodos} />
			</main>
		</div>
	);
};

export default App;
