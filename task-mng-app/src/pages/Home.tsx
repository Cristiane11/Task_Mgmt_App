import React from 'react'
import LoginButton from '../components/LoginButtun';
import LogoutButton from '../components/LogoutButton';
import { Col, Container } from 'react-bootstrap';
import PageLayout from '../components/PageLayout';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {


  const { isAuthenticated } = useAuth0();

  return (
    <PageLayout>
      <Container className='d-flex text-center mt-5'>

        <Col className='border p-3 rounded mt-5 task-box'>
          <div className='rounded p-1'>

            <h1 className='m-2 mb-5 rounded p-1 fade-in'>Let's get stuff done</h1>

            {!isAuthenticated &&
              <>
                <p className='fade-in'>Log in to get started</p>
              </>
            }
            {isAuthenticated &&
              <>
                <Link to='/tasklist' className='fade-in log-btn p-2'
                style={{color:"rgb(20, 108, 171)"}}
                >Go to Task List</Link>
              </>
            }

            <hr />


            <LoginButton />
            <LogoutButton />
          </div>
        </Col>

      </Container>
    </PageLayout>
  )
}

export default HomePage;