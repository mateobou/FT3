import './App.css';
import React, {useState} from 'react';
import Mail from './Composants/Mails/Mail';
import MailModelContext from './useContext/MailModelContext';
import { BrowserRouter } from "react-router-dom";

import Dashboard from './Composants/Dashboard/Dashboard';
import NavBar1 from './Composants/bar/bar1/NavBar1';
import NavBar2 from './Composants/bar/bar1/NavBar1';
import Header from './Composants/Header/Header';
import DragContext from './useContext/DragContext';
import NavBar1Reduced from './Composants/bar/bar1/NavBar1';


function App() {
  let [selectMailModel, updateMailContext] = useState(['']);
  let mailContext = {
    activeMail: selectMailModel,
    changeActiveMail: updateMailContext
  }
  let [dragText, updatedragText] = useState(['']);
  let Drag = {
    DragElement: dragText,
    changeDragElement: updatedragText
  }
  return (

      <MailModelContext.Provider value={mailContext}>
        <DragContext.Provider value={Drag}>
          <Header/>
            <div className='app'>
              <Dashboard/>
               
            </div>  
          </DragContext.Provider>
      </MailModelContext.Provider>
 
  );
}

export default App;
