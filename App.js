
import Container from 'react-bootstrap/esm/Container';
import Header from './Components/Header';
import List from './Components/List';
import Cart from './Components/Cart/Cart';
import Example from './Components/Cart/Offcanvas';
import { useState } from 'react';

function App() {
  
  return (<Container >
       <Header/>
       <div style={{height:'40px', textAlign:'center', padding:'30px', backgroundColor:'grey'}}>The Generics</div>
       <List />
  </Container>
  );
}


export default App;
