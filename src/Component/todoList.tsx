import { ChangeEvent, useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState<string>("");
  const [completed, setCompleted] = useState<number[]>([]);
  const [todos, setTodos] = useState<string[]>([]);

  //Add new task from input to todos list
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //kolla upp denna
    if (task !== "") {
      setTodos((prev) => [...prev, task]);
    }
    setTask("");
  };

  const handleComplete = (index:number) => {
    //kolla upp
    if (completed.includes(index)){
      setCompleted((prev) => prev.filter((item) => item !== index));
    } else{
     setCompleted((prev) => [...prev, index]);
    }
  }

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
          
          <li className={`${completed.includes(index) ? 'task-completed' : ''}`}key={index}>{item}
          <input onClick={() => handleComplete(index)} type="checkbox"/>
          </li>
          
          
        ))}
      </ul>
    </section>
  );
}
