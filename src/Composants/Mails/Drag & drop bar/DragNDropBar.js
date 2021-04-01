import React, {useEffect, useContext, useState} from 'react';
import {Mails,DragNDropBienvenu, dragD4} from './../../../BDD fictive/BDD';
import DragComponent from './DragComponent';
import MailContext from './../../../useContext/MailModelContext';
import { act } from 'react-dom/test-utils';
function DragNDropBar(){
    let {activeMail,changeActiveMail} = useContext(MailContext);//Contex mail id
    let [data, changeData] = useState(dragD4);
    let [count, changeCount] = useState(0);
    useEffect(()=>{
        if(activeMail ==='Mailnouveaumodule')
        {
            changeData(DragNDropBienvenu);
            console.log(DragNDropBienvenu);
        }
        else if(activeMail!=='Mailnouveaumodule' &&activeMail!=='')
        {
            changeData(dragD4);
        }
    })
    return(
        <div className='DragNDropBar'>
            {
            console.log(data),
            data.map(drag=><DragComponent Name={drag.Nom} data={drag.contenu} type={drag.type} choice={drag.choixMultiple.choix}/>)
            }
        </div>
    );

       
}
export default DragNDropBar;