import React from "react"
import TodosList from './TodosList'
import Header from "./Header"
import InputTodo from "./InputTodo"
import "./App.css"

import axios from "axios";

import todos from '../data'

import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
  state = {
    todos :[],
    show: false
   };
   componentDidMount() {
    // axios.get("https://jsonplaceholder.typicode.com/todos", {
    //   params: {
    //     _limit: 10
    //   }
    // })
    // .then(response => console.log(response.data));
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response => this.setState({ todos: response.data }));
  }

  
 

   addTodoItem = title => {
    // const newTodo = {
    //   id: uuidv4(),
    //   title: title,
    //   completed: false
    // };
    // this.setState({
    //   todos: [...this.state.todos, newTodo]
    // });
    axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false,
    })
    .then(response =>
      this.setState({
        todos: [...this.state.todos, response.data],
      })
    )
  };
   delTodo = id => {
    // this.setState({
    //   todos: [
    //     ...this.state.todos.filter(todo => {
    //       return todo.id !== id;
    //     })
    //   ]
    // });
    axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(reponse =>
      this.setState({
        todos: [
          ...this.state.todos.filter(todo => {
            return todo.id !== id
          }),
        ],
      })
    )
    };
   handleChange = (id) => {
    this.setState(prevState =>{
      return { 
        todos: prevState.todos.map(todo => {
              if (todo.id === id) {
                todo.completed = !todo.completed;
              }
              return todo;
            }),
            show: !this.state.show,
          }
    })
  };
  render() {
    return (
      <div className="container">
        <Header headerSpan={this.state.show}/>
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