import React from 'react';
import NavBar1 from '../bar/bar1/NavBar1';
import Firm from './Firm/Firm';
import RightBar from './RightBar/RightBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Mail from '../Mails/Mail';
import NavBar1Reduced from '../bar/bar1/NavBar1Reduced';

function Dashboard(){
    return(
            <>
            <NavBar1/>
            
            <div className='Dashboard'>
                <div className='DashboardLeft'>
                    <h1>Progression des incubés</h1>
                    <Firm FirmName='Maury imprimeur' progress='25%'/>
                    <Firm FirmName="Car’s renting and Go" progress='25%'/>
                    <Firm FirmName='Innovation start' progress='25%'/>
                    <Firm FirmName='Loutovation' progress='25%'/>
                </div>
                <RightBar/>
            
            </div>
        </>
    )
}
export default Dashboard;