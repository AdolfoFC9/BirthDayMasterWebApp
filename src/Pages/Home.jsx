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
                <p id="irjua1" class="normal-text">Birthday Master 🎉 es la app ideal para no olvidar un cumpleaños importante. Te permite ver fácilmente quiénes celebran su día especial cada mes, organizar tus contactos para estar siempre listo para felicitar y celebrar. ¡Haz de cada cumpleaños un momento inolvidable! 🎂✨<br />
                </p>
                <p id="irjua2" class="normal-text">Próximamente, podrás recibir notificaciones anticipadas para que te prepares de la mejor manera y celebres el día especial de esa persona querida.<br />
                </p>
            </Col>
        </Row>
    </>
  )
}

export default Home