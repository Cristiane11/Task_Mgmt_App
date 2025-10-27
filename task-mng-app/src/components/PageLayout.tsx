import React from 'react'
import NavBar from './NavBar'
import { Container, Row} from "react-bootstrap"


type PageLayoutProps = {
    children?:React.ReactNode;
}


const PageLayout:React.FC<PageLayoutProps> = ({ children }) => {


  return (
    <Container fluid>
        <Row>
            <NavBar />
        </Row>
        {/* <h1>Task App</h1> */}
        <div className=''>
            { children }
        </div>
    </Container>
    
  )
}

export default PageLayout;