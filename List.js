

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

let array = [{

    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },{

        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]

function List() {
  return (
    <Container xs>
        <Row xs >
        {array.map((item)=>{
        return <Col  xs={{ span: 4, offset: 2}} style={{ marginBottom: '35px' }}>
           <h5>{item.title}</h5>
           <div><img style={{width:'170px', marginBottom: '15px' }} src={item.imageUrl} alt=""/></div>
           <div>
           <Row >
           <Col xs={3}>${item.price}</Col>
           <Col > <Button xs={6}>Add to Cart</Button></Col>
          
           </Row>
           </div>
         
        </Col>
      })}
        </Row>
     
     <Button style={{margin:'auto', display:'flex'}}>See the Cart</Button>
    </Container>
  );
}

export default List;