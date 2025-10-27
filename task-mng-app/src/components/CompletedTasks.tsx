import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap';
import TaskContext from '../context/TaskContext';
import CompletedItem from './CompletedItem';
import { FaCheckCircle } from "react-icons/fa";



const CompletedTasks:React.FC = () => {

    const { state } = useContext(TaskContext);




  return (

    <Container className='m-3 border rounded shadow complete-box'>
        <div className='d-flex'>
          <h2 className='align-content-center opacity-75'><FaCheckCircle/></h2>
          <h3 className='m-2'> Completed</h3>
                    
        </div>
        <Row className='m-2 p-1 mb-4 border rounded d-flex d-flex justify-content-center inner-complete'>
            {state.tasks.filter(task => task.status).map(task => (
             <CompletedItem
              key={task.id}
              task={task}
              />
            ))}
        </Row>

    </Container>
    
   
  )
}

export default CompletedTasks;