import React from 'react';
import styles from './children.module.scss'
import {Bad } from "./bad";
import {Good} from "./good";

export const Dry = () => {

    return <div className={styles.dry}>
            <h1> DRY </h1>
        <Bad/>
        <Good/>
    </div>
};
