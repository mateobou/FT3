import React, {useContext, useEffect, useState} from 'react'; 
import DragContext from '../../../useContext/DragContext';
import Drop from '../Drag & drop bar/Drop';
import './../../../App.css'
import MailContext from './../../../useContext/MailModelContext';
import {DragNDropContext} from './../../../useContext/NDragContext';
import Photo3 from "./../../../images/imageMail1.png";
function MailPage(){
    let {activeMail,changeActiveMail} = useContext(MailContext);
    let {DragElement, changeDragElement} = useContext(DragContext);
    let [texte, UpdateTexte] = useState('Drag&Droppez un élément ici !');
    let [Component, changeComponent] = useState();
    let [DropBool, changeDropBool] = useState(false);
    let [number, updateNumber] = useState(0); 
    let {items, addItem,dragItem,DroppedItems,updateDroppedItems} = useContext(DragNDropContext)
    let [Liste, updateListe] = useState(DroppedItems)
    /*useEffect(
        ()=>{
            if(Liste !== DroppedItems)
            {
                updateDroppedItems([...DroppedItems])
            }
        }
    )*/
    function DragOrNot()
    {
        if(DroppedItems.length !== 0)
        {
            return false;
        }
        else{
            return true;
        }
    }
    return(
        <div className='mailContainer'>
            <div className='MailPage' id='MailPage' onDragOver={(e)=>{e.preventDefault()}} onDrop={()=>{updateDroppedItems([...DroppedItems,<Drop type={dragItem.type} el1={dragItem.data} number={number} choice={dragItem.choice}/>])
                updateListe(DroppedItems);
                UpdateTexte('')
                addItem(dragItem)
                
            }} draggable={DragOrNot()}>
                <p>{activeMail}</p>

                <p /*onDragOver={(e)=>{e.preventDefault()}} onDrop={()=>{updateDroppedItems([...DroppedItems,<Drop type={dragItem.type} el1={dragItem.data} number={number} choice={dragItem.choice}/>])
                updateListe(DroppedItems);
                UpdateTexte('')
                addItem(dragItem)
                
            }} draggable={DragOrNot()}*/>{texte}</p>
                {DroppedItems}
                
            
            </div>
        </div>
        
    )
}
export default MailPage;