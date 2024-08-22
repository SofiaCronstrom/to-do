import { ChangeEvent, useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<string>("");

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'task'){
      setTask(event.target.value);
    }
  }

  return (
    <section className="todo-container">
      <article className="todo-items"></article>
      <form className="form">
        <label>
          <input type="text" name="task" id="task" placeholder="Write a new task" value={task} onChange={handleChange}/>
        </label>
        <button className="submit-btn">Submit</button>
      </form>
    </section>
  );
}
