import React, {useState, useContext, useEffect} from 'react';
import './../../../App.css';
import MailContext from './../../../useContext/MailModelContext';
function MailSelectionButton({Nom, Date, id, className='MailSelectionButton'})
{
    let {activeMail,changeActiveMail} = useContext(MailContext);
    let [classStyle, changeStyle] = useState(className);
    useEffect(()=>{
        if(activeMail === id)
        {
            changeStyle('mailModelSelcted')
            console.log(id + ': ' +activeMail)
            
        }
        else
        {
            changeStyle('MailSelectionButton')
        }
    })
        
    return(
        <div className={classStyle} onClick={()=>{
            //document.getElementById(activeMail).classList = 'MailSelectionButton';
            changeActiveMail(id);
            changeStyle('mailModelSelcted');
            
            }} id={id}>
            <p><strong>{Nom}</strong></p>
            
            <p>{Date}</p>
        </div>
    )        
}
export default MailSelectionButton;