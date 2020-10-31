import React from "react";

export default class ActiveTodo extends React.Component {
	render() {
		let active = this.props.todos.filter((item) => item.complete === false);
		return active.length > 0 ? (
			<div
				style={{
					fontWeight: 600,
					marginTop: 20,
				}}>
				Uncompeleted todos: {active.length}
			</div>
		) : (
			<div
				style={{
					fontWeight: 600,
					marginTop: 20,
				}}>
				No Uncompeleted tasks
			</div>
		);
	}
}
