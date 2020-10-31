import React from "react";

class Todolist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: "none",
		};
	}

	toggleComplete = (id) => {
		this.props.action(id);
	};

	handleDelete = (id) => {
		this.props.handleDelete(id);
	};
	render() {
		let complete = {
			textDecoration: "line-through",
		};
		let todos;
		if (this.state.filter === "none") {
			todos = this.props.todos.map((item, index) =>
				item.complete ? (
					<div
						key={item.id}
						style={{
							display: "flex",
							alignItems: "center",
						}}>
						<li style={complete} onClick={() => this.toggleComplete(item.id)}>
							{item.text}
						</li>
						<button
							onClick={() => this.handleDelete(item.id)}
							style={{
								backgroundColor: "red",
								border: "none",
								marginLeft: 10,
								color: "white",
								fontWeight: "800",
							}}>
							X
						</button>
					</div>
				) : (
					<div
						key={item.id}
						style={{
							display: "flex",
							alignItems: "center",
						}}>
						<li onClick={() => this.toggleComplete(item.id)}>{item.text}</li>
						<button
							onClick={() => this.handleDelete(item.id)}
							style={{
								backgroundColor: "red",
								border: "none",
								marginLeft: 10,
								color: "white",
								fontWeight: "800",
							}}>
							X
						</button>
					</div>
				)
			);
		} else if (this.state.filter === "complete") {
			let filtered = this.props.todos.filter((item) => item.complete === true);
			todos = filtered.map((item, index) => (
				<div
					key={item.id}
					style={{
						display: "flex",
						alignItems: "center",
					}}>
					<li onClick={() => this.toggleComplete(item.id)}>{item.teXt}</li>
					<button
						onClick={() => this.handleDelete(item.id)}
						style={{
							backgroundColor: "red",
							border: "none",
							marginLeft: 10,
							color: "white",
							fontWeight: "800",
						}}>
						X
					</button>
				</div>
			));
		} else if (this.state.filter === "active") {
			let filtered = this.props.todos.filter((item) => item.complete === false);
			todos = filtered.map((item, index) => (
				<div
					key={item.id}
					style={{
						display: "flex",
						alignItems: "center",
					}}>
					<li onClick={() => this.toggleComplete(item.id)}>{item.text}</li>
					<button
						onClick={() => this.handleDelete(item.id)}
						style={{
							backgroundColor: "red",
							border: "none",
							marginLeft: 10,
							color: "white",
							fontWeight: "800",
						}}>
						X
					</button>
				</div>
			));
		}

		return (
			<div>
				<div>
					<div>
						<button
							onClick={() => {
								this.setState({
									filter: "active",
								});
							}}>
							Show Active
						</button>
						<button
							onClick={() => {
								this.setState({
									filter: "complete",
								});
							}}>
							Show Complete
						</button>
						<button
							onClick={() => {
								this.setState({
									filter: "none",
								});
							}}>
							Show All
						</button>
					</div>
				</div>
				<div>
					<h4>Todos</h4>
					<div
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
						}}>
						<ul
							style={{
								listStyle: "none",
								margin: 0,
								padding: 0,
							}}>
							{todos}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Todolist;
