import React from 'react';
import './navbar.css';

function Navbar(props){

    function handlelogout(){    
      props.onsetlogin2(true);
			props.onsetlogin(false);
			props.onsetWel(false);
      props.onAdmin(false);
      props.onsetShow(false);
    }
    function handlehome(){
        if(!props.onadminlogin) props.onsetShow(false);
    }

    return(
        <header>
        <div className="container">
          <div className="logo-box">
         {props.onadminlogin ?  <p className="User_name">Hello Suaysh!</p>:<p className="User_name">Hello {props.Username}!</p>}
          </div>
          <nav>
          <ul>
            <li><a onClick= {handlehome}>Home</a></li>
            <li><a onClick={handlelogout}>Log Out</a></li>
            <li><a >About</a></li>
            <li><a >Contact</a></li>
         </ul>
        </nav>
        </div>
      </header>
    )
}
export default Navbar;