import { useState, useEffect } from "react"
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
import TablaProductos from './componentes/TablaProductos';



const App = () => {

    const [productos, setProductos] = useState([])

    const mostrarProductos = async () => {

        const response = await fetch("api/producto/Lista")

        if (response.ok) {
            const data = await response.json();
            setProductos(data)
            console.log(data)
        } else {
            console.log("Error en la lista")
        }
    }

    useEffect(() => {
        mostrarProductos()
    },[])

    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de Productos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success">Nuevo Producto</Button>
                            <hr></hr>
                            <TablaProductos data={productos} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default App;
