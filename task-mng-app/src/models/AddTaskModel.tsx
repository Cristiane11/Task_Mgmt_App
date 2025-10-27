import React, { useState } from 'react';

interface AddTaskModelProps {
    onClose: () => void;
    onSave: (title: string, description: string) => void;
}

const AddTaskModal: React.FC<AddTaskModelProps> = ({ onClose, onSave }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        if (!title.trim()) return;
        onSave(title, description);
        setTitle('');
        setDescription('');
        onClose();
    };

    return (
        <div className='model-bcg'>
            <div className='model-box task-box'>
                <h2>Add Task</h2>
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
                    <button className='log-btn px-4 py-2' onClick={handleSubmit}>Add</button>
                    <button className='log-btn px-4 py-2' onClick={onClose} style={{ marginLeft: '1rem' }}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddTaskModal;
