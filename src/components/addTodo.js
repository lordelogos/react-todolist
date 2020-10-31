import React from "react";

class AddTodo extends React.Component {
	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<input
					name="todo"
					value={this.props.value}
					onChange={this.props.handleChange}
					placeholder="todo..."
				/>
				<br></br>
				<input type="submit" value="add todo" />
			</form>
		);
	}
}

export default AddTodo;
