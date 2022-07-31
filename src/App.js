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
import Data from "./Modules/Data";

const data = Data
class App extends React.Component {
  state = {
    data: data,
    createModal: false,
    updateModal: false,
    form: {
      id: '',
      jugador: '',
      dorsal: '',
      equipo: '',
    },
  };
  // Show ans hide Create Modal
  showcreateModal = () => {
    this.setState({
      createModal: true,
    });
  };

  hidecreateModall = () => {
    this.setState({ createModal: false });
  };
  // Show ans hide Update Modal
  showUpdateModal = (dato) => {
    this.setState({
      form: dato,
      updateModal: true,
    });
  };

  hideUpdateModal = () => {
    this.setState({ updateModal: false });
  };

  // Create new players 
  create = () => {
    var newValue = { ...this.state.form };
    newValue.id = this.state.data.length + 1;
    var newPlayersList = this.state.data;
    newPlayersList.push(newValue);
    this.setState({ createModal: false, data: newPlayersList });
  }

  // Update players list
  update = (updateData) => {
    var count = 0;
    var editList = this.state.data;
    editList.map((registro) => {
      if (updateData.id == registro.id) {
        editList[count].jugador = updateData.jugador;
        editList[count].dorsal = updateData.dorsal
        editList[count].equipo = updateData.equipo;
      }
      count++;
    });
    this.setState({ data: editList, updateModal: false });
  };

  //Delete register
  eliminar = (deleteData) => {
    var option = window.confirm("Estás Seguro que deseas Eliminar el elemento " + deleteData.id);
    if (option == true) {
      var count = 0;
      var playersList = this.state.data;
      playersList.map((register) => {
        if (deleteData.id == register.id) {
          playersList.splice(count, 1);
        }
        count++;
      });
      this.setState({ data: playersList, updateModal: false });
    }
  };

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
          <Button color="success" onClick={() => this.showcreateModal()}>Crear</Button>
          <br />
          <br />
          <Table striped bordered hover size="sm">
            <thead >
              <tr>
                <th>ID</th>
                <th>Jugador</th>
                <th>Dorsal</th>
                <th>Equipo</th>
                <th>Operaciones</th>
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
                      onClick={() => this.showUpdateModal(dato)}
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

        <Modal isOpen={this.state.updateModal}>
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
                Jugador:
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
                Dorsal:
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
                Equipo:
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
              onClick={() => this.update(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.hideUpdateModal()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.createModal}>
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
                Jugador:
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
                Dorsal:
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
                Equipo:
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
              onClick={() => this.create()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.hidecreateModall()}
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