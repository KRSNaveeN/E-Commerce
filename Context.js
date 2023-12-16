import React from 'react';
import { useState,useEffect } from 'react';
import Dummydata from '../Cart/dummydata';

     let Context = React.createContext({listitems:[], cartTotal : 0, dataCollect: ()=>{}, addtoCart : ()=>{},data: 0, setCarttotal : ()=>{}});

     export default Context;

     export let Auth = (props)=>{

    const [ listitems, setlistItems] = useState([]);
    let [cartTotal, setCarttotal] = useState(0);

    useEffect(()=>{ return setlistItems(Dummydata)},[]);



    function addtoCart(item){

        setCarttotal((pre)=>pre+1);
       
        console.log(cartTotal);
        let index = listitems.findIndex((eachitem)=> eachitem.title === item.title);
        let updatedArray = [...listitems];
        updatedArray[index] = {...updatedArray[index] ,  quantity : updatedArray[index].quantity -1 , count : updatedArray[index].count + 1  };
        setlistItems(updatedArray);
    };

    

    const [data, dataCollect] = useState(0);

        return <Context.Provider value={{listitems : listitems,setCarttotal:setCarttotal, cartTotal:cartTotal, dataCollect:dataCollect, addtoCart:addtoCart,data : data}} >
        {props.children}
        </Context.Provider>
     }
