import React, { useState, useEffect } from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  creationTime: string;
}

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/tasks/all')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.completed ? '✅ Done' : '🔄 Pending'}</p>
            <small>Created: {new Date(task.creationTime).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;