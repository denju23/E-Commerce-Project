import React from 'react';
import Banner from './Banner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Home() {
    return (
        <React.Fragment>
            <br /><br />
            <h1 style={{ textAlign: 'center' }}>Home Page</h1>
            <Banner />
            <br />
            <h3 style={{textAlign:'center'}}>Our Products</h3>
            <br/>
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/images/6.jpg" />
                            <Card.Body>
                                <Card.Title>Top</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item style={{textDecoration:'line-through'}}> $ 320</ListGroup.Item>
                                <ListGroup.Item>$250</ListGroup.Item> 
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#"><button>Add To Cart</button></Card.Link>
                                <Card.Link href="#"><button>View Product</button></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/images/8.jpg" />
                            <Card.Body>
                                <Card.Title>Skirt</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item style={{textDecoration:'line-through'}}> $ 320</ListGroup.Item>
                                <ListGroup.Item>$250</ListGroup.Item> 
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#"><button>Add To Cart</button></Card.Link>
                                <Card.Link href="#"><button>View Product</button></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/images/3.jpg" />
                            <Card.Body>
                                <Card.Title>T-Shirt</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item style={{textDecoration:'line-through'}}> $ 320</ListGroup.Item>
                                <ListGroup.Item>$250</ListGroup.Item> 
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#"><button>Add To Cart</button></Card.Link>
                                <Card.Link href="#"><button>View Product</button></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
                <br />
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/images/17.jpg" />
                            <Card.Body>
                                <Card.Title>Jwellery</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item style={{textDecoration:'line-through'}}> $ 320</ListGroup.Item>
                                <ListGroup.Item>$250</ListGroup.Item> 
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#"><button>Add To Cart</button></Card.Link>
                                <Card.Link href="#"><button>View Product</button></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/images/12.jpg" />
                            <Card.Body>
                                <Card.Title>Watches</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item style={{textDecoration:'line-through'}}> $ 320</ListGroup.Item>
                                <ListGroup.Item>$250</ListGroup.Item> 
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#"><button>Add To Cart</button></Card.Link>
                                <Card.Link href="#"><button>View Product</button></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/images/14.jpg" />
                            <Card.Body>
                                <Card.Title>Sandals</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item style={{textDecoration:'line-through'}}> $ 320</ListGroup.Item>
                                <ListGroup.Item>$250</ListGroup.Item> 
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#"><button>Add To Cart</button></Card.Link>
                                <Card.Link href="#"><button>View Product</button></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br /><br /><br /><br /><br /><br /><br />
        </React.Fragment>
    )
}

export default Home;