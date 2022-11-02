import React from 'react';

export const RenderProps = () => {
    return <>
        <h1>   render props  </h1>
         <DataProvider
             counter ={8}
             renderTop ={(items )=><ListMarkup items={items}/>}
             renderBottom ={(items )=><TableMarkup items={items}/>}
         />

    </>
};

const ListMarkup = ({items}) => {
     return <ul>
         {items.map((_ , key) =>  <li key={key}> {key}</li>)}
     </ul>
};

const TableMarkup = ({items}) => {
     return <table>
         <tbody>
             <tr >
                 {items.map((_ , key) =>  <td style={{border:"solid red 1px "}} key={key}> {key}</td>)}
             </tr>
         </tbody>
     </table>
};

const DataProvider = ({renderTop , renderBottom , counter})=>{
    const items = Array(counter).fill(0) // [0,0,0,0]
    return <>
        {renderTop(items)}
        <h2>компонент между пропсами  <br/> не позволяющий  их обьеденить </h2>
        {renderBottom(items)}
    </>
}