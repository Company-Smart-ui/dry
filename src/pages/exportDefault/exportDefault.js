import React from 'react';
import  styles from './exportDefault.module.scss'
import {data} from "./data";
import Batimpart123 from "./bad";
import {Good} from "./good";
import  Sub from "./subItems"

export const ExportDefault = () => {

    return <div className={styles.exportDefault}>
                <h1> export default </h1>


        <Batimpart123/>
        <Good/>
            <Sub.SubItem1/>
            <Sub.SubItem2/>

        <br/><br/><br/> <br/><br/><br/>

        <div dangerouslySetInnerHTML={{__html:data}}/>
        <a href="https://medium.com/@Brisstor/%D0%BF%D0%BE%D1%87%D0%B5%D0%BC%D1%83-%D0%BC%D1%8B-%D0%BE%D1%82%D0%BA%D0%B0%D0%B7%D0%B0%D0%BB%D0%B8%D1%81%D1%8C-%D0%BE%D1%82-export-default-%D0%B2-javascript-%D0%B8-%D0%B2%D0%B0%D0%BC-%D1%81%D0%BB%D0%B5%D0%B4%D1%83%D0%B5%D1%82-%D0%BF%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B8%D1%82%D1%8C-%D1%82%D0%B0%D0%BA%D0%B6%D0%B5-cce6ac30d67b"> источник</a>
    </div>
};
 