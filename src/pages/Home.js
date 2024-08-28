import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    const projectLinks = [
        'https://indrekhints.github.io/weather/',
        'https://indrekhints.github.io/reiceipe-new/',
        'https://indrekhints.github.io/work_team_app/',
        'https://indrekhints.github.io/quiz/',
    ];

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2 className="text-center">Projects!</h2>
                    <Carousel interval={3000} className="text-center">
                        {projectLinks.map((link, index) => (
                            <Carousel.Item key={index}>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="d-block w-100 h-100"
                                        src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`}
                                        alt={`Project ${index + 1} slide`}
                                    />
                                </a>
                                <Carousel.Caption>
                                    <h3>Project {index + 1}</h3>
                                    <p>Some text about Project {index + 1}.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
