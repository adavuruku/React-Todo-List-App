import React from "react"

const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  }

class TodoItem extends React.Component {
  componentWillUnmount() {
    alert("Item about to be deleted!");
  }
  render() {
    // return <li><input type="checkbox" defaultChecked={this.props.todo.completed}  /> {this.props.todo.title}</li>
    const { completed, id, title } = this.props.todo
    return (
        <li className="todo-item">
            <input type="checkbox" checked={completed} onChange={() => this.props.handleChangeProps(id)}/> 
            <span style={completed ? completedStyle : null}>
                {title}
            </span>
            {/* <button onClick={this.props.deleteTodoProps(id).bind(this)}>Delete</button> */}
            <button  onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
            {/* <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button> */}
        </li>
        )
  }
}

export default TodoItem