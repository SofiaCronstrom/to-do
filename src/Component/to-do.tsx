export default function TodoList() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    (event.currentTarget as HTMLFormElement).reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input type="text" name="todo" id="todo" placeholder="Write a new task" />
      </label>
      <button className="submit-btn">Submit</button>
    </form>
  );
}
