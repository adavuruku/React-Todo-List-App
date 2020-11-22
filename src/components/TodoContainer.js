import React from "react"
import TodosList from './TodosList'
import Header from "./Header"
import InputTodo from "./InputTodo"
import "./App.css"

import todos from '../data'

import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
  state = {
    todos
   };
   addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
   delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
    };
   handleChange = (id) => {
    this.setState(prevState =>{
      return { 
        todos: prevState.todos.map(todo => {
              if (todo.id === id) {
                todo.completed = !todo.completed;
              }
              return todo;
            })
          }
    })
  };
  render() {
    return (
      <div className="container">
        <Header/>
        <InputTodo addTodoItemProps = {this.addTodoItem}/>
        <TodosList handleChangeProps={this.handleChange} 
        todos={this.state.todos} 
        deleteTodoProps={this.delTodo}
        />
      </div>
    )
  }
}
export default TodoContainer