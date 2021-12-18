import React, { useState, useEffect } from "react"
import PostList from "./PostList"

const AppContainer =() => {
  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //   .then(response => setTodos(response.data))
  }, [])
//   setMovies(prevMovies => ([...prevMovies, ...result]));
  const style ={
    "padding":"10px",
  }
  
  
  return (
    <div style = {style} >
      <PostList/>
    </div>
  )
}

export default AppContainer