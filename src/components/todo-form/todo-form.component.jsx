import { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputValue.trim().length > 0) {
      this.props.handleSubmit(this.state.inputValue);
      this.setState({ inputValue: "" });
    } else {
      alert("Add todo");
    }
  };

  render() {
    return (
      <form
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <div className="input-group">
          <input
            type="text"
            name="todoInput"
            className="form-control"
            placeholder="Add Todo"
            value={this.state.inputValue}
            onInput={(e) => {
              this.setState({ inputValue: e.target.value });
            }}
          />
          <button className="btn btn-primary btn-group" type="submit">
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default TodoForm;
