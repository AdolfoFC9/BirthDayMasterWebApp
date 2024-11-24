import { useState } from 'react'
import '../App.css'
import '../custom.css'

import NavBar from '../components/NavBar.jsx';

import AgregarPersona from './AgregarPersona.jsx';
import ListaCumpleaneros from './ListaCumpleaneros.jsx';
import ListaPersonas from './ListaPersonas.jsx';
import { Button, Row, Col } from 'reactstrap'



function Home() {

  return (
    <>
      <NavBar />
      <Row class="gjs-grid-row">
            <Col class="gjs-grid-column">
                <h1 id="irjua" class="gjs-heading">Birthday Master
                </h1>
                <p id="itndw" class="text-main-content">Birthday Master 🎉 es la app perfecta para nunca olvidar un cumpleaños importante. Te permite ver fácilmente quiénes celebran su día especial cada mes, organizar tus contactos y recibir recordatorios para estar siempre listo para felicitar y celebrar. ¡Haz de cada cumpleaños un momento inolvidable! 🎂✨<br />
                </p>
            </Col>
        </Row>
    </>
  )
}

export default Home