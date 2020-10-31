import React from "react";
import AddTodo from "./addTodo";
import Todolist from "./todolist";
import ActiveTodo from "./activetodo";

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			addtodo: "",
			hideAll: false,
		};
	}

	handleChange = (e) => {
		this.setState({
			addtodo: e.target.value,
		});
	};

	addFunc = (todo) => {
		let newTodos = [todo, ...this.state.todos];
		this.setState({
			todos: newTodos,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.addtodo === "" || this.state.addtodo === null) {
			return false;
		} else {
			this.addFunc({
				text: this.state.addtodo,
				complete: false,
				id: this.state.addtodo[0] + new Date(),
			});
			this.setState({
				addtodo: "",
			});
		}
	};

	toggleComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					return {
						text: todo.text,
						id: todo.id,
						complete: !todo.complete,
					};
				} else {
					return todo;
				}
			}),
		});
	};

	handleDelete = (id) => {
		this.setState({
			todos: this.state.todos.filter((item) => item.id !== id),
		});
	};

	hideAll = () => {
		this.setState({
			hideAll: !this.state.hideAll,
		});
	};

	deleteAll = () => {
		if (window.confirm("Are you sure?")) {
			this.setState({
				todos: [],
			});
		} else {
			return;
		}
	};

	render() {
		return (
			<div>
				<h3>Todolist</h3>
				<AddTodo
					value={this.state.addtodo}
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
				/>
				{this.state.hideAll === true ? (
					<div>Nothing to see here...</div>
				) : (
					<Todolist
						todos={this.state.todos}
						action={this.toggleComplete}
						handleDelete={this.handleDelete}
					/>
				)}
				<ActiveTodo todos={this.state.todos} />
				<button onClick={this.deleteAll}>Delete All</button>
				<br></br>
				<button onClick={this.hideAll}>Toggle display</button>
			</div>
		);
	}
}
