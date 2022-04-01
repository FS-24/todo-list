import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

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

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <form
          onSubmit={(event) => {
            this.handleSubmit(event);
          }}
        >
          <input
            type="text"
            value={this.state.value}
            placeholder="name"
            onInput={(event) => {
              this.setState({ value: event.target.value });
            }}
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {this.state.tasks.map(({ id, title, done }, index) => {
            return (
              <div
                key={id}
                style={
                  done
                    ? { backgroundColor: "green", color: "White" }
                    : { backgroundColor: "white", color: "black" }
                }
              >
                <li>{title}</li>
                <button
                  onClick={() => {
                    let { tasks } = this.state;
                    tasks[index].done = !done;
                    this.setState({ tasks: tasks });
                  }}
                >
                  Done
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
