
import { Table, Button } from 'reactstrap';


const TablaProductos = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarProducto }) => {

    const enviarDatos = (producto) => {
        setEditar(producto)
        setMostrarModal(!mostrarModal)
    }


    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center" }}>
                                No hay productos disponibles
                            </td>
                        </tr>
                    ) : (
                            data.map((item) => (
                                <tr key={item.id }>
                                    <td>{item.id }</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.precio}</td>
                                    <td>
                                        <Button color="primary" size="sm" className="me-2"
                                            onClick={() => enviarDatos(item)}>Editar</Button>
                                        <Button color="danger" size="sm"
                                            onClick={() => eliminarProducto(item.id)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))
                    )
                }
            </tbody>
        </Table>
    )
};

export default TablaProductos;
