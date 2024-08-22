import { ChangeEvent, useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState(["handla", "tvätta", "duscha"]);

  //Add new task from input to todos list
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //kolla upp denna
    if (task !== "") {
      setTodos((prev) => [...prev, task]);
    }
    setTask("");
  };

  return (
    <section className="todo-container">
      <article className="todo-items"></article>

      {/* Kolla upp denna */}
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <label>
          <input
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value.trim())}
          />
        </label>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
