import React from 'react';
import Calendar from './../../../images/calendar.png'
import Chat from './chat/Chat.js';
import Photo1 from "./../../../images/Photo1.png";
import Photo2 from "./../../../images/Photo2.png";
import Photo3 from "./../../../images/Photo3.png";


function RightBar()
{
    return(
        <div className='RightBar'>
            <div className='RightBarLine'>
                <p>Avril</p>
                <div>
                    <p>←</p>
                    <p>→</p>
                </div>
            </div>
            <img src={Calendar}/>
            <h2>Messagerie instantanée</h2>
            <Chat nom='Nathalie Parmentier' image={Photo1}/>
            <Chat nom='Edward Dupuis' image={Photo2}/>
            <Chat nom='Sophie Durant' image={Photo3}/>
        </div>
    );
}
export default RightBar;