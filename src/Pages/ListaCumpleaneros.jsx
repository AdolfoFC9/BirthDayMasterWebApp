import NavBar from '../components/NavBar.jsx';
import { Button, Row, Col, Table, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { GetPeopleMonth } from '../state/reducers/peopleReducer.js';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import React, { useEffect, useState } from 'react';


function ListaCumpleaneros() {

    const { peopleMonth } = useSelector((state) => state.people);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mes, setMes] = useState(moment().format("M"));

    const dispatch = useDispatch();
    const toggle = () => setDropdownOpen(!dropdownOpen);

    React.useEffect(() => {
        setDropdownOpen(false);
        dispatch(GetPeopleMonth({
            params: {
                month: mes
            }
        }));
    }, [dispatch, mes]);

    const renderDropdown = () => {
        return (
            <>
                <Row>
                    <Button onClick={() => toggle()}>Seleccionar Mes</Button>
                </Row>
                {dropdownOpen ? <>
                <Button onClick={() => { setMes(1)}}>Enero</Button>
                <Button onClick={() => { setMes(2)}}>Febrero</Button>
                <Button onClick={() => { setMes(3)}}>Marzo</Button>
                <Button onClick={() => { setMes(4)}}>Abril</Button>
                <Button onClick={() => { setMes(5)}}>Mayo</Button>
                <Button onClick={() => { setMes(6)}}>Junio</Button>
                <Button onClick={() => { setMes(7)}}>Julio</Button>
                <Button onClick={() => { setMes(8)}}>Agosto</Button>
                <Button onClick={() => { setMes(9)}}>Septiembre</Button>
                <Button onClick={() => { setMes(10)}}>Octubre</Button>
                <Button onClick={() => { setMes(11)}}>Noviembre</Button>
                <Button onClick={() => { setMes(12)}}>Diciembre</Button>
                </> : <></>}
            </>

        );
    };

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
            </tr>
        );

    }
    const renderPeople = () => {
        if (peopleMonth.length > 0) {
            return (
                <>
                    {peopleMonth.map(person => {
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
            <h1 id="irjua" class="gjs-heading">Lista de Cumpleañeros
            </h1>
            </Row>

            <Row>

                <Col>

                    <p id="irjua2" class="normal-text">Aquí podrá visualizar la lista de cumpleañeros según el mes que seleccione. Por defecto, se mostrarán los cumpleañeros del mes actual.🎂✨<br />
                    </p>
                    {renderDropdown()}

                    <Table striped class="fill-horizontal">
                        <thead>
                            <tr>
                                
                                    Monstrando los cumpleaneros de {moment(mes, "M").format("MMMM")}
                               
                                
                            </tr>

                        </thead>
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

export default ListaCumpleaneros;