import { useState } from "react";

interface item{
    id: number;
    text: string;
    completed: boolean;
}

export default function TodoList() {
 const [todos, setTodos] = useState<item[]>([
    {id: 1, text: "Städa", completed: false},
    {id: 1, text: "Koda", completed: false}
 ])

  return (
    <section className="todo-container">
        <ul className="todo-items">
            {todos.map((todo) => (
              <li key={todo.id}>{todo.text}</li>
            ))}
            
        </ul>
    <form className="form">
      <label htmlFor="todo">
        <input type="text" name="todo" id="todo" placeholder="Write a new task" />
      </label>
      <button className="submit-btn">Submit</button>
    </form>
    </section>
  );
}
