import { useEffect, useState } from 'react';
import { DeleteForm, FinishForm } from './Forms';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  creationTime: string;
}

function FinishedTaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch('/tasks/completed')
      .then((res) => {console.log(res.body); return res.json();})
      .then((data) => {console.log(data); setTasks(data);})
      .catch(err => console.error('Error fetching tasks:', err));
  }, []);
  return (
    <div>
      <h2 className="HeaderName">Finished Tasks</h2>
      <ul className="TaskList">
        {tasks.map(task => (
          <li key={task.id}>
            <h3 className="TaskTitle"> 
                {task.title} 
            </h3>
                {task.description.substring(0, 50)}...
            {/* <p>{task.description}</p>
            <p>{task.creationTime}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FinishedTaskList;