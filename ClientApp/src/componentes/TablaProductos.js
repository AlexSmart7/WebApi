import React from 'react';
import { Table } from 'reactstrap';


const TablaProductos = () => {


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
                <tr>
                    <td colSpan="4" style={{ textAlign: "center" }}>
                        No hay productos disponibles
                    </td>
                </tr>
            </tbody>
        </Table>

    )
};

export default TablaProductos;
