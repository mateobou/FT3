import React, {useContext, useEffect, useState} from 'react';
import {Mails,DragNDropBienvenu,dragD4} from './../../../BDD fictive/BDD';
import './../../../App.css';
import MailSelectionButton from './MaisSelectionButton';
import MailSearchBar from '../mailSearchBar/mailSearchBar';
import MailContext from './../../../useContext/MailModelContext';


function MailList()
{
   
    function TrueOrFalse(mail)//Changer le nom -> Est)ce que le modèle de mail est sélectionné ou pas ?
    {
        if (activeMail[0] == mail[2]) {
            return <MailSelectionButton Nom={mail[0]} Date={mail[1]} id={mail[2]} className='mailModelSelcted'/>
        }
        else
        {
            return <MailSelectionButton Nom={mail[0]} Date={mail[1]} id={mail[2]} className='MailSelectionButton'/> 
        }
    }
    let {activeMail,changeActiveMail} = useContext(MailContext);//Contex mail id
    useEffect(()=>{console.log(activeMail)})
    return(
        <>
            <MailSearchBar/>
            <div className='MailBar'> 
                {                    
                    Mails.map(mail=>TrueOrFalse(mail))
                }
            </div>
        </>
    )
}
export default MailList;