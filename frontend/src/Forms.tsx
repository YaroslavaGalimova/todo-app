import { useEffect, useState } from 'react';
import './styles/Form.css'

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  creationTime: string;
}

export function AddForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        // e.preventDefault(); // отменяет стандартное поведение формы (загрузку страницы)
        fetch('/tasks/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description }),
        })
        .then(res => res.json())
        .then(data => {
            console.log('Task added:', data);
            setTitle('');
            setDescription('');
        })
        .catch(err => console.error('Error adding task:', err));
    };
    
    return (
        <>
            <h2>Here you can quickly add a task</h2>
            <form onSubmit={handleSubmit}> {/* вызываю обработчика реакта при отправке формы */}
                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
                <textarea rows={4} cols={50}
                    placeholder="Task Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
                <button type="submit">Add Task</button>
            </form>
        </>
    );
}

export function FinishForm(props: { task?: Task, onChange?: (x: Task) => void }) {
    const { task } = props;

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (task === undefined) return;
        if (!e.target.checked) return;

        const updatedTask = { ...task, completed: true }; // props напрямую менять нельзя - антипаттерн. создаю копию с полем completed = true.

        fetch('/tasks/finish', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTask),
        })
        .then(res => res.json())
        .then(data => {
            console.log('Task finished:', data);
            if (props.onChange) {
                props.onChange(updatedTask);
            }
        })
        .catch(err => console.error('Error finishing task:', err));
    };

    return (
        <label className="TaskCheckbox">
            <input
                type="checkbox"
                checked={task ? task.completed : false}
                onChange={handleCheckboxChange}
            />
        </label>
    );
}

// export function DeleteForm() {

//     const handleDelete = (e) => {

//     }
    
//     return (
//         <form>
//             <button type="submit">❌</button>
//         </form>
//     );
// }