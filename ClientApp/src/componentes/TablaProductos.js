
import { Table, Button } from 'reactstrap';


const TablaProductos = ({data}) => {


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
                                        <Button color="primary" size="sm" className="me-2">Editar</Button>
                                        <Button color="danger" size="sm">Eliminar</Button>
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
