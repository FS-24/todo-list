import { Component } from "react";
import { TodoItem } from "../todo-list-item/todo-item.component";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.tasks.map((task, index) => {
          return (
            <TodoItem
              key={task.id}
              task={task}
              handleChange={this.props.handleChange}
              index={index}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
