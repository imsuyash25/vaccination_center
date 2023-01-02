import React from 'react';
import './home.css';
function ShowDose(props){
    
    return(
        <li className='list_vac'>
        <div className="Center">Center: {props.data.Center}</div>
        <div className="Center">Total Slots: {props.data.Slots}</div>
        <div className="Slots">Available Slots: {props.data.Available_Slots}</div>
        <button className="Removecenter" 
        onClick={() => {props.dltcenter(props.thiscenter.filter((item,index) =>index !== props.id)
            );
        }}>Remove Center</button>
        </li>
    )
}
export default ShowDose;
