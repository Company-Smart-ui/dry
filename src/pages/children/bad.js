
import React from 'react';
import {CardHeader} from "./cardHeader/cardHeader";
import {CardFooter} from "./cardFooter/cardFooter";
import {CardContent1, CardContent2} from "./cardContent";

 const Bad1 = () =>  <div className={"card"}>
    <CardHeader/>
        < CardContent1/>
    <CardFooter/>
    </div>


  const Bad2 = () =>   <div className={"card"}>
    <CardHeader/>
        < CardContent2/>
    <CardFooter/>
    </div>


  const Bad3 = () =>  <div className={"card"}>
        <CardHeader/>
      just text
        <CardFooter/>
    </div>



export const Bad = ()=>{
    return <>
        <Bad1/>
        <Bad2/>
        <Bad3/>
    </>
}