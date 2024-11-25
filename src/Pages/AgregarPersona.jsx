import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar.jsx';
import { Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import {InsertUpdatePeople} from '../state/reducers/peopleReducer.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router'


function AgregarPersona() {
    const navigate = useNavigate();
    const { request } = useSelector((state) => state.people);
    const [primerNombreValido, setPrimerNombreValido] = useState(true);
    const [primerApelldioValido, setPrimeApellidoValido] = useState(true);
    const [fechaNacimientoValido, setFechaNacimientoValido] = useState(true);

    const [primerNombre, setPrimerNombre] = useState("");
    const [primerApellido, setPrimerApellido] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if(request == 200){
            navigate("/Personas");
        }
    })
    
    function processInsert() {
        if (!validateFields()) {
            console.log("No puedo mandar el request porque hay campos incorreectos");
        }
        else {
            dispatch(InsertUpdatePeople({
                person:{
                    primernombre: primerNombre,
                    primerapellido: primerApellido,
                    fechadenacimiento: fechaNacimiento
                }
            }));
            
            //console.log("Estoy listo para hacer el dispatch");
        }
    }

    function validateFields() {
        let result = true;
        if (primerNombre.length == 0 || primerNombre.length > 50) {
            setPrimerNombreValido(false);
            result = false;
        }
        else {
            setPrimerNombreValido(true);
        }
        if (primerApellido.length == 0 || primerApellido.length > 50) {
            setPrimeApellidoValido(false);
            result = false;
        }
        else {
            setPrimeApellidoValido(true);
        }
        if (fechaNacimiento == "") {
            setFechaNacimientoValido(false);
            result = false;
        }
        else {
            setFechaNacimientoValido(true);
        }
        return result;
    }
    //console.log(fechaNacimiento);

    return (
        <>
            <NavBar />
            {request == -1 || request == 200 ? request == 200 ? <Label>Se inserto el registro exitosamente</Label> : <></> : <Label>No se pudo insertar el registro.  Error {request}</Label>}
            <Row class="gjs-grid-row">
                <Col class="gjs-grid-column">
                    <h1 id="irjua" class="gjs-heading">Agregar Personas
                    </h1>
                    <p id="irjua2" class="normal-text">✨🎂Aquí podrá ingresar nuevos cumpleañeros al catalogo para futuras referencias. 🎂✨<br />
                    </p>
                    <Form>
                        <FormGroup>
                            <Label for="primerNombre">
                                Primer Nombre
                            </Label>
                            <Input
                                id="primerNombre"
                                name="primerNombre"
                                placeholder="Ingrese el Primer Nombre"
                                type="text"
                                value={primerNombre}
                                onChange={(e) => { setPrimerNombre(e.target.value) }}
                            />
                            {!primerNombreValido ? <Label for="primerNombre">
                                El Primer Nombre es Obligatorio y no puede exceder 50 caracteres
                            </Label> : <> </>}

                        </FormGroup>
                        <FormGroup>
                            <Label for="primerApellido">
                                Primer Apellido
                            </Label>
                            <Input
                                id="primerApellido"
                                name="primerApellido"
                                placeholder="Ingrese el Primer Apellido"
                                type="text"
                                value={primerApellido}
                                onChange={(e) => { setPrimerApellido(e.target.value) }}
                            />
                            {!primerApelldioValido ? <Label for="primerApellido">
                                El Primer Apellido es Obligatorio y no puede exceder 50 caracteres
                            </Label> : <> </>}
                        </FormGroup>
                        <FormGroup>
                            <Label for="fechaNacimiento">
                                Fecha de Nacimiento
                            </Label>
                            <Input
                                id="fechaNacimiento"
                                name="fechaNacimiento"
                                placeholder="Ingrese Fecha de Nacimiento"
                                type="date"
                                value={fechaNacimiento}
                                onChange={(e) => { setFechaNacimiento(e.target.value) }}
                            />
                            {!fechaNacimientoValido ? <Label for="fechaNacimiento">
                                No has seleccionado una fecha
                            </Label> : <> </>}
                        </FormGroup>
                    </Form>
                    <Button className='gjs-button' onClick={() => { processInsert(); }}>Guardar</Button>
                </Col>

            </Row>
        </>
    );
};

export default AgregarPersona;