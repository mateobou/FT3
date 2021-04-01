import React, { useState } from 'react';
import DropZone from './DropZone';
function Drop({type,el1,number,choice}){
    let [color,changeColor] = useState('defaultPad')
    if(choice !== "" && choice !==undefined)
    {
        return(
            <div onDragOver={()=>{changeColor('hoverPad')}} onDrop={()=>{changeColor('DefaultPad')}}>
                <DropZone id={'t'+number} number={number} color={color}/>
                <div>
                    <select>
                        <option>Please choose an option</option>
                        {choice.map(propositon=>
                            <option>{propositon}</option>
                            )}
                    </select>
                    <p>{el1}</p>
                </div>
                
            </div>
                    
        )
        
    }
    if(type === 'texte')
    {
        return(
            <div onDragOver={()=>{changeColor('hoverPad')}} onDrop={()=>{changeColor('DefaultPad')}}>
                <DropZone id={'t'+number} number={number} color={color}/>
                <div>
                    <p>{el1}</p>
                </div>
                
            </div>
        )
    }
    else if(type === 'image')
    {
        return(
            <div onDragOver={()=>{changeColor('hoverPad')}} onDrop={()=>{changeColor('DefaultPad')}}>
                <DropZone id={'t'+number} number={number} color={color}/>
                    <div>
                        <img src={el1}/>
                    </div>
                
            </div>
        )
    }
    
}
export default Drop;