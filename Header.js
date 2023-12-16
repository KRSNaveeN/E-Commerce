import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Header = ()=>{
    console.log("header");
    return <>
    <Container >
    <Row style={{backgroundColor:'black', color:'white' }}>
        <Col xs={4}>
          
        </Col>
        <Col xs={4}>
            <Row>
            <Col>HOME</Col>
            <Col>STORE</Col>
            <Col>ABOUT</Col>
            </Row>
            
        </Col>
        <Col  xs={{ span: 1, offset: 3}}>
            Cart(0)
        </Col>
    </Row>
    </Container>

     
    </>
}
export default Header;