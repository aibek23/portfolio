import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const Portfolio = () => {
    return (
        <Container>
            <Row lg={3} md={2} cm={1} >
                <Col  >
                    <Card style={{ margin: '1rem 1rem' }} >
                        <Card.Img variant="top" src="https://images.wallpaperscraft.ru/image/mclaren_p1_krasnyj_sportkar_vid_sboku_109728_3840x2400.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ margin: '1rem 1rem' }} >
                        <Card.Img variant="top" src="https://images.wallpaperscraft.ru/image/mclaren_p1_krasnyj_sportkar_vid_sboku_109728_3840x2400.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ margin: '1rem 1rem' }} >
                        <Card.Img variant="top" src="https://images.wallpaperscraft.ru/image/mclaren_p1_krasnyj_sportkar_vid_sboku_109728_3840x2400.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
}
export default Portfolio;

