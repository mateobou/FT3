import React, { useContext, useState } from 'react';
import DragContext from '../../../useContext/DragContext';
import {Mails,DragNDropBienvenu,dragD4} from './../../../BDD fictive/BDD';
import {DragNDropContext} from './../../../useContext/NDragContext';

function DragComponent({Name,data,type,choice}){
    let [texte, changeTexte] = useState(Name);
    let [Component, updateComponent] = useState({'type':'texte','el1':'hello'})
    const {items, addItem ,addDragItem} = useContext(DragNDropContext)
    return(
        <div className='DragComponent' draggable={true} onDrag={()=>{
            addDragItem({'name':Name,'data':data,'type':type,'choice':choice})
            console.log("choice "+choice)
            }}>
            <p>{texte}</p>
        </div>
    );
}
export default DragComponent;