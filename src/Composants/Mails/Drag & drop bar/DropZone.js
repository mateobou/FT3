import React, { useState, useContext } from 'react';
import {DragNDropContext} from './../../../useContext/NDragContext';
import Drop from './Drop';
import MailContext from './../../../useContext/MailModelContext';
function DropZone({number,color='defaultPad'})

{
    //let {DragElement, changeDragElement} = useContext(DragContext);

    const {items, addItem,dragItem,DroppedItems,updateDroppedItems} = useContext(DragNDropContext)
    
    let [Color, changeColor] = useState(color);
    console.log('number ; ' + number)
    
   
    return(
        <div className={color} 
        onDragOver={(e)=>{
            e.preventDefault()
            changeColor('hoverPad')
        }} 
        onDragLeave={(e)=>{
            e.preventDefault()
            changeColor('defaultPad')
        }} 
        /*onDrop={
            ()=>{
            //updateDroppedItems(SpliceReact(number,DroppedItems))
            let Liste = DroppedItems;
            Liste.splice(number,0,<Drop type={dragItem.type} el1={dragItem.data} number={number}/>)
            updateDroppedItems(Liste)
            console.log(Liste + ' Liste')
            addItem(dragItem)
            console.log(DroppedItems, 'Droppeditems')
            changeColor('defaultPad')
            
        }}*/
        >
           
    </div>
    );
}
export default DropZone;