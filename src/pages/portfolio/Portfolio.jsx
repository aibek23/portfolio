import React from "react";
import Todolist from "../../components/todolist/Todolist";
import { DranNDrop } from "../../components/dranNDrop/DranNDrop"
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import imgReactDnD from "../../img/png/reactDnD.png";
import ToDoList from "../../img/png/todolist.png";
import Calculatorpng from "../../img/png/calculation.png";
import Calculator from "../../components/calculator/Calculator"
import { Route, Switch, Redirect } from 'react-router-dom';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DnD: false, ToDo: false
        }
        // this.handleClick = this.handleClick.bind(this);
    }



    render() {
        return (
            <Container>
                <Route exact path="/portfolio/todo">
                    <Todolist />
                </Route>
                <Route exact path="/portfolio/reactDnD">
                    < DranNDrop />
                </Route>
                <Route exact path="/portfolio/calculator">

                    <Calculator />

                </Route>
                <Route exact path="/portfolio">



                    {/* {this.state.DnD ? < DranNDrop props={this.handleClick} /> : " "}
            {this.state.ToDo ? <Todolist props={this.handleClick} /> : " "} */}
                    < Row lg={3} md={2} cm={1} >

                        <Col lg  >
                            <Card style={{ margin: '1rem 1rem' }} >
                                <Card.Img variant="top" src={ToDoList} style={{ width: "251" }} />
                                <Card.Body variant="bottom">
                                    <Card.Title style={{ marginTop: "27px" }}>игра на react-ToDo</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <a className="btn btn-primary" href="#/portfolio/todo">off</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col mb >
                            <Card style={{ margin: '1rem 1rem' }} >
                                <Card.Img variant="top" src={imgReactDnD} />
                                <Card.Body>
                                    <Card.Title>игра на react-DnD</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <a className="btn btn-primary" href="#/portfolio/reactDnD">off</a>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>
                            <Card style={{ margin: '1rem 1rem' }} >
                                <Card.Img variant="top" src={Calculatorpng} />
                                <Card.Body>
                                    <Card.Title style={{ marginTop: "38px" }}>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <a className="btn btn-primary" href="#/portfolio/calculator">off</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ margin: '1rem 1rem' }} >
                                <Card.Img variant="top" src="https://c.wallhere.com/photos/d6/ec/kingfisher_fish_catch-659399.jpg!s" />
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
                    </Row >
                </Route>
            </Container >
        );
    }
}
export default Portfolio;

