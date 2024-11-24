import { useNavigate } from 'react-router'
import { Button, Row, Col } from 'reactstrap'



function NavBar() {
    const navigate = useNavigate();

    return (
        <Row class="gjs-grid-row">
            <Col class="gjs-grid-column">
                <Button className='gjs-button' onClick={() => { navigate("/"); }}>Inicio</Button>
                <Button className='gjs-button' onClick={() => { navigate("/Cumpleaneros"); }}>Listado de Cumpleaneros del Mes</Button>
                <Button className='gjs-button' onClick={() => { navigate("/AgregarPersona"); }}>Agregar Persona</Button>
                <Button className='gjs-button' onClick={() => { navigate("/Personas"); }}>Listado de Personas</Button>
            </Col>

        </Row>
    )

}

export default NavBar;