import { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      value: "",
    };
  }

  componentDidMount() {
    this.setState({
      value: this.props.todo.task,
    });
    console.log("mount");
  }

  componentDidUpdate() {
    console.log("update");
  }

  componentWillUnmount() {
    console.log("Unmount");
  }

  handleEdit = (e) => {
    e.preventDefault();
    if (this.state.value.length > 0) {
      this.setState({ editing: false });
      this.props.handleUpdate(this.state.value, this.props.todo.id);
    } else {
      this.props.handleDelete(this.props.todo.id);
    }
  };
  render() {
    return (
      <div>
        <li
          className="list-group-item d-flex align-items-center"
          onDoubleClick={() => {
            this.setState({ editing: true });
          }}
        >
          <span className="flex-grow-1">
            <label
              className={
                this.props.todo.done
                  ? "text-decoration-line-through text-style-italic"
                  : ""
              }
            >
              <input
                className="mx-2"
                type="checkbox"
                onChange={() => {
                  this.props.handleCheck(this.props.todo);
                }}
              />
              {this.state.editing ? (
                <form className="d-inline-block" onSubmit={this.handleEdit}>
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={(e) => {
                      this.setState({ value: e.target.value });
                    }}
                  />
                </form>
              ) : (
                this.props.todo.task
              )}
            </label>
          </span>
          <button
            className="btn btn-sm btn-secondary mx-1"
            onClick={(e) => {
              if (this.state.editing) {
                this.handleEdit(e);
              } else {
                this.setState({ editing: true });
              }
            }}
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            className="btn btn-sm btn-danger mx-1"
            onClick={() => {
              this.props.handleDelete(this.props.todo.id);
            }}
          >
            <i className="bi bi-trash3"></i>
          </button>
        </li>
      </div>
    );
  }
}

export default TodoItem;
