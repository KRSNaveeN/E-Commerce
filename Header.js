import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Example from './Cart/Offcanvas';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

const Header = ()=>{
    console.log("header");
    function clickHandler(){

    }
    return <>
    <Container >
    <Row style={{backgroundColor:'black', color:'white' }}>
        <Col xs={4}>
          
        </Col>
        <Col xs={4}>
            <Row>
            <Col><NavLink to='/'>HOME</NavLink></Col>
            <Col>STORE</Col>
            <Col><NavLink to='/about' className={(isActive)=>{(isActive ? "classes.active" : " ")}}>ABOUT</NavLink></Col>
            </Row>
            
        </Col>
        <Col onClick={clickHandler} xs={{ span: 1, offset: 3}}>
            <Example  placement="top" name = "end"/>
        </Col>
    </Row>
    </Container>

     
    </>
}
export default Header;