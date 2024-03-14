import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Cards(prop) {
    return (
        <div>
            <h1></h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {prop.data.platos.map((platos, idx) => (
                    <Col key={idx}>
                        <Card border="" className="bg-success text-white" style={{ textAlign : 'center'}} >
                            <Card.Header  >
                            <small className="text-light">{platos.categoria}</small>
                            </Card.Header>
                            <Card.Img variant="top" src={platos.image}/>
                            <Card.Body>
                                <Card.Title>{platos.nombre}</Card.Title>
                                <Card.Text>
                                    {platos.descripcion}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                            <small className="text-light" >Precio:  $ {platos.precio}</small>
                            
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Cards;