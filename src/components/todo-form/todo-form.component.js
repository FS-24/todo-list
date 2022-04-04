export const ToDoForm = ({ handleSubmit, handleInput, value, placeholder }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onInput={handleInput}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
