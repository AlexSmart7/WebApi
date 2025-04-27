import { useState, useEffect } from "react"
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
import ModalProducto from "./componentes/ModalProducto";
import TablaProductos from './componentes/TablaProductos';



const App = () => {

    const [productos, setProductos] = useState([])

    const [mostrarModal, setMostrarModal] = useState(false)

    const [editar, setEditar] = useState(null)

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
    }, [])

    const guardarProducto = async (producto) => {

        if (!producto.nombre || producto.nombre.trim() === "" || !producto.precio) {
            alert("Todos los campos son obligatorios");
            return;
        }

        const response = await fetch("api/producto/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(producto)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarProductos();
        }
    }

    const editarProducto = async (producto) => {

        const response = await fetch("api/producto/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(producto)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarProductos();
        }

    }

    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de Productos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success"
                                onClick={() => setMostrarModal(!mostrarModal)}
                            >Nuevo Producto</Button>
                            <hr></hr>
                            <TablaProductos data={productos}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal }
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <ModalProducto
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarProducto={guardarProducto}

                editar={editar}
                setEditar={setEditar}
                editarProducto={editarProducto }
            />
        </Container>
    )
}

export default App;
