import { useContext } from 'react';
import type { Task } from '../types/TaskTypes';
import { Card } from 'react-bootstrap'
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import TaskContext from '../context/TaskContext';



interface TaskItemProps {
    task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {

    const { dispatch } = useContext(TaskContext)

    const handleDeleteTask = (id: string) => {
        dispatch({ type: 'DELETE_TASK', payload: id });
    };


    return (
        <Card className='m-2 shadow-sm complete-item' style={{
            width: '45%',
            background: 'linear-gradient(45deg, rgb(68, 231, 79, 0.878) 0%, rgb(133, 254, 133) 100%)'
        }}>

            <Card.Body>
                <div className="d-flex justify-content-between"
                    style={{color: 'rgb(17, 143, 17'}}
                >
                    <h2 className='fade-in'>
                        <FaCheckCircle className='opacity-75' />
                    </h2>

                    <div className="align-content-center">
                        <Card.Title className='fs-6 mt-1'>{task.title}</Card.Title>

                    </div>

                    <div className="d-flex flex-row gap-2">
                        <button onClick={() => handleDeleteTask(task.id)} className='task-button'><MdDeleteOutline /></button>

                    </div>

                </div>
            </Card.Body>
        </Card>
    );
};

export default TaskItem;
