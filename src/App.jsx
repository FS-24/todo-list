import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { TodoList } from "./components/todo-list/todo-list.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      todoList: [],
    };
  }

  handleInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { inputValue, todoList } = this.state;
    let uid = Math.floor(Math.random() * 10000).toString();
    let title = inputValue;

    if (inputValue.trim().length > 0) {
      todoList.push({ id: uid, task: title, done: false });
      this.setState({ inputValue: "" });
    } else {
      alert("Add todo");
    }
  };

  componentDidMount() {
    let todos =
      localStorage.getItem("todos") == null
        ? []
        : JSON.parse(localStorage.getItem("todos"));
    this.setState({ todoList: todos });
    console.log("app", todos);
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todoList));
  }

  handleCheck = (todo) => {
    let { todoList } = this.state;
    this.setState({
      todoList: todoList.map((todoItem) => {
        if (todo.id === todoItem.id) {
          todoItem.done = !todoItem.done;
        }
        return todoItem;
      }),
    });
  };

  handleDelete = (id) => {
    let { todoList } = this.state;

    for (const i in todoList) {
      if (todoList[i].id === id) {
        todoList.splice(i, 1);
        break;
      }
    }
    this.setState({
      todoList: todoList,
    });
  };

  handleUpdate = (task, id) => {
    let { todoList } = this.state;
    let toUpdate;

    for (const i in todoList) {
      if (todoList[i].id === id) {
        todoList[i].task = task;
        break;
      }
    }

    this.setState({
      todoList: todoList,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-uppercase bg-primary text-center">Todo list</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="todoInput"
              className="form-control"
              placeholder="Add Todo"
              value={this.state.inputValue}
              onInput={this.handleInput}
            />
            <button className="btn btn-primary btn-group" type="submit">
              Add
            </button>
          </div>
        </form>

        <div className="card mt-3">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h3>List of Todos</h3>
            <span>Total: {this.state.todoList.length}</span>
          </div>
          <TodoList
            todoList={this.state.todoList}
            handleCheck={this.handleCheck}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        </div>
      </div>
    );
  }
}

export default App;
