import { useState } from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import "./App.css";

const STARTING_TASKS = [
  { id: 1, title: "Submit GT12 Render link", dueDate: "2026-10-21" },
  { id: 2, title: "Build React client with Vite", dueDate: "2026-10-21" },
  { id: 3, title: "Connect client to live API", dueDate: "2026-10-28" },
];

function App() {
  const [tasks, setTasks] = useState(STARTING_TASKS);

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      dueDate: new Date().toISOString().split("T")[0],
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <main className="task-manager">
      <h1>Task Manager</h1>
      <p className="count">{tasks.length} tasks in list</p>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default App;