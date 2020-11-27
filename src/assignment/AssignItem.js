import React from "react"

class AssignItem extends React.Component {
render() {
    return (
        
        <div>
            <p>{this.props.todo.question}</p>
            <button>Yes</button>
            <button>No</button>
        </div>
    );
  }
}

export default AssignItem