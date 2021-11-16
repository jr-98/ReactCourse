import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormGroup
} from 'reactstrap';
import './App.css';

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
    form: {
      id: '',
      jugador: '',
      dorsal: '',
      equipo: '',
    },

    // control de apertura del modal
    insert_modal: false,
    edit_modal: false,
  }

  hadleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  //insertar
  showInsertModal = () => {
    this.setState({ insert_modal: true });
  }
  hideInsertModal = () => {
    this.setState({ insert_modal: false });
  }
  //modificar
  showEditModal = (registro) => {
    this.setState({ form: registro, edit_modal: true });
  }
  hideEditModal = () => {
    this.setState({ edit_modal: false });
  }

  // Fin control de apertura del modal
  insertVal = () => {
    var newValue = { ...this.state.form };
    newValue.id = this.state.data.length + 1;
    var listInsert = this.state.data;
    listInsert.push(newValue);
    this.setState({ data: listInsert, insert_modal: false });
  };
  //Funcion editar
  editVal = (registro) => {
    var count = 0;
    var listEdit = this.state.data;
    listEdit.map((reg) => {
      if (registro.id == reg.id) {
        listEdit[count].jugador = registro.jugador;
        listEdit[count].dorsal = registro.dorsal;
        listEdit[count].equipo = registro.equipo;
      }
      count++;
    });
    this.setState({ data: listEdit, edit_modal: false });
  };

  render() {
    return (
      <>
        <Container>
          <br />
          <Button color='success' onClick={() => this.showInsertModal()}> Ingresar un nuevo jugador </Button>
          <br />

          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Dorsal</th>
                <th>Equipo</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.data.map((elemento) => (
                  <tr>
                    <td>{elemento.id}</td>
                    <td>{elemento.jugador}</td>
                    <td>{elemento.dorsal}</td>
                    <td>{elemento.equipo}</td>
                    <td>
                      <Button color='primary' onClick={() => this.showEditModal(elemento)}>Editar</Button>
                      <Button color='danger' >Eliminar</Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.insert_modal}>
          <ModalHeader>
            <div>
              <h3>Insertar un nuevo jugador</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <input className='input-form-control'
                readOnly
                type='text'
                value={this.state.data.length + 1} />
            </FormGroup>

            <FormGroup>
              <label>Jugador: </label>
              <input className='input-form-control'
                name='jugador' type='text'
                onChange={this.hadleChange} />
            </FormGroup>

            <FormGroup>
              <label>Dorsal: </label>
              <input className='input-form-control'
                name='dorsal'
                type='number'
                onChange={this.hadleChange} />
            </FormGroup>

            <FormGroup>
              <label>Equipo: </label>
              <input className='input-form-control'
                name='equipo'
                type='text'
                onChange={this.hadleChange} />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color='primary' onClick={() => this.insertVal()}>Insertar</Button>
            <Button color='danger' onClick={() => this.hideInsertModal()}>Cancelar</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.edit_modal}>
          <ModalHeader>
            <div>
              <h3>Modificar registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <input className='input-form-control'
                readOnly
                type='text'
                value={this.state.form.id} />
            </FormGroup>

            <FormGroup>
              <label>Jugador: </label>
              <input className='input-form-control'

                name='jugador'
                type='text'
                onChange={this.handleChange}
                value={this.state.form.jugador} />
            </FormGroup>

            <FormGroup>
              <label>Dorsal: </label>
              <input className='input-form-control'
                name='dorsal'
                type='number'
                onChange={this.handleChange}
                value={this.state.form.dorsal} />
            </FormGroup>

            <FormGroup>
              <label>Equipo: </label>
              <input className='input-form-control'
                name='equipo'
                type='text'
                onChange={this.handleChange}
                value={this.state.form.equipo} />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color='primary' onClick={() => { this.editVal(this.state.form) }}>Editar</Button>
            <Button color='danger' onClick={() => { this.hideEditModal() }}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;