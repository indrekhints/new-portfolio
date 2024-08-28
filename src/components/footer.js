import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const footerStyle = {
        background: 'linear-gradient(to right, #48494a, #77797a)', // Dark grey to light grey
        color: '#fff',
        padding: '20px 0',
        marginTop: '20px',
    };

    return (
        <footer style={footerStyle}>
            <Container>
                <Row>
                    <Col md={6}>
                        <p>&copy; 2024 By Indrek</p>
                    </Col>
                    {/* <Col md={6} className="text-md-end">
                        <img src="/images/icons.xcf" alt="Logo" style={{ width: '25%', marginLeft: "2%" }} />
                    </Col> */}
                    <Col md={6} className="text-md-end">
                        <p>Contact: hintsints@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
