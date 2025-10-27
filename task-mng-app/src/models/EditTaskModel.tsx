import React, { useState, useEffect } from 'react';
import type { Task } from '../types/TaskTypes';

interface EditTaskModelProps {
    task: Task;
    onClose: () => void;
    onSave: (id: string, title: string, description: string) => void;
}

const EditTaskModel: React.FC<EditTaskModelProps> = ({ task, onClose, onSave }) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    useEffect(() => {
        setTitle(task.title);
        setDescription(task.description)
    }, [task]);

    const handleSubmit = () => {
        if (!title.trim() || !description.trim()) return;
        onSave(task.id, title, description);
    };

    return (
        <div className='model-bcg'>
            <div className='model-box  task-box'>
                <h2>Edit Task</h2>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Task title"
                    style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
                />
                <div style={{ textAlign: 'right' }}>
                    <button className='log-btn px-4 py-2' onClick={handleSubmit}>Save</button>
                    <button className='log-btn px-4 py-2' onClick={onClose} style={{ marginLeft: '1rem' }}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default EditTaskModel;
