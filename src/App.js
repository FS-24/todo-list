import "./App.css";
import { Component } from "react";
import TodoList from "./components/todo-list/todo-list.component";
import { ToDoForm } from "./components/todo-form/todo-form.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      value: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let { tasks, value } = this.state;
    let taskId = Math.floor(Math.random() * 10000).toString();
    if (value.trim().length > 0) {
      tasks.push({
        title: value,
        id: taskId,
        done: false,
      });
      this.setState({ tasks: tasks, value: "" });
    }
  };

  handleInput = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <ToDoForm
          handleSubmit={this.handleSubmit}
          handleInput={(event) => {
            this.handleInput(event);
          }}
          value={this.state.value}
          placeholder="Add To do"
        />
        <TodoList
          tasks={this.state.tasks}
          handleChange={(event) => {
            console.log(event.target);
            let { tasks } = this.state;
            tasks[event.target.id].done = event.target.checked;
            this.setState({ tasks: tasks });
          }}
        />
      </div>
    );
  }
}

export default App;
