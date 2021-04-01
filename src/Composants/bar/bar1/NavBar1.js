import React from 'react';
import icone1 from './../../../images/icone1.png'
import icone2 from './../../../images/icone2.png'
import icone3 from './../../../images/icone3.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Dashboard from '../../Dashboard/Dashboard';
import Mail from '../../Mails/Mail';
function NavBar1Reduced()
{
    return(
        <Router>
            <div>
                <div className='NavBar1Reduced'>
                    <div className='Links'>
                        <Link to="/" className="Link">
                            <div className='iconeSelected icone'>
                                <img src={icone1}/>
                                
                            </div>
                        </Link>
                        <Link to="/Mails" className="Link">
                            <img src={icone2} className='icone'/>
                            
                        </Link>
                        <img src={icone3} className='icone'/>
                    </div>
                </div>
                {/*<Switch>//Problème avec les switchs
                    <Route path='/Mails'>
                        <Mail/>
                    </Route>
                    <Route exact path="/">
                        <Dashboard/>
                    </Route>
                    
                </Switch>*/}
            </div>
        </Router>

    )
}
export default NavBar1Reduced;