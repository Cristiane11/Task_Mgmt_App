import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TaskContext from '../context/TaskContext';
import type {Task} from '../types/TaskTypes';

const TaskDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { state, dispatch } = useContext(TaskContext);
    const navigate = useNavigate();

    const task = state.tasks.find(t => t.id === id);

    if (!task) return <div>Task not found</div>;

    const toggleStatus = () => {
        dispatch({
            type: 'EDIT_TASK',
            payload: { id: task.id, updates: { status: !task.status } }
        });
        navigate(-1); // go back to task list
    };

    return (
        <div className="modal-background">
            <div className="m-3 py-1 border rounded shadow task-box modal-theme">
                <button onClick={() => navigate(-1)}>Close</button>
                <h3>{task.title}</h3>
                <p>{task.description || 'No description provided.'}</p>
                <button onClick={toggleStatus}>
                    {task.status ? "Mark as Incomplete" : "Mark as Complete"}
                </button>
            </div>
        </div>
    );
};

export default TaskDetail;
