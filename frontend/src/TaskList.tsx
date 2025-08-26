import { useEffect, useState } from 'react';
import { DeleteForm, FinishForm } from './Forms';

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
      .then((res) => {console.log(res.body); return res.json();})
      .then((data) => {console.log(data); setTasks(data);})
      .catch(err => console.error('Error fetching tasks:', err));
  }, []);
  return (
    <div>
      <h2 className="HeaderName">Tasks</h2>
      <ul className="TaskList">
        {tasks.map(task => (
          <li key={task.id}>
            <h3 className="TaskTitle"> 
              {task.title} 
              <DeleteForm task={task} onChange={(nTask) => {
                setTasks(tasks.filter(t => t.id !== nTask.id));
              }} />
            </h3>
            <p>{task.description}</p>
            <p>{task.completed ? '✅ Done' : '🔄 In process'}</p>
            <hr />
            <FinishForm task={task} onChange={(nTask) => {
              setTasks(tasks.map(t => t.id === nTask.id ? nTask : t));
            }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;