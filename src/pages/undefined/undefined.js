import React from 'react';
import styles from './undefined.module.scss'

export const Undefined = () => {
            const obj = {
                a:0,
                b:"",
                c:"hello",
                d:false
            }
            const answers = {

                x1 : obj.length,
                x2 : 0&&"text",
                x3 : ""&&"text",
                x4 : "0"&&"text",
                x5 : 0?? "text"   ,
                x6 : "0" ??"text"   ,
                x7 : false ??"text"   ,
            }



    console.log(answers)

    return <div className={styles.undefined}>
        <h1>Undefined</h1>

        {  Object.entries(answers).map((item,i)=><div key={i}> {JSON.stringify(item)} </div>)}

    </div>
};
 