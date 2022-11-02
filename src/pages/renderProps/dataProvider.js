import React, {useEffect, useState} from 'react';


export const DataProvider = ({renderProp , url}) => {

 const [data , setData]=useState([]);

 useEffect(()=>{
   fetch(url)
       .then((response)=>response.json())
       .then((json)=>{
        setData(json)
       })
 },[url])
 return<> {renderProp(data)}</>
};

