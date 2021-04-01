import React from 'react';
function Chat({nom,image})
{
    return(
        <div className="chat">
            <div className="chatLine">
                <img src={image}/>
                <div className='chatColumn'>
                    <h2>{nom}</h2>
                    <p>Nouveau message</p>
                </div>
            </div>
            <div className="greenCircle"></div>
        </div>
    );
} 
export default Chat;