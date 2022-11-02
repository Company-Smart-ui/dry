import React from 'react';

import {CardFooter} from "./cardFooter/cardFooter";
import {CardContent1, CardContent2} from "./cardContent";
import {CardHeader} from "./cardHeader/cardHeader";

export const Good = ( ) => {

    return <div  >
        <CardWrapper>    <CardContent1/>   </CardWrapper>
        <CardWrapper>    <CardContent2/>   </CardWrapper>
        <CardWrapper>    just text  </CardWrapper>
    </div>
};


const CardWrapper  = ({children})=><div className={"card"}>
    <CardHeader/> {children} <CardFooter/>
</div>
