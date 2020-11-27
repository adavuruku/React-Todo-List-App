import React from "react"
import AssignItem from './AssignItem'

class AssignList extends React.Component {
render() {
    return (
        <div>
        {this.props.questions.map(todo => <AssignItem key={todo.id} todo={todo}/>)}
      </div>
    );
  }
}

export default AssignList