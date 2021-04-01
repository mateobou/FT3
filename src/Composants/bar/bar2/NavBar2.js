import React from 'react';
import SelectionIcone from './../../../images/Selection.png'
function NavBar2(){
    return(
        <div className='NavBar2'>
            <p>Profil</p>
            <p>Contacter</p>
            <div className="NavBar2Line">
                <img src={SelectionIcone}/>
                <p>Document</p>
            </div>
        </div>  
    )
}
export default NavBar2;