import React, { useState } from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Zoom } from 'react-reveal';
import TraitsData from '../../Data/TraitsData';
import './Traits.css';

const Traits = () => {
    const [data, setData] = useState(TraitsData);
    return (
        <div className="main-container Traits-container fade-in-fwd" id="traits">
            {/* Traits header */}

            {/* added zoom in animation */}
            <Zoom>
                <div>
                    <h2 className="Traits-title text-center">Traits: Explained</h2>
                    <p className="text-center Traits-text">
                        Each ErgoSapien is generated programmatically using the various traits such as headgear, expression, color, and <br /> more. The rarer traits are defined
                        below
                    </p>
                </div>

                {/* Traits elements*/}
                <Container fluid>
                    <CardGroup>
                        <Row className="d-flex justify-content-evenly">
                            {data.map(item => (
                                <Col key={item.id} sm={10} md={3} lg={3}>
                                    <Card className="bg-transparent">
                                        <Card.Img className="Traits-card-img" variant="top" src={item.image} />
                                        <Card.Body className="Traits-card-body">
                                            <p className="card-title">{item.title}</p>
                                            <Card.Text>{item.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </CardGroup>
                </Container>
            </Zoom>
        </div>
    );
};

export default Traits;
