import { useEffect, useState } from 'react';
import './Form.css'

export function AddForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // отменяет стандартное поведение формы (загрузку страницы)
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
        <form onSubmit={handleSubmit}> {/* вызываю обработчика реакта при отправке формы */}
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
}