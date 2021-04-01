import React from 'react';
import header from './../../images/header.png'
function Header()
{
    return(
        <>
        <div className='headerGhost'>
            
        </div>
        <header>
            <img src={header}/>
            <h2>REVENIR A MES COMPTES</h2>
            <h2>Edouard Bayet</h2>
        </header>
        </>
    );
}
export default Header;