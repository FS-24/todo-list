import React, { Component } from "react";

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
    console.log("composant chargé");
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
      <>
        <li
          className="list-group-item d-flex align-items-center"
          onDoubleClick={() => {
            this.setState({ editing: true });
          }}
        >
          <span className="flex-grow-1 flex-fill">
            <label
              className={
                this.props.todo.done
                  ? "text-decoration-line-through text-style-italic"
                  : ""
              }
            >
              {/* checkBox */}
              <input
                className="mx-2"
                type="checkbox"
                checked={this.props.todo.done}
                onChange={() => {
                  this.props.handleCheck(this.props.todo);
                }}
              />
              {/* affichage text */}
              {this.state.editing ? (
                <form className="d-inline-block" onSubmit={this.handleEdit}>
                  <input
                    className="form-control"
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

          {/* button de modification et suppression */}
          <button
            title={this.state.editing ? "Sauvegarder" : "Modifier"}
            className={
              this.state.editing
                ? "btn btn-sm btn-success mx-1"
                : "btn btn-sm btn-secondary mx-1"
            }
            onClick={(e) => {
              if (this.state.editing) {
                this.handleEdit(e);
              } else {
                this.setState({ editing: true });
              }
            }}
          >
            <i
              className={this.state.editing ? "bi bi-check2" : "bi bi-pencil"}
            ></i>
          </button>
          <button
            title="Supprimer"
            className="btn btn-sm btn-danger mx-1"
            onClick={() => {
              this.props.handleDelete(this.props.todo.id);
            }}
          >
            <i className="bi bi-trash3"></i>
          </button>
        </li>
      </>
    );
  }
}

export default TodoItem;
