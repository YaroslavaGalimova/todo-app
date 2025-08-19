import { useEffect, useState } from 'react';

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
    fetch('/tasks/all')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error('Error fetching tasks:', err));
  }, []);

  return (
    <div>
      <h2 className="HeaderName">Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3 className="TaskTitle">{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.completed ? '✅ Done' : '🔄 Pending'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;