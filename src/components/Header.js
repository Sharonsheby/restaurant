import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" id='d1'>
            <img
              alt=""
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            NikkIshA Restaurant
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header
