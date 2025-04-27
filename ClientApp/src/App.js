import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
import TablaProductos from './componentes/TablaProductos';



const App = () => {

    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de Productos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button></Button>
                            <hr></hr>
                            <TablaProductos />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default App;
