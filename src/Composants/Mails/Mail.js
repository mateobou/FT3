import React from 'react'; 
import MailPage from './Mail blank /MailPage';
import './../../App.css'
import MailList from './Mail list/MailList';
import DragNDropBar from './Drag & drop bar/DragNDropBar';
import DragNDropProvider from './../../useContext/NDragContext';
import NavBar2 from '../bar/bar2/NavBar2';
import NavBar1Reduced from '../bar/bar1/NavBar1';
function Mail(){
    return(
        <DragNDropProvider>
            <NavBar1Reduced/>
            <NavBar2/>
            <div className='Mail'>
                <div className='MailListContainer'>
                    <MailList/>
                </div>
                    
                <MailPage/>
                <DragNDropBar/>
            </div>
        </DragNDropProvider>
            
    );
}
export default Mail;