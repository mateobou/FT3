import React from 'react';
import Calendar from './../../../images/calendar.svg'
import ProgressBar from './ProgressBar';
import Arrow from './../../../images/Arrow.png'

function Firm({FirmName,progress})
{
    return(
        <div className="Firm">
            <ProgressBar progression={progress}/>
            <div className="FirmColumn">
                <h2>{FirmName}</h2>
                <p>Dernier rendez-vous pris  le 22 février 2021</p>
                <div className='FirmCircle'>
                    <img src={Calendar}/>
                </div>
            </div>
            <img src={Arrow}/>
        </div>
    );
}
export default Firm;