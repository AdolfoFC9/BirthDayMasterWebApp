import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import { Button, Row, Col, Table } from 'reactstrap'
import { GetPeople, SetSelectedPersona, DeletePerson } from '../state/reducers/peopleReducer.js';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useNavigate } from 'react-router'


import '../style/customStyle.css';
import { deletePerson } from '../state/api.js';

function ListaPersonas() {
    const { people } = useSelector((state) => state.people);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(GetPeople());
    }, [dispatch]);

    const renderPerson = (person) => {
        return (
            <tr>
                <td>
                    {person.primernombre}
                </td>
                <td>
                    {person.primerapellido}
                </td>
                <td>
                    {moment(person.fechadenacimiento).format("DD-MM-YYYY")}
                </td>
                <td>
                    <Button className='gjs-button' onClick={() => {

                        dispatch(SetSelectedPersona({
                            identificador: person.identificador,
                            primernombre: person.primernombre,
                            primerapellido: person.primerapellido,
                            fechadenacimiento: person.fechadenacimiento,
                        }));
                        navigate("/ActualizarPersona");
                    }}>Editar</Button>

                    <Button className='gjs-button' onClick={() => {

                        dispatch(DeletePerson({
                            identificador:person.identificador
                        }));
                        
                    }}>Eliminar</Button>
                </td>
            </tr>
        );

    }
    const renderPeople = () => {
        if (people.length > 0) {
            return (
                <>
                    {people.map(person => {
                        return renderPerson(person);
                    })}
                </>
            );
        } else {
            return <></>;
        }

    }

    return (
        <>
            <NavBar />
            <Row class="normal-text page-title">
            <h1 id="irjua" class="gjs-heading">Lista de Personas
            </h1>
            </Row>
            <Row>
                <Col>
                <p id="irjua2" class="normal-text">✨🎂Aquí podrá encontrar el catálogo completo de los cumpleañeros registrados. Además, tendrá la opción de modificar o eliminar un registro específico. 🎂✨<br />
                </p>
                    <Table striped class="fill-horizontal">
                        <thead>
                            <tr>
                                <th>
                                    Primer Nombre
                                </th>
                                <th>
                                    Primer Apellido
                                </th>
                                <th>
                                    Fecha de Nacimiento
                                </th><th>Actions</th>
                            </tr>

                        </thead>
                        <tbody>
                            {renderPeople()}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    );
};

export default ListaPersonas;