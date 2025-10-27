import React, { useContext, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import TaskContext from '../context/TaskContext';
import type { Task } from '../types/TaskTypes';
import { v4 as uuidv4 } from 'uuid';
import PageLayout from '../components/PageLayout';
import TaskItem from '../components/TaskItem';
import AddTaskModel from '../models/AddTaskModel';
import EditTaskModel from '../models/EditTaskModel';
import { Container, Row } from 'react-bootstrap';
import { MdLibraryAdd } from "react-icons/md";
import CompletedTasks from '../components/CompletedTasks';
import { useNavigate } from 'react-router-dom';
import TaskDetail from '../models/TaskDetails';


const TaskList: React.FC = () => {
    const { state, dispatch } = useContext(TaskContext);
    const { isAuthenticated } = useAuth0();

    const [showAddModal, setShowAddModal] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
    const [showDetailModal, setShowDetailModal] = useState(false)
    const [taskForDetail, setTaskForDetail] = useState<Task | null>(null);

    if (!isAuthenticated) return <div>Please login</div>;

    const openAddModal = () => setShowAddModal(true);
    const closeAddModal = () => setShowAddModal(false);

    const openEditModal = (task: Task) => setTaskToEdit(task);
    const closeEditModal = () => setTaskToEdit(null);

    const navigate = useNavigate(); 

    const openDetailModal = (task: Task) => {
    navigate(`/taskdetail/${task.id}`);
};

    const closeDetailModal = () => {
        setTaskForDetail(null);
        setShowDetailModal(false);
    };

    const handleAddTask = (title: string, description: string) => {
        dispatch({ type: 'ADD_TASK', payload: { id: uuidv4(), title, description, status: false } });
        closeAddModal();
    };

    const handleEditTask = (id: string, title: string, description: string) => {
    dispatch({
        type: 'EDIT_TASK',
        payload: { id, updates: { title, description } }
    });
    closeEditModal();
    };

    const handleDeleteTask = (id: string) => {
        dispatch({ type: 'DELETE_TASK', payload: id });
    };

    return (
        <PageLayout>

            <Container className='m-3 border rounded shadow task-box'>
                <div className='d-flex justify-content-between'>
                    <h3 className='d-inline m-2'>Tasks</h3>
                    <button
                        className='task-button'
                        style={{ margin: '0.5em' }}
                        onClick={openAddModal}><MdLibraryAdd /></button>
                </div>
                <Row className='m-2 p-1 mb-4 border rounded d-flex d-flex justify-content-center inner-task'>
                    {state.tasks.filter(task => !task.status).map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onEdit={() => openEditModal(task)}
                            onDelete={() => handleDeleteTask(task.id)}
                            onDetail={() => openDetailModal(task)}
                        />
                    ))}
                </Row>
            </Container>

            <br />

            <CompletedTasks />

            {showAddModal && (
                <AddTaskModel
                    onClose={closeAddModal}
                    onSave={handleAddTask}
                />
            )}

            {taskToEdit && (
                <EditTaskModel
                    task={taskToEdit}
                    onClose={closeEditModal}
                    onSave={handleEditTask}
                />
            )}

            {showDetailModal && taskForDetail &&(
                <TaskDetail
                    task={taskForDetail}
                    onClose={closeDetailModal}
                />
            )}
        </PageLayout>
    );
};

export default TaskList;