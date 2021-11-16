import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
} from "reactstrap";

const data = [{
    id: 1,
    jugador: 'Leonel Andres Messi',
    dorsal: 30,
    equipo: 'Paros Saint-Ger Man'
},
{
    id: 2,
    jugador: 'Cristiano Ronaldo dos Santos Aveiro',
    dorsal: 7,
    equipo: 'Mancherter United'
},
{
    id: 3,
    jugador: 'Kilian Mbape',
    dorsal: 7,
    equipo: 'Paros Saint-Ger Man'
},
{
    id: 4,
    jugador: 'Erling Halan',
    dorsal: '7',
    equipo: 'Borissia Dormund'
},
{
    id: 5,
    jugador: 'Neymar Junior',
    dorsal: 10,
    equipo: 'Paros Saint-Ger Man'
},
{
    id: 6,
    jugador: 'Robert Lewandowski',
    dorsal: 9,
    equipo: 'Bayer Munich'
},
]

class App extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: '',
            jugador: '',
            dorsal: '',
            equipo: '',
        },
    };

    mostrarModalActualizar = (dato) => {
        this.setState({
            form: dato,
            modalActualizar: true,
        });
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true,
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
            if (dato.id == registro.id) {
                arreglo[contador].jugador = dato.jugador;
                arreglo[contador].dorsal = dato.dorsal
                arreglo[contador].equipo = dato.equipo;
            }
            contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };

    eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + dato.id);
        if (opcion == true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
                if (dato.id == registro.id) {
                    arreglo.splice(contador, 1);
                }
                contador++;
            });
            this.setState({ data: arreglo, modalActualizar: false });
        }
    };

    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.data.length + 1;
        var lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {

        return (
            <>
                <Container>
                    <br />
                    <Button color="success" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
                    <br />
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>jugador</th>
                                <th>dorsal</th>
                                <th>equipo</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato.id}>
                                    <td>{dato.id}</td>
                                    <td>{dato.jugador}</td>
                                    <td>{dato.dorsal}</td>
                                    <td>{dato.equipo}</td>
                                    <td>
                                        <Button
                                            color="primary"
                                            onClick={() => this.mostrarModalActualizar(dato)}
                                        >
                                            Editar
                                        </Button>{" "}
                                        <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>

                <Modal isOpen={this.state.modalActualizar}>
                    <ModalHeader>
                        <div><h3>Editar Registro</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label>
                                Id:
                            </label>

                            <input
                                className="form-control"
                                readOnly
                                type="text"
                                value={this.state.form.id}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                jugador:
                            </label>
                            <input
                                className="form-control"
                                name="jugador"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.jugador}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                dorsal:
                            </label>
                            <input
                                className="form-control"
                                name="dorsal"
                                type="number"
                                onChange={this.handleChange}
                                value={this.state.form.dorsal}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                equipo:
                            </label>
                            <input
                                className="form-control"
                                name="equipo"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.equipo}
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => this.editar(this.state.form)}
                        >
                            Editar
                        </Button>
                        <Button
                            color="danger"
                            onClick={() => this.cerrarModalActualizar()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>



                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar jugador</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label>
                                Id:
                            </label>

                            <input
                                className="form-control"
                                readOnly
                                type="text"
                                value={this.state.data.length + 1}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                jugador:
                            </label>
                            <input
                                className="form-control"
                                name="jugador"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                dorsal:
                            </label>
                            <input
                                className="form-control"
                                name="dorsal"
                                type="number"
                                onChange={this.handleChange}
                                value={this.state.form.dorsal}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                equipo:
                            </label>
                            <input
                                className="form-control"
                                name="equipo"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => this.insertar()}
                        >
                            Insertar
                        </Button>
                        <Button
                            className="btn btn-danger"
                            onClick={() => this.cerrarModalInsertar()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}
export default App;