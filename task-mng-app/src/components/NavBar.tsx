import { Nav, Navbar } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButtun';
import LogoutButton from './LogoutButton';

const NavBar:React.FC = () => {

    const { isAuthenticated } = useAuth0();


    return (
        <Navbar expand='lg' className='navbar-dark bg-dark justify-content-between px-2'>
            <Nav className=''>
                <Nav.Link href='/'>Home</Nav.Link>
                {isAuthenticated && 
                <>
                   <Nav.Link href='/tasklist'>Task List</Nav.Link>
                   {/* <Nav.Link href='/testpage'>Test Page</Nav.Link> */}
                   
                
                </>
                }
            </Nav>
            <Nav.Item>

            {!isAuthenticated &&
                <>
                 <LoginButton />
                </>
            }
            {isAuthenticated &&
                <>
                 <LogoutButton />
                </>
            }
            </Nav.Item>
        </Navbar>
    )
}

export default NavBar;