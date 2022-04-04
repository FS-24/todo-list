export const TodoItem = ({ task, handleChange, index }) => {
  return (
    <div className={task.done ? "Done" : ""}>
      <li>{task.title}</li>
      <input id={index} type="checkbox" onChange={handleChange} />
    </div>
  );
};
