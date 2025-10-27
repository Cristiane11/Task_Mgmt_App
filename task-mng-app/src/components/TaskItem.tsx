import React from 'react';
import type { Task } from '../types/TaskTypes';
import { Card } from 'react-bootstrap'
import { MdModeEdit, MdDeleteOutline } from "react-icons/md";
import { BiDetail } from "react-icons/bi";

interface TaskItemProps {
    task: Task;
    onEdit: () => void;
    onDelete: () => void;
    onDetail: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete, onDetail }) => {
    return (
        <Card className='m-2 shadow-sm task-item' style={{
            color: 'rgb(25, 101, 156)',
            width: '45%',
            background: 'linear-gradient(45deg, rgb(92, 195, 251, 0.878) 0%, rgb(166, 230, 255) 100%)'
        }}>

            <Card.Body>
                <div className="d-flex justify-content-between align-items-start">

                    <div className="flex-grow-1 me-3">
                        <Card.Title className='fs-6 mt-1'>{task.title}</Card.Title>


                    </div>



                    <div className="d-flex flex-row gap-2">
                        <button className='task-button' onClick={onDetail}><BiDetail /></button>
                        <button onClick={onEdit} className='task-button'><MdModeEdit /></button>
                        <button onClick={onDelete} className='task-button'><MdDeleteOutline /></button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default TaskItem;
