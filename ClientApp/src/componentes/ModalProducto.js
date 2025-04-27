import { useEffect, useState } from 'react'
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, ModalFooter, Button } from 'reactstrap'

const modeloProducto = {
    id: 0,
    nombre: "",
    precio: 0
}

const ModalProducto = ({mostrarModal, setMostrarModal, guardarProducto, editar, setEditar, editarProducto }) => {


    const [producto, setProducto] = useState(modeloProducto)

    const actualizarDato = (e) => {
        console.log(e.target.name + ":" + e.target.value)
        setProducto(
            {
                ...producto,
                [e.target.name] : e.target.value
            }
        )
    }

    const enviarDatos = () => {
        if (producto.id == 0) {
            guardarProducto(producto)
        } else {
            editarProducto(producto)
        }
        setProducto(modeloProducto)
    }

    useEffect(() => {
        if (editar != null) {
            setProducto(editar)
        } else {
            setProducto(modeloProducto)
        }
    },[editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }


    return (

        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {producto.id == 0 ? "Registar Producto" : "Editar Producto"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizarDato(e)} value={producto.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Precio</Label>
                        <Input name="precio" onChange={(e) => actualizarDato(e)} value={producto.precio} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>

    )
}

export default ModalProducto;