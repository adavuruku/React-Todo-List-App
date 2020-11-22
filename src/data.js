import { v4 as uuidv4 } from "uuid";
let todos = [
    {
      id: uuidv4(),
      title: "Setup development environment",
      completed: true
    },
    {
      id: uuidv4(),
      title: "Develop website and add content",
      completed: false
    },
    {
      id: uuidv4(),
      title: "Deploy to live server",
      completed: false
    }
  ]

  export default todos