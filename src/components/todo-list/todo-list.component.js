import TodoItem from "../todo-item/todo-item.component";

export const TodoList = (props) => {
  return (
    <ul className="list-group list-group-flush">
      {props.todoList.map((todoTask) => {
        return (
          <TodoItem
            key={todoTask.id}
            todo={todoTask}
            handleCheck={props.handleCheck}
            handleDelete={props.handleDelete}
            handleUpdate={props.handleUpdate}
          />
        );
      })}
    </ul>
  );
};
