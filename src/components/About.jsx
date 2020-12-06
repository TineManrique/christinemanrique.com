import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Title from './Title';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <section id="about">
            <Container>
                <Title title="About Her" />
                <Fade top={true} duration={1000} delay={500} distance="30px">
                <Row>
                    <Col lg={3} md={6} sm={12} className="mt-4">
                        <Card style={{ height: "100%"}}>
                            <Card.Header>Certifications</Card.Header>
                            <Card.Body>
                                <Card.Title>AWS Certified Cloud Practioner</Card.Title>
                                <div className="aws-badge"
                                data-iframe-width="150" data-iframe-height="270" 
                                data-share-badge-id="79aa81b8-3365-4aa9-9029-6fe887dd83b6" 
                                data-share-badge-host="https://www.youracclaim.com"></div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="mt-4">
                        <Card style={{ height: "100%"}}>
                            <Card.Header>Front End</Card.Header>
                            <Card.Body>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>Bootstrap</li>
                                    <li>Angular 5+</li>
                                    <li>RxJS Operators</li>
                                    <li>Ngrx Store</li>
                                    <li>React JS</li>
                                    <li>Redux</li>
                                    <li>Cypress Testing</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="mt-4">
                        <Card style={{ height: "100%"}}>
                            <Card.Header>Back End</Card.Header>
                            <Card.Body>
                                <ul>
                                    <li>PHP</li>
                                    <li>Zend Framework</li>
                                    <li>Node JS</li>
                                    <li>Express</li>
                                    <li>Python</li>
                                    <li>Django</li>
                                    <li>REST API</li>
                                    <li>MySQL</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="mt-4">
                        <Card style={{ height: "100%"}}>
                            <Card.Header>Others</Card.Header>
                            <Card.Body>
                                <ul>
                                    <li>Agile Development</li>
                                    <li>Jira</li>
                                    <li>Bitbucket</li>
                                    <li>Adobe Photoshop</li>
                                    <li>Adobe Premiere</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Fade>
            </Container>
        </section>
    )
}

export default About;
