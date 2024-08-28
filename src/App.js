import React, { useState } from 'react';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/footer';

const App = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <HashRouter basename='/'>
      <Navbar bg="light" expand="md" style={{ padding: '5px 10px', borderRadius: '10px' }}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="Logo" style={{ width: '25%', marginLeft: "2%" }} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>
      <Footer style={{ backgroundColor: '#add8e6' }} />
    </HashRouter>
  );
};

export default App;
