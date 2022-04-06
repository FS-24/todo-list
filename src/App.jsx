import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { TodoList } from "./components/todo-list/todo-list.component";
import TodoForm from "./components/todo-form/todo-form.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
    };
  }

  addNewItem = (task) => {
    let uid = Math.floor(Math.random() * 10000).toString();
    let todoList = this.state.todoList;
    todoList.push({ id: uid, task: task, done: false });
    this.setState({ todoList: todoList });
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
    // console.log("app updated");
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
        <h1 className="text-uppercase bg-primary text-center rounded-2 text-light">
          Todo list
        </h1>
        <TodoForm handleSubmit={this.addNewItem} />

        <div className="card mt-3">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h3>List of Todos</h3>
            <span>
              <button
                className="btn btn-sm btn-danger mx-3"
                title="Clear All"
                onClick={() => {
                  if (window.confirm("Etes vous super de vider la liste???")) {
                    localStorage.removeItem("todos");
                    window.location.reload();
                  }
                }}
              >
                <i className="bi bi-trash3"></i>
              </button>
              Total: {this.state.todoList.length}
            </span>
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
