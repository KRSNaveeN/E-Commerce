

import Dummydata from "./dummydata";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

let data = [{name:"jjj"},{name:"jjjkkk"}];
const Cart = ()=>{

    return<Table size='md' responsive>

      <thead>

         <tr>
            <td>Item</td>
            <td>Price</td>
            <td>Quantity</td>
         </tr>
      </thead>
      <tbody>
      {
        Dummydata.map((item)=>{
            return (item['quantity'] && (<tr>
            <td><img style={{width:'40px'}} src={item.imageUrl}   alt="img"/>{item.title}</td>
            
            <td>{item.price}</td>
            <td>{1} <Button variant="danger"  >Remove</Button></td>
        </tr>))
        })
    }
      </tbody>
 
    
    </Table>
}
export default Cart;