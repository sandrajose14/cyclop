import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faEnvelope, faMagnifyingGlass, faPhone, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <>
      <div className="d-flex justify-content-end align-items-center head text-light icon">
        <p className="me-2 mt-4 fs-5"><FontAwesomeIcon icon={faInstagram} /></p>
        <p className="me-2 mt-4 fs-5"><FontAwesomeIcon icon={faFacebook} /></p>
        <p className="me-2 mt-4 fs-5"><FontAwesomeIcon icon={faYoutube} /></p>
        <p className='me-2 mt-4 fs-5'><FontAwesomeIcon icon={faPinterest} /></p>
      </div>

      <hr style={{ margin: 0 }} />

      <Navbar expand="lg" className='Navbar text-light'>
        <Navbar.Brand href="#home" className='fw-bold d-flex logo ms-5'>
          <img
            alt=""
            src="https://www.cyclop.in/cdn/shop/files/black-white_cyclop_21kb_logo.png?v=1614329328"
            width="75"
            height="65"
            className="d-inline-block align-top fw-bold"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto fs-5 pb-1 ms-5 text-white">
            <Nav.Link className='ms-4 text-white' href="#bikes">Bikes</Nav.Link>
            <Nav.Link className='ms-4 text-white' href="#apparel">Apparel</Nav.Link>
            <Nav.Link className='ms-4 me-4 text-white' href="#accessories">Accessories</Nav.Link>
            <Nav.Link className='ms-4 text-white' href="#link">Components</Nav.Link>
            <Nav.Link className='ms-4 text-white' href="#link">Maintenance</Nav.Link>
            <Nav.Link className='ms-4 text-white' href="#link">Training</Nav.Link>
            <Nav.Link className='ms-4 text-white' href="#link">Book & More</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <p className='me-3 pt-3 fs-5' style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faUser} /></p>
            <p className='me-3 pt-3 fs-5' style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
            <p className='me-3 pt-3 fs-5' style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faBagShopping} /></p>
          </div>
        </Navbar.Collapse>
      </Navbar>

      <div style={{ backgroundColor: "yellow", display: 'flex', justifyContent: 'center', height: '35px', textDecoration: 'none', fontWeight: 'lighter' }}>
        <p className='mt-1'>Interest Free EMI Available</p>
      </div>

      <div className='main-page'>
        <Row className="justify-content-center align-items-center h-100 ">
          <Col md={12} xs={12} className="text-white">
            <div className="banner-details ms-1">
              <h1 style={{ fontSize: '60px', letterSpacing: '4px' }}>NEW YEAR FILTER YOU</h1>
              <p style={{ letterSpacing: '3px' }} className='fs-4 mt-3'>Polygon | Jamis | Gaint</p>
              <button style={{ letterSpacing: '3px', backgroundColor: 'yellow', border: 'none' }} className='more rounded-1 px-4 py-2'>SHOP NOW</button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Header;
