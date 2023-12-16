
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from "react";
import Context from "../Store/Context";


const Cart = ()=>{
    let ctx = useContext(Context);
    const [data, setData] = useState([]);
    useEffect(()=>{setData(ctx.listitems)},[])

    function deleteHandler(x){
console.log("btn clicked");
     let index = data.findIndex((eachitem)=>eachitem.title === x.title);
     
     let updatearray = [...data];
     updatearray[index] = {...updatearray[index], count : Number(updatearray[index].count) - 1 }
     setData(updatearray);
     ctx.setCarttotal((pre)=>pre-1);
    }

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
        data.map((item)=>{
            return ( item.count>0 && (<tr key={Math.random()}>
            <td><img style={{width:'40px'}} src={item.imageUrl}   alt="img"/>{item.title}</td>
            
            <td>{item.price}</td>
            <td>{item.count} <Button variant="danger" onClick={()=>{deleteHandler(item)}} >Remove</Button></td>
        </tr>))
        })
    }
      </tbody>
 
    
    </Table>
}
export default Cart;